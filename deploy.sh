#!/bin/bash
# Script de deploy automatizado para Vercel

echo "🚀 EduBot Pro - Deploy Automatizado"
echo "===================================="
echo ""

# Verificar se Git está instalado
if ! command -v git &> /dev/null; then
    echo "❌ Git não encontrado. Instale: https://git-scm.com/"
    exit 1
fi

echo "✅ Git encontrado"
echo ""

# Inicializar repositório
if [ ! -d ".git" ]; then
    echo "📦 Inicializando repositório Git..."
    git init
    git branch -M main
    echo "✅ Repositório criado"
else
    echo "✅ Repositório Git já existe"
fi

# Adicionar arquivos
echo ""
echo "📝 Adicionando arquivos..."
git add .
git commit -m "EduBot Pro - Deploy com 100 cursos e AdSense" 2>/dev/null || echo "Nada para commitar"

echo ""
echo "🌐 Próximos passos:"
echo "1. Crie repositório no GitHub: https://github.com/new"
echo "2. Execute: git remote add origin https://github.com/SEU_USUARIO/edubot-pro.git"
echo "3. Execute: git push -u origin main"
echo "4. Conecte no Vercel: https://vercel.com/new"
echo ""
echo "✅ Preparação completa!"
