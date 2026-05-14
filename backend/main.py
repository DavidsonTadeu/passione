from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, schemas, database
import datetime

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Salão de Beleza API MVP")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"message": "API rodando"}

@app.get("/api/dashboard")
def get_dashboard(db: Session = Depends(get_db)):
    comandas = db.query(models.Comanda).filter(models.Comanda.status == "fechada").all()
    faturamento = sum([c.total for c in comandas])
    agendamentos = db.query(models.Agendamento).filter(models.Agendamento.status == "agendado").count()
    return {
        "faturamento_hoje": faturamento,
        "agendamentos_hoje": agendamentos,
        "novos_clientes": db.query(models.Cliente).count(),
        "servicos_realizados": len(comandas)
    }

@app.get("/api/servicos", response_model=list[schemas.ServicoResponse])
def get_servicos(db: Session = Depends(get_db)):
    return db.query(models.Servico).all()

@app.post("/api/servicos", response_model=schemas.ServicoResponse)
def create_servico(servico: schemas.ServicoCreate, db: Session = Depends(get_db)):
    db_servico = models.Servico(**servico.dict())
    db.add(db_servico)
    db.commit()
    db.refresh(db_servico)
    return db_servico

@app.get("/api/clientes", response_model=list[schemas.ClienteResponse])
def get_clientes(db: Session = Depends(get_db)):
    return db.query(models.Cliente).all()

@app.post("/api/clientes", response_model=schemas.ClienteResponse)
def create_cliente(cliente: schemas.ClienteCreate, db: Session = Depends(get_db)):
    db_cliente = models.Cliente(**cliente.dict())
    db.add(db_cliente)
    db.commit()
    db.refresh(db_cliente)
    return db_cliente

# --- Módulo: Agenda Inteligente ---

@app.post("/api/agendamentos")
def criar_agendamento(agendamento: schemas.AgendamentoCreate, db: Session = Depends(get_db)):
    # 1. Obter a duração do serviço
    servico = db.query(models.Servico).filter(models.Servico.id == agendamento.servico_id).first()
    if not servico:
        raise HTTPException(status_code=404, detail="Serviço não encontrado.")
    
    duracao = datetime.timedelta(minutes=servico.duracao_minutos)
    hora_fim_desejada = agendamento.data_hora + duracao

    # 2. Motor de Colisão (Se não for Encaixe forçado pelo Admin)
    # is_encaixe só pode ser True se a requisição vier do Painel Web autenticado
    if not getattr(agendamento, 'is_encaixe', False):
        conflitos = db.query(models.Agendamento).filter(
            models.Agendamento.profissional_id == agendamento.usuario_id,
            models.Agendamento.status == "agendado",
            models.Agendamento.data_hora < hora_fim_desejada,
            models.Agendamento.data_hora + datetime.timedelta(minutes=60) > agendamento.data_hora
        ).all()
        
        if conflitos:
            raise HTTPException(
                status_code=409, 
                detail="Horário indisponível. Conflito com a agenda do profissional."
            )

    # 3. Criação
    novo_agendamento = models.Agendamento(
        cliente_id=agendamento.cliente_id,
        servico_id=agendamento.servico_id,
        profissional_id=agendamento.usuario_id,
        data_hora=agendamento.data_hora,
        is_encaixe=getattr(agendamento, 'is_encaixe', False)
    )
    db.add(novo_agendamento)
    db.commit()
    db.refresh(novo_agendamento)
    return novo_agendamento

@app.post("/api/agendamentos/{agendamento_id}/cancelar")
def cancelar_agendamento(agendamento_id: int, db: Session = Depends(get_db)):
    agendamento = db.query(models.Agendamento).filter(models.Agendamento.id == agendamento_id).first()
    if not agendamento:
        raise HTTPException(status_code=404, detail="Agendamento não encontrado.")
    
    agendamento.status = "cancelado"
    db.commit()

    # --- Gatilho da Lista de Espera ---
    # Busca clientes na lista aguardando vaga para a mesma data e profissional
    data_alvo = agendamento.data_hora.date()
    fila = db.query(models.ListaEspera).filter(
        models.ListaEspera.status == "aguardando",
        models.ListaEspera.profissional_id == agendamento.profissional_id
    ).all()

    for item in fila:
        if item.data_desejada.date() == data_alvo:
            # Simulando o disparo de WhatsApp para o cliente da fila
            cliente = db.query(models.Cliente).filter(models.Cliente.id == item.cliente_id).first()
            if cliente:
                print(f"[MOTOR AGENDA - WHATSAPP SIMULADO] Disparando para {cliente.telefone}:")
                print(f"'Olá {cliente.nome}! Surgiu uma vaga na data que você queria! Responda SIM para confirmar o agendamento.'")
            
            # Atualiza o status para não notificar a mesma pessoa duas vezes pela mesma vaga
            item.status = "notificado"
            db.commit()
            break # Notifica apenas o primeiro da fila por vez

    return {"message": "Agendamento cancelado. Lista de espera processada."}
