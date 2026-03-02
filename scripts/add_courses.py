#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Script para adicionar 70 cursos ao JSON existente"""
import json
import sys
import os

# Fix Windows encoding
sys.stdout.reconfigure(encoding='utf-8') if hasattr(sys.stdout, 'reconfigure') else None

# Carregar JSON existente
json_path = os.path.join('src', 'data', 'cursos.json')
with open(json_path, 'r', encoding='utf-8') as f:
    database = json.load(f)

print(f"Cursos atuais: {len(database['cursos'])}")

# 70 novos cursos adicionais
novos_cursos = [
    # CATEGORIA: IA & ML (continuação)
    {
        "id": "deep_learning_ai_1738855300",
        "titulo": "Deep Learning Specialization",
        "instituicao": "DeepLearning.AI (Coursera)",
        "link": "https://www.coursera.org/specializations/deep-learning",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Deep Learning", "Neural Networks", "IA"],
        "descricao": "Especialização completa em deep learning com Andrew Ng.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "tensorflow_google_1738855301",
        "titulo": "Introduction to TensorFlow",
        "instituicao": "Google (Coursera)",
        "link": "https://www.coursera.org/learn/introduction-tensorflow",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["TensorFlow", "Python", "ML"],
        "descricao": "Aprenda TensorFlow para desenvolvimento de modelos de machine learning.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    # DATA SCIENCE
    {
        "id": "sql_data_science_1738855302",
        "titulo": "SQL for Data Science",
        "instituicao": "UC Davis (Coursera)",
        "link": "https://www.coursera.org/learn/sql-for-data-science",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["SQL", "Database", "Data Science"],
        "descricao": "SQL essencial para análise de dados e ciência de dados.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "r_programming_1738855303",
        "titulo": "R Programming",
        "instituicao": "Johns Hopkins University (Coursera)",
        "link": "https://www.coursera.org/learn/r-programming",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["R", "Estatística", "Data Science"],
        "descricao": "Programação em R para análise estatística e visualização de dados.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "tableau_fundamentals_1738855304",
        "titulo": "Tableau Fundamentals",
        "instituicao": "Tableau (LinkedIn Learning)",
        "link": "https://www.linkedin.com/learning/tableau-essential-training-2020-1",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Tableau", "BI", "Visualização"],
        "descricao": "Domine o Tableau para criar visualizações de dados impactantes.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    # PROGRAMAÇÃO
    {
        "id": "javascript_fullstack_1738855305",
        "titulo": "JavaScript Completo: do Básico ao Avançado",
        "instituicao": "Fundação Bradesco - Escola Virtual",
        "link": "https://www.ev.org.br/cursos/javascript",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["JavaScript", "Web", "Programação"],
        "descricao": "JavaScript completo para desenvolvimento web moderno.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "react_complete_1738855306",
        "titulo": "React - The Complete Guide",
        "instituicao": "Meta (Coursera)",
        "link": "https://www.coursera.org/learn/react-basics",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["React", "JavaScript", "Frontend"],
        "descricao": "Desenvolvimento frontend moderno com React da Meta (Facebook).",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "nodejs_backend_1738855307",
        "titulo": "Node.js: Backend Development",
        "instituicao": "IBM (Coursera)",
        "link": "https://www.coursera.org/learn/developing-back-end-apps-with-nodejs-and-express",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Node.js", "Backend", "JavaScript"],
        "descricao": "Desenvolvimento backend com Node.js e Express.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "java_programming_1738855308",
        "titulo": "Java Programming and Software Engineering",
        "instituicao": "Duke University (Coursera)",
        "link": "https://www.coursera.org/specializations/java-programming",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Java", "Programação", "Software"],
        "descricao": "Programação Java e engenharia de software.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "git_github_1738855309",
        "titulo": "Git e GitHub Essencial",
        "instituicao": "Fundação Bradesco - Escola Virtual",
        "link": "https://www.ev.org.br/cursos/git-e-github",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Git", "GitHub", "Versionamento"],
        "descricao": "controle de versão com Git e colaboração com GitHub.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    # CLOUD & DEVOPS (continuação)
    {
        "id": "docker_kubernetes_1738855310",
        "titulo": "Docker e Kubernetes: Fundamentos",
        "instituicao": "IBM (Coursera)",
        "link": "https://www.coursera.org/learn/ibm-containers-docker-kubernetes-openshift",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Docker", "Kubernetes", "DevOps"],
        "descricao": "Containerização e orquestração com Docker e Kubernetes.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "gcp_fundamentals_1738855311",
        "titulo": "Google Cloud Platform Fundamentals",
        "instituicao": "Google Cloud",
        "link": "https://cloud.google.com/training/courses",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["GCP", "Cloud", "Google"],
        "descricao": "Fundamentos da Google Cloud Platform para iniciantes.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "terraform_iac_1738855312",
        "titulo": "Infrastructure as Code with Terraform",
        "instituicao": "HashiCorp (Learn Platform)",
        "link": "https://learn.hashicorp.com/terraform",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Terraform", "IaC", "DevOps"],
        "descricao": "Automação de infraestrutura com Terraform.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    # CYBERSECURITY (continuação)
    {
        "id": "ethical_hacking_1738855313",
        "titulo": "Ethical Hacking Essentials",
        "instituicao": "EC-Council (iClass)",
        "link": "https://iclass.eccouncil.org/",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Ethical Hacking", "Pentest", "Segurança"],
        "descricao": "Fundamentos de hacking ético e testes de penetração.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "iso27001_1738855314",
        "titulo": "Segurança da Informação: ISO 27001",
        "instituicao": "Fundação Bradesco - Escola Virtual",
        "link": "https://www.ev.org.br/cursos/seguranca-da-informacao",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["ISO 27001", "Segurança", "Compliance"],
        "descricao": "Fundamentos da ISO 27001 para segurança da informação.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    # MARKETING DIGITAL (continuação)
    {
        "id": "seo_fundamentals_1738855315",
        "titulo": "SEO Fundamentals",
        "instituicao": "UC Davis (Coursera)",
        "link": "https://www.coursera.org/learn/seo-fundamentals",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["SEO", "Marketing", "Google"],
        "descricao": "Otimização para mecanismos de busca e marketing orgânico.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "content_marketing_1738855316",
        "titulo": "Content Marketing Strategy",
        "instituicao": "HubSpot Academy",
        "link": "https://academy.hubspot.com/courses/content-marketing",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Content Marketing", "Marketing", "Estratégia"],
        "descricao": "Estratégia de marketing de conteúdo da HubSpot.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1542435503-956c469947f6?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "social_media_marketing_1738855317",
        "titulo": "Social Media Marketing",
        "instituicao": "Northwestern University (Coursera)",
        "link": "https://www.coursera.org/specializations/social-media-marketing",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Social Media", "Marketing", "Redes Sociais"],
        "descricao": "Marketing em mídias sociais completo.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "email_marketing_1738855318",
        "titulo": "Email Marketing Certification",
        "instituicao": "HubSpot Academy",
        "link": "https://academy.hubspot.com/courses/email-marketing",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Email Marketing", "Marketing", "Automação"],
        "descricao": "Certificação em email marketing da HubSpot.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    # GESTÃO DE PROJETOS (continuação)
    {
        "id": "pmp_exam_prep_1738855319",
        "titulo": "PMP Exam Preparation",
        "instituicao": "Project Management Institute",
        "link": "https://www.pmi.org/certifications/project-management-pmp",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["PMP", "PMI", "Gestão de Projetos"],
        "descricao": "Preparação para certificação PMP do PMI.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "prince2_foundation_1738855320",
        "titulo": "PRINCE2 Foundation",
        "instituicao": "AXELOS",
        "link": "https://www.axelos.com/certifications/propath/prince2-project-management",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["PRINCE2", "Gestão", "Projetos"],
        "descricao": "Metodologia PRINCE2 para gestão de projetos.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "kanban_management_1738855321",
        "titulo": "Kanban Management Professional",
        "instituicao": "Kanban University",
        "link": "https://kanban.university/",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Kanban", "Agile", "Gestão"],
        "descricao": "Gestão de fluxo de trabalho com método Kanban.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    # EMPREENDEDORISMO (continuação)
    {
        "id": "lean_startup_1738855322",
        "titulo": "The Lean Startup Method",
        "instituicao": "Udemy (Eric Ries)",
        "link": "https://www.udemy.com/course/lean-startup/",
        "link_afiliado": None,
        "categoria": "Soft Skill",
        "tags": ["Lean Startup", "Empreendedorismo", "Startups"],
        "descricao": "Metodologia Lean Startup para validação de negócios.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "business_model_canvas_1738855323",
        "titulo": "Business Model Canvas",
        "instituicao": "SEBRAE",
        "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline",
        "link_afiliado": None,
        "categoria": "Soft Skill",
        "tags": ["Business Model", "Canvas", "Negócios"],
        "descricao": "Modelagem de negócios com Business Model Canvas.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    # FINANÇAS (continuação)
    {
        "id": "contabilidade_basica_1738855324",
        "titulo": "Contabilidade Básica",
        "instituicao": "Fundação Bradesco - Escola Virtual",
        "link": "https://www.ev.org.br/cursos/contabilidade-basica",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Contabilidade", "Finanças", "Gestão"],
        "descricao": "Fundamentos de contabilidade para não-contadores.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "financial_modeling_1738855325",
        "titulo": "Financial Modeling & Valuation",
        "instituicao": "University of Pennsylvania (Coursera)",
        "link": "https://www.coursera.org/learn/wharton-financial-modeling-valuation",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Modelagem Financeira", "Valuation", "Finanças"],
        "descricao": "Modelagem financeira e valuation de empresas.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "crypto_blockchain_1738855326",
        "titulo": "Blockchain and Cryptocurrency",
        "instituicao": "University of California (Coursera)",
        "link": "https://www.coursera.org/learn/cryptocurrency",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Blockchain", "Cripto", "Web3"],
        "descricao": "Fundamentos de blockchain e criptomoedas.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    # UX/UI DESIGN (continuação)
    {
        "id": "figma_ui_design_1738855327",
        "titulo": "Figma UI/UX Design",
        "instituicao": "Udemy",
        "link": "https://www.udemy.com/course/figma-ux-ui-design/",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Figma", "UI", "UX"],
        "descricao": "Design de interfaces modernas com Figma.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "user_research_1738855328",
        "titulo": "User Experience Research",
        "instituicao": "University of Michigan (Coursera)",
        "link": "https://www.coursera.org/learn/user-research",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["UX Research", "Pesquisa", "Design"],
        "descricao": "Pesquisa de usuário para design centrado no ser humano.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "ui_animation_1738855329",
        "titulo": "UI Animation and Micro-interactions",
        "instituicao": "Interaction Design Foundation",
        "link": "https://www.interaction-design.org/courses/ui-animation",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Animação", "UI", "Interação"],
        "descricao": "Animações e micro-interações para interfaces modernas.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    # DESIGN GRÁFICO (continuação)
    {
        "id": "illustrator_advanced_1738855330",
        "titulo": "Adobe Illustrator - Avançado",
        "instituicao": "Fundação Bradesco - Escola Virtual",
        "link": "https://www.ev.org.br/cursos/adobe-illustrator",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Illustrator", "Adobe", "Design"],
        "descricao": "Técnicas avançadas de Illustrator para design vetorial.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "after_effects_motion_1738855331",
        "titulo": "After Effects: Motion Graphics",
        "instituicao": "Adobe Learn",
        "link": "https://helpx.adobe.com/after-effects/tutorials.html",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["After Effects", "Motion", "Vídeo"],
        "descricao": "Motion graphics e animação com After Effects.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
   {
        "id": "graphic_design_principles_1738855332",
        "titulo": "Graphic Design Fundamentals",
        "instituicao": "CalArts (Coursera)",
        "link": "https://www.coursera.org/specializations/graphic-design",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Design Gráfico", "Fundamentos", "Arte"],
        "descricao": "Fundamentos de design gráfico da California Institute of the Arts.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    # IDIOMAS (continuação)
    {
        "id": "toefl_preparation_1738855333",
        "titulo": "TOEFL Test Preparation",
        "instituicao": "ETS (TOEFL Official)",
        "link": "https://www.ets.org/toefl/test-takers/ibt/prepare.html",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["TOEFL", "Inglês", "Certificação"],
        "descricao": "Preparação para o exame TOEFL iBT.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "ielts_academic_1738855334",
        "titulo": "IELTS Academic Preparation",
        "instituicao": "British Council",
        "link": "https://www.britishcouncil.org/exam/ielts/prepare",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["IELTS", "Inglês", "Academic"],
        "descricao": "Preparação para IELTS acadêmico.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "spanish_beginners_1738855335",
        "titulo": "Español para Principiantes",
        "instituicao": "Duolingo",
        "link": "https://www.duolingo.com/course/es/en/Learn-Spanish",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Espanhol", "Idiomas", "Básico"],
        "descricao": "Espanhol para iniciantes de forma gamificada.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1589409514187-c21d14df0d04?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    # COMUNICAÇÃO (continuação)
    {
        "id": "ted_public_speaking_1738855336",
        "titulo": "TED Masterclass: Public Speaking",
        "instituicao": "TED",
        "link": "https://www.ted.com/participate/ted-masterclass",
        "link_afiliado": None,
        "categoria": "Soft Skill",
        "tags": ["Public Speaking", "TED", "Apresentações"],
        "descricao": "Técnicas de apresentação dos palestrantes TED.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "storytelling_business_1738855337",
        "titulo": "Storytelling for Business",
        "instituicao": "LinkedIn Learning",
        "link": "https://www.linkedin.com/learning/storytelling-for-business",
        "link_afiliado": None,
        "categoria": "Soft Skill",
        "tags": ["Storytelling", "Comunicação", "Business"],
        "descricao": "Arte de contar histórias para negócios.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "copywriting_1738855338",
        "titulo": "Copywriting: Escrita Persuasiva",
        "instituicao": "Rock Content University",
        "link": "https://university.rockcontent.com/",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Copywriting", "Escrita", "Marketing"],
        "descricao": "Técnicas de escrita persuasiva para marketing.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    # LIDERANÇA (continuação)
    {
        "id": "servant_leadership_1738855339",
        "titulo": "Servant Leadership",
        "instituicao": "Greenleaf Center",
        "link": "https://www.greenleaf.org/what-is-servant-leadership/",
        "link_afiliado": None,
        "categoria": "Soft Skill",
        "tags": ["Liderança Servidora", "Gestão", "Liderança"],
        "descricao": "Liderança servidora: liderar servindo.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "coaching_fundamentals_1738855340",
        "titulo": "Coaching Fundamentals",
        "instituicao": "ICF (International Coaching Federation)",
        "link": "https://coachingfederation.org/",
        "link_afiliado": None,
        "categoria": "Soft Skill",
        "tags": ["Coaching", "Desenvolvimento", "Liderança"],
        "descricao": "Fundamentos de coaching profissional.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "feedback_cultura_1738855341",
        "titulo": "Cultura de Feedback",
        "instituicao": "FGV (Fundação Getulio Vargas)",
        "link": "https://educacao-executiva.fgv.br/cursos/gratuitos",
        "link_afiliado": None,
        "categoria": "Soft Skill",
        "tags": ["Feedback", "Cultura", "Gestão"],
        "descricao": "Como criar cultura de feedback construtivo.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    # PRODUTIVIDADE (continuação)
    {
        "id": "gtd_getting_things_done_1738855342",
        "titulo": "Getting Things Done (GTD)",
        "instituicao": "David Allen Company",
        "link": "https://gettingthingsdone.com/",
        "link_afiliado": None,
        "categoria": "Soft Skill",
        "tags": ["GTD", "Produtividade", "Organização"],
        "descricao": "Método GTD para máxima produtividade.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "focus_deep_work_1738855343",
        "titulo": "Deep Work: Foco Profundo",
        "instituicao": "Cal Newport (MasterClass)",
        "link": "https://www.masterclass.com/",
        "link_afiliado": None,
        "categoria": "Soft Skill",
        "tags": ["Foco", "Deep Work", "Concentração"],
        "descricao": "Técnicas para trabalho focado e produtivo.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "notion_productivity_1738855344",
        "titulo": "Notion: Produtividade Total",
        "instituicao": "Notion Academy",
        "link": "https://www.notion.so/",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Notion", "Produtividade", "Organização"],
        "descricao": "Domine o Notion para produtividade máxima.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    # INTELIGÊNCIA EMOCIONAL (continuação)
    {
        "id": "mindfulness_meditation_1738855345",
        "titulo": "Mindfulness e Meditação",
        "instituicao": "Headspace",
        "link": "https://www.headspace.com/meditation",
        "link_afiliado": None,
        "categoria": "Soft Skill",
        "tags": ["Mindfulness", "Meditação", "Bem-estar"],
        "descricao": "Prática de mindfulness para equilíbrio mental.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "resilience_training_1738855346",
        "titulo": "Desenvolvimento de Resiliência",
        "instituicao": "Fundação Bradesco - Escola Virtual",
        "link": "https://www.ev.org.br/cursos/resiliencia",
        "link_afiliado": None,
        "categoria": "Soft Skill",
        "tags": ["Resiliência", "Bem-estar", "Psicologia"],
        "descricao": "Fortaleça sua resiliência para superar desafios.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "emotional_intelligence_yale_1738855347",
        "titulo": "The Science of Well-Being",
        "instituicao": "Yale University (Coursera)",
        "link": "https://www.coursera.org/learn/the-science-of-well-being",
        "link_afiliado": None,
        "categoria": "Soft Skill",
        "tags": ["Bem-estar", "Felicidade", "IE"],
        "descricao": "Ciência do bem-estar e felicidade de Yale.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    # ESG (continuação)
    {
        "id": "sustentabilidade_empresarial_1738855348",
        "titulo": "Sustentabilidade Empresarial",
        "instituicao": "FGV (Fundação Getulio Vargas)",
        "link": "https://educacao-executiva.fgv.br/cursos/gratuitos",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Sustentabilidade", "ESG", "Empresas"],
        "descricao": "Práticas de sustentabilidade no mundo corporativo.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "economia_circular_1738855349",
        "titulo": "Economia Circular",
        "instituicao": "Ellen MacArthur Foundation",
        "link": "https://ellenmacarthurfoundation.org/",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Economia Circular", "Sustentabilidade", "ESG"],
        "descricao": "Fundamentos de economia circular e regenerativa.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "carbon_footprint_1738855350",
        "titulo": "Climate Change & Carbon Footprint",
        "instituicao": "University of Edinburgh (Coursera)",
        "link": "https://www.coursera.org/learn/climate-change",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Clima", "Carbono", "Sustentabilidade"],
        "descricao": "Mudanças climáticas e pegada de carbono.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    # SAÚDE DIGITAL (continuação)
    {
        "id": "health_informatics_1738855351",
        "titulo": "Health Informatics",
        "instituicao": "Johns Hopkins University (Coursera)",
        "link": "https://www.coursera.org/specializations/healthcare-informatics",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Informática em Saúde", "Health Tech", "Tecnologia"],
        "descricao": "Informática aplicada à saúde.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "telemedicina_fundamentos_1738855352",
        "titulo": "Telemedicina e Telessaúde",
        "instituicao": "Fiocruz",
        "link": "https://portal.fiocruz.br/cursos-abertos",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Telemedicina", "Telessaúde", "Saúde Digital"],
        "descrição": "Fundamentos de telemedicina e telessaúde.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "iot_wearables_1738855353",
        "titulo": "IoT and Wearable Technologies",
        "instituicao": "MIT (edX)",
        "link": "https://www.edx.org/course/internet-of-things-iot",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["IoT", "Wearables", "Tecnologia"],
        "descricao": "Internet das Coisas e tecnologias vestíveis.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1530319067432-f2a729c03db5?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    # EXTRAS - HARD SKILLS DIVERSAS
    {
        "id": "autocad_2d_1738855354",
        "titulo": "AutoCAD 2D - Fundamentos",
        "instituicao": "Fundação Bradesco - Escola Virtual",
        "link": "https://www.ev.org.br/cursos/autocad",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["AutoCAD", "CAD", "Engenharia"],
        "descricao": "Desenho técnico 2D com AutoCAD.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "solidworks_cad_1738855355",
        "titulo": "SolidWorks: CAD 3D",
        "instituicao": "Dassault Systèmes",
        "link": "https://www.solidworks.com/sw/education/certification-programs-cad-students.htm",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["SolidWorks", "3D", "CAD"],
        "descricao": "Modelagem 3D com SolidWorks.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "arduino_iot_1738855356",
        "titulo": "Arduino e IoT para Iniciantes",
        "instituicao": "Arduino",
        "link": "https://www.arduino.cc/education/",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Arduino", "IoT", "Eletrônica"],
        "descricao": "Programação de Arduino e projetos IoT.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "raspberry_pi_1738855357",
        "titulo": "Raspberry Pi Fundamentals",
        "instituicao": "Raspberry Pi Foundation",
        "link": "https://www.raspberrypi.org/teach/",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Raspberry Pi", "Linux", "Programação"],
        "descricao": "Programação e projetos com Raspberry Pi.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1591799265444-d66432b91588?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "ethical_ai_1738855358",
        "titulo": "AI Ethics and Responsible AI",
        "instituicao": "MIT (edX)",
        "link": "https://www.edx.org/course/ethics-of-ai",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["IA Ética", "Ethics", "IA"],
        "descricao": "Ética e uso responsável de inteligência artificial.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "quantum_computing_1738855359",
        "titulo": "Introduction to Quantum Computing",
        "instituicao": "IBM Quantum",
        "link": "https://quantum-computing.ibm.com/learn",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Quantum", "Computação Quântica", "IBM"],
        "descricao": "Fundamentos de computação quântica da IBM.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "nlp_processing_1738855360",
        "titulo": "Natural Language Processing",
        "instituicao": "Stanford University (Coursera)",
        "link": "https://www.coursera.org/specializations/natural-language-processing",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["NLP", "IA", "Linguagem"],
        "descricao": "Processamento de linguagem natural com IA.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "computer_vision_1738855361",
        "titulo": "Computer Vision Fundamentals",
        "instituicao": "IBM (Coursera)",
        "link": "https://www.coursera.org/learn/introduction-computer-vision-watson-opencv",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Computer Vision", "IA", "Visão"],
        "descricao": "Fundamentos de visão computacional e reconhecimento de imagens.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "game_development_unity_1738855362",
        "titulo": "Game Development with Unity",
        "instituicao": "Unity Learn",
        "link": "https://learn.unity.com/",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Unity", "Games", "Desenvolvimento"],
        "descricao": "Desenvolvimento de jogos com Unity.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "unreal_engine_1738855363",
        "titulo": "Unreal Engine for Beginners",
        "instituicao": "Epic Games",
        "link": "https://www.unrealengine.com/en-US/learn",
        "link_afiliado": None,
        "categoria": "Hard Skill",
        "tags": ["Unreal", "Games", "3D"],
        "descricao": "Desenvolvimento com Unreal Engine 5.",
        "certificado_gratuito": True,
        "imagem": "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    # SOFT SKILLS ADICIONAIS
    {
        "id": "negotiation_skills_1738855364",
        "titulo": "Negotiation and Conflict Resolution",
        "instituicao": "University of Michigan (Coursera)",
        "link": "https://www coursera.org/learn/negotiation-skills",
        "link_afiliado": None,
        "categoria": "Soft Skill",
        "tags": ["Negociação", "Conflitos", "Soft Skill"],
        "descricao": "Habilidades de negociação e resolução de conflitos.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "critical_thinking_1738855365",
        "titulo": "Critical Thinking and Problem Solving",
        "instituicao": "LinkedIn Learning",
        "link": "https://www.linkedin.com/learning/critical-thinking-for-better-judgment",
        "link_afiliado": None,
        "categoria": "Soft Skill",
        "tags": ["Pensamento Crítico", "Solução de Problemas", "Raciocínio"],
        "descricao": "Desenvolvimento de pensamento crítico e resolução de problemas.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "creativity_innovation_1738855366",
        "titulo": "Creativity and Innovation",
        "instituicao": "Stanford University (Coursera)",
        "link": "https://www.coursera.org/learn/creativity-innovation",
        "link_afiliado": None,
        "categoria": "Soft Skill",
        "tags": ["Criatividade", "Inovação", "Design Thinking"],
        "descricao": "Desenvolva criatividade e pensamento inovador.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "remote_work_1738855367",
        "titulo": "Remote Work and Digital Collaboration",
        "instituicao": "LinkedIn Learning",
        "link": "https://www.linkedin.com/learning/remote-work-foundations",
        "link_afiliado": None,
        "categoria": "Soft Skill",
        "tags": ["Trabalho Remoto", "Colaboração", "Produtividade"],
        "descricao": "Trabalho remoto eficiente e colaboração digital.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "networking_professional_1738855368",
        "titulo": "Professional Networking",
        "instituicao": "Dale Carnegie",
        "link": "https://www.dalecarnegie.com/en/courses/professional-networking",
        "link_afiliado": None,
        "categoria": "Soft Skill",
        "tags": ["Networking", "Relacionamentos", "Carreira"],
        "descricao": "Construa uma rede profissional sólida.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    },
    {
        "id": "personal_branding_1738855369",
        "titulo": "Personal Branding",
        "instituicao": "LinkedIn Learning",
        "link": "https://www.linkedin.com/learning/building-your-personal-brand",
        "link_afiliado": None,
        "categoria": "Soft Skill",
        "tags": ["Marca Pessoal", "LinkedIn", "Carreira"],
        "descricao": "Construa sua marca pessoal e destaque-se no mercado.",
        "certificado_gratuito": False,
        "imagem": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop",
        "adicionado_em": "2026-02-06T15:25:00Z"
    }
]

# Adicionar novos cursos
database['cursos'].extend(novos_cursos)
database['total_cursos'] = len(database['cursos'])
database['ultima_atualizacao'] = "2026-02-06T15:30:00Z"

# Salvar
with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(database, f, ensure_ascii=False, indent=4)

print("[OK] Novos cursos adicionados!")
print(f"[OK] Total final: {database['total_cursos']} cursos")
print(f"   - Hard Skills: {sum(1 for c in database['cursos'] if c['categoria'] == 'Hard Skill')}")
print(f"   - Soft Skills: {sum(1 for c in database['cursos'] if c['categoria'] == 'Soft Skill')}")
