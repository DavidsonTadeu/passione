from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Float, DateTime
from sqlalchemy.orm import relationship
import datetime
from .database import Base

class Usuario(Base):
    __tablename__ = "usuarios"
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)

class Servico(Base):
    __tablename__ = "servicos"
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, index=True)
    preco = Column(Float)
    duracao_minutos = Column(Integer)

class Cliente(Base):
    __tablename__ = "clientes"
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, index=True)
    telefone = Column(String)
    pontos_fidelidade = Column(Integer, default=0)

class Agendamento(Base):
    __tablename__ = "agendamentos"
    id = Column(Integer, primary_key=True, index=True)
    cliente_id = Column(Integer, ForeignKey("clientes.id"))
    servico_id = Column(Integer, ForeignKey("servicos.id"))
    usuario_id = Column(Integer, ForeignKey("usuarios.id"))
    data_hora = Column(DateTime)
    status = Column(String, default="agendado") # agendado, concluido, cancelado
    is_encaixe = Column(Boolean, default=False)
    valor_sinal = Column(Float, default=0.0)

class Comanda(Base):
    __tablename__ = "comandas"
    id = Column(Integer, primary_key=True, index=True)
    cliente_id = Column(Integer, ForeignKey("clientes.id"), nullable=True)
    data = Column(DateTime, default=datetime.datetime.utcnow)
    total = Column(Float, default=0.0)
    status = Column(String, default="aberta") # aberta, fechada

class ComandaItem(Base):
    __tablename__ = "comanda_itens"
    id = Column(Integer, primary_key=True, index=True)
    comanda_id = Column(Integer, ForeignKey("comandas.id"))
    servico_id = Column(Integer, ForeignKey("servicos.id"))
    preco_aplicado = Column(Float)
    
    comanda = relationship("Comanda")
    servico = relationship("Servico")

# --- Fase SaaS: Estoque e Financeiro Avançado ---
class Produto(Base):
    __tablename__ = "produtos"
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, index=True)
    tipo = Column(String) # 'consumo' ou 'varejo'
    qtd_atual = Column(Integer, default=0)
    estoque_minimo = Column(Integer, default=5)
    data_validade = Column(DateTime, nullable=True)
    custo_aquisicao = Column(Float, default=0.0)
    preco_venda = Column(Float, nullable=True)
    # Lucro = preco_venda - custo_aquisicao (calculado no schema/frontend)

class TransacaoEstoque(Base):
    __tablename__ = "transacoes_estoque"
    id = Column(Integer, primary_key=True, index=True)
    produto_id = Column(Integer, ForeignKey("produtos.id"))
    tipo_transacao = Column(String) # 'entrada', 'saida', 'vencido'
    quantidade = Column(Integer)
    data = Column(DateTime, default=datetime.datetime.utcnow)

class TransacaoFinanceira(Base):
    __tablename__ = "transacoes_financeiras"
    id = Column(Integer, primary_key=True, index=True)
    descricao = Column(String)
    tipo = Column(String) # 'receita', 'despesa', 'taxa_cartao'
    valor = Column(Float)
    data_vencimento = Column(DateTime, nullable=True)
    data_pagamento = Column(DateTime, nullable=True)
    status = Column(String, default="pendente") # pendente, pago
    gateway_id = Column(String, nullable=True) # ID do Mercado Pago (se aplicável)

class ComissaoProfissional(Base):
    __tablename__ = "comissoes_profissionais"
    id = Column(Integer, primary_key=True, index=True)
    usuario_id = Column(Integer, ForeignKey("usuarios.id"))
    comanda_id = Column(Integer, ForeignKey("comandas.id"), nullable=True)
    valor_servico = Column(Float)
    taxa_comissao = Column(Float) # ex: 0.40 para 40%
    valor_comissao = Column(Float)
    tipo = Column(String, default="comissao") # comissao, vale_adiantamento
    data = Column(DateTime, default=datetime.datetime.utcnow)
    status_pagamento = Column(String, default="pendente") # pendente, pago

class JornadaProfissional(Base):
    __tablename__ = "jornada_trabalho"
    id = Column(Integer, primary_key=True, index=True)
    dia_semana = Column(String) # 'segunda', 'terca', etc
    hora_inicio = Column(String)
    hora_fim = Column(String)

class RegraFidelidade(Base):
    __tablename__ = "regras_fidelidade"
    id = Column(Integer, primary_key=True, index=True)
    valor_reais = Column(Float)
    pontos_ganhos = Column(Integer)

class ListaEspera(Base):
    __tablename__ = "lista_espera"
    id = Column(Integer, primary_key=True, index=True)
    cliente_id = Column(Integer, ForeignKey("clientes.id"))
    servico_id = Column(Integer, ForeignKey("servicos.id"))
    profissional_id = Column(Integer, ForeignKey("usuarios.id"), nullable=True)
    data_desejada = Column(DateTime)
    periodo = Column(String) # 'manha', 'tarde', 'noite', 'qualquer'
    status = Column(String, default="aguardando") # aguardando, notificado, agendado, expirado
    data_registro = Column(DateTime, default=datetime.datetime.utcnow)
