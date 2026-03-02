# 🎓 EduBot Pro v2 - Curadoria Inteligente

> **Plataforma de curadoria multi-categoria de cursos profissionais 100% gratuitos**

Sistema autônomo powered by Gemini AI que busca em **19 áreas de mercado**, valida com critérios rigorosos e prioriza **QUALIDADE sobre quantidade**.

![Status](https://img.shields.io/badge/status-production-success)
![License](https://img.shields.io/badge/license-MIT-blue)
![Astro](https://img.shields.io/badge/Astro-4.x-FF5D01)
![Python](https://img.shields.io/badge/Python-3.11+-3776AB)

## ✨ Diferenciais

- 🤖 **Busca em 19 Categorias**: Tech, Business, Design, Idiomas, ESG, Biotech e mais
- ✅ **Filtro por Qualidade**: Rejeita cursos obsoletos ou básicos demais
- 🚫 **Sem Limites Arbitrários**: Processa todo volume que atende aos critérios
- ⚡ **Site Estático Ultra-Rápido**: Astro + Tailwind (98+ Lighthouse)
- 🎨 **Design Laboratório Minimalista**: Slate colors, clean, técnico
- 🔍 **Filtros Avançados**: Hard/Soft Skills + tags de categoria
- 💰 **Pronto para Monetização**: AdSense + Afiliados

## 🎯 Categorias Cobertas

### Tecnologia & Dados
- Inteligência Artificial & ML
- Ciência de Dados & Analytics
- Programação & Desenvolvimento
- Cloud Computing & DevOps
- Cybersecurity

### Negócios & Gestão
- Gestão Ágil & Scrum
- Marketing Digital & Growth
- Gestão de Projetos
- Empreendedorismo & Inovação
- Finanças & Investimentos

### Design & Criação
- UX/UI Design
- Design Gráfico & Motion

### Idiomas & Comunicação
- Inglês para Negócios
- Comunicação & Oratória

### Soft Skills
- Liderança & Gestão de Pessoas
- Produtividade & Gestão do Tempo
- Inteligência Emocional

### Áreas Emergentes
- ESG & Sustentabilidade
- Biotecnologia & Saúde Digital

## 🚀 Quick Start

### Pré-requisitos

- Node.js 18+ e npm
- Python 3.11+
- Conta Google Cloud com Gemini API

### Instalação

```bash
# Clone
git clone https://github.com/seu-usuario/edubot-pro-v2.git
cd edubot-pro-v2

# Dependências
npm install
pip install -r requirements.txt

# Configurar API Key
cp .env.example .env
# Edite .env e adicione: GEMINI_API_KEY=sua_chave_aqui
```

### Desenvolvimento

```bash
npm run dev  # Acesse http://localhost:4321
```

### Testar Coletor

```bash
python scripts/coletor.py    # Buscar cursos
python scripts/validator.py  # Validar JSON
```

## 🤖 Curadoria Inteligente

### Critérios de Aprovação (HARD RULES)

1. ✅ **GRATUITO 100%**: Acesso ao conteúdo sem custo
2. ✅ **CERTIFICAÇÃO**: Menção explícita de certificado
3. ✅ **RELEVÂNCIA 2026**: Habilidade exigida no mercado ATUAL
4. ✅ **QUALIDADE PREMIUM**: Fonte confiável, conteúdo atualizado
5. ✅ **NÃO-BÁSICO**: Rejeita cursos superficiais ou obsoletos

### Workflow Diário

**Horário**: 10:00 UTC (07:00 BRT)

1. Itera sobre **19 categorias** de mercado
2. Consulta Gemini API para cada tópico
3. Filtra por qualidade (não por número fixo)
4. Valida schema com Pydantic
5. Merge sem duplicatas
6. Commit automático

## 📦 Deploy

### Vercel (Recomendado)

1. Conecte repositório no Vercel
2. Configure `GEMINI_API_KEY` em Environment Variables
3. Deploy automático!

### Netlify

```bash
netlify deploy --prod
```

## 💰 Monetização

### Google AdSense

Edite `src/components/AdBanner.astro`:

```astro
<AdBanner enabled={true} position="top" adSlot="1234567890" />
```

### Links de Afiliados

No JSON:

```json
{
  "link": "https://curso-original.com",
  "link_afiliado": "https://parceiro.com/curso?ref=edubot"
}
```

## 🎨 Customização

### Adicionar Nova Categoria

Edite `scripts/coletor.py`:

```python
TOPICS_CATEGORIAS.append({
    "nome": "Sua Nova Categoria",
    "keywords": ["keyword1", "keyword2"],
    "categoria": "Hard Skill"  # ou "Soft Skill"
})
```

### Ajustar Prompt de Qualidade

Em `scripts/coletor.py` → `criar_prompt_curacao_inteligente()`

## 📊 Estrutura JSON

```json
{
  "ultima_atualizacao": "ISO-8601",
  "total_cursos": 150,
  "cursos": [
    {
      "id": "unique_id",
      "titulo": "Nome do Curso",
      "instituicao": "Plataforma",
      "link": "URL",
      "categoria": "Hard Skill",
      "tags": ["tag1", "tag2"],
      "descricao": "Por que é valioso",
      "certificado_gratuito": true,
      "imagem": "URL ou vazio"
    }
  ]
}
```

## 🧪 Validação

```bash
# Validar JSON
python scripts/validator.py

# Build Astro
npm run build
npm run preview
```

## 📝 Roadmap

- [ ] Mais plataformas (Udemy Free, Alura)
- [ ] Sistema de favoritos (localStorage)
- [ ] Newsletter de novos cursos
- [ ] API REST pública
- [ ] PWA (offline support)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit (`git commit -m 'Adiciona funcionalidade'`)
4. Push (`git push origin feature/NovaFuncionalidade`)
5. Abra Pull Request

## 📄 Licença

MIT License

## 🙏 Créditos

- **Google Gemini AI** - Curadoria inteligente
- **Astro** - Framework ultra-rápido
- **Tailwind CSS** - Design system

---

<p align="center">
  Desenvolvido com ❤️ e ☕ | <strong>Qualidade > Quantidade</strong>
</p>
