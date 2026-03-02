# EduBot Pro - Deploy Automatizado (PowerShell)
# Execute no PowerShell: .\deploy.ps1

Write-Host "🚀 EduBot Pro - Deploy Automatizado" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

# Verificar Git
if (!(Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Git não encontrado. Instale: https://git-scm.com/" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Git encontrado" -ForegroundColor Green
Write-Host ""

# Configurar Git (se necessário)
$gitUserName = git config user.name
if ([string]::IsNullOrEmpty($gitUserName)) {
    Write-Host "⚙️ Configurando Git..." -ForegroundColor Yellow
    $nome = Read-Host "Seu nome"
    $email = Read-Host "Seu email"
    git config --global user.name "$nome"
    git config --global user.email "$email"
}

# Inicializar repositório
if (!(Test-Path ".git")) {
    Write-Host "📦 Inicializando repositório Git..." -ForegroundColor Yellow
    git init
    git branch -M main
    Write-Host "✅ Repositório criado" -ForegroundColor Green
} else {
    Write-Host "✅ Repositório Git já existe" -ForegroundColor Green
}

# Adicionar arquivos
Write-Host ""
Write-Host "📝 Adicionando arquivos..." -ForegroundColor Yellow
git add .
git commit -m "EduBot Pro - Deploy com 100 cursos e AdSense" 2>$null

Write-Host ""
Write-Host "🌐 Próximos passos:" -ForegroundColor Cyan
Write-Host "1. Crie repositório no GitHub: https://github.com/new"
Write-Host "2. Copie a URL do repositório (ex: https://github.com/SEU_USUARIO/edubot-pro.git)"
Write-Host "3. Execute: git remote add origin URL_DO_REPOSITORIO"
Write-Host "4. Execute: git push -u origin main"
Write-Host "5. Conecte no Vercel: https://vercel.com/new"
Write-Host ""
Write-Host "✅ Preparação completa!" -ForegroundColor Green
