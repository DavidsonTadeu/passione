from pydantic import BaseModel
from typing import List, Optional
import datetime

# --- Autenticação ---
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: str | None = None

class UsuarioBase(BaseModel):
    email: str
    nome: str

class UsuarioCreate(UsuarioBase):
    password: str

class UsuarioResponse(UsuarioBase):
    id: int
    is_active: bool
    class Config:
        from_attributes = True

# --- Serviços ---
class ServicoBase(BaseModel):
    nome: str
    preco: float
    duracao_minutos: int

class ServicoCreate(ServicoBase):
    pass

class ServicoResponse(ServicoBase):
    id: int
    class Config:
        from_attributes = True

# --- Clientes ---
class ClienteBase(BaseModel):
    nome: str
    telefone: Optional[str] = None

class ClienteCreate(ClienteBase):
    pass

class ClienteResponse(ClienteBase):
    id: int
    class Config:
        from_attributes = True

# --- Agendamentos ---
class AgendamentoBase(BaseModel):
    cliente_id: int
    servico_id: int
    usuario_id: int
    data_hora: datetime.datetime
    status: str = "agendado"

class AgendamentoCreate(AgendamentoBase):
    pass

class AgendamentoResponse(AgendamentoBase):
    id: int
    class Config:
        from_attributes = True

# --- Comandas ---
class ComandaItemBase(BaseModel):
    servico_id: int
    preco_aplicado: float

class ComandaItemCreate(ComandaItemBase):
    pass

class ComandaItemResponse(ComandaItemBase):
    id: int
    comanda_id: int
    class Config:
        from_attributes = True

class ComandaBase(BaseModel):
    cliente_id: Optional[int] = None
    total: float = 0.0
    status: str = "aberta"

class ComandaCreate(ComandaBase):
    pass

class ComandaResponse(ComandaBase):
    id: int
    data: datetime.datetime
    itens: List[ComandaItemResponse] = []
    class Config:
        from_attributes = True
