param()

$ErrorActionPreference = "Stop"

$pythonCmd = ""

# 1. Verifica se 'python' ou 'py' estão instalados e acessíveis no PATH
if (Get-Command "python" -ErrorAction SilentlyContinue) {
    $pythonCmd = "python"
} elseif (Get-Command "py" -ErrorAction SilentlyContinue) {
    $pythonCmd = "py"
} else {
    Write-Host ""
    Write-Host "================================================================" -ForegroundColor Red
    Write-Host " ERRO CRÍTICO: Python não encontrado!" -ForegroundColor Red
    Write-Host "================================================================" -ForegroundColor Red
    Write-Host "O Python não está instalado ou não foi adicionado ao PATH do Windows."
    Write-Host "Siga as instruções abaixo para resolver:" -ForegroundColor Yellow
    Write-Host "  1. Acesse: https://www.python.org/downloads/windows/"
    Write-Host "  2. Baixe o instalador mais recente (ex: Python 3.12+)."
    Write-Host "  3. Ao abrir o instalador, ANTES de clicar em 'Install Now',"
    Write-Host "     MARQUE A CAIXA: [x] Add Python to PATH (Geralmente no rodapé da janela)." -ForegroundColor Cyan
    Write-Host "  4. Clique em 'Install Now' e aguarde finalizar."
    Write-Host "  5. FECHE este terminal (VS Code ou PowerShell)."
    Write-Host "  6. Abra o terminal novamente e rode este script."
    Write-Host "================================================================" -ForegroundColor Red
    Write-Host ""
    exit 1
}

$version = & $pythonCmd --version
Write-Host "OK - Encontrado: $version" -ForegroundColor Green

# 2. Cria o ambiente virtual (venv) se não existir
if (-Not (Test-Path "venv")) {
    Write-Host "Ambiente virtual (venv) não encontrado. Criando agora..." -ForegroundColor Yellow
    & $pythonCmd -m venv venv
}

# 3. Ativa o ambiente virtual
$activateScript = ".\venv\Scripts\Activate.ps1"
if (Test-Path $activateScript) {
    Write-Host "Ativando o ambiente virtual..." -ForegroundColor Cyan
    . $activateScript
} else {
    Write-Host "ERRO: Arquivo de ativação do venv não encontrado." -ForegroundColor Red
    exit 1
}

# 4. Instala dependências do FastAPI e do sistema
Write-Host "Checando e instalando dependências..." -ForegroundColor Yellow
python -m pip install --upgrade pip -q

if (-Not (Test-Path "requirements.txt")) {
    Write-Host "Arquivo requirements.txt não existe. Criando com dependências do MVP..." -ForegroundColor Yellow
    pip install fastapi uvicorn sqlalchemy pydantic "pyjwt[crypto]" "passlib[bcrypt]" python-multipart
    pip freeze > requirements.txt
} else {
    pip install -r requirements.txt
}

# 5. Inicializa o servidor backend
Write-Host "Tudo pronto! Iniciando o servidor Uvicorn FastAPI..." -ForegroundColor Green
Write-Host "Acesse a documentação da API em: http://localhost:8000/docs" -ForegroundColor Cyan
Write-Host "Pressione CTRL+C para parar o servidor." -ForegroundColor Yellow
Write-Host ""

uvicorn main:app --reload
