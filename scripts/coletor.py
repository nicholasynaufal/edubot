#!/usr/bin/env python3
"""
EduBot Pro - Coletor Inteligente Multi-Categoria
Busca cursos em DIVERSAS áreas de mercado usando Gemini API.
Foco: QUALIDADE sobre quantidade. Sem limites arbitrários.
"""

import os
import json
import time
import logging
from datetime import datetime
from typing import List, Dict, Optional
from pathlib import Path

import google.generativeai as genai
from dotenv import load_dotenv
from pydantic import BaseModel, HttpUrl, Field, validator

# Configuração de logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Carregar variáveis de ambiente
load_dotenv()

# Configuração da Gemini API
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')
if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY não configurada! Configure no GitHub Secrets.")

genai.configure(api_key=GEMINI_API_KEY)


# ============================================================================
# TÓPICOS DE BUSCA - Áreas de Alta Demanda no Mercado
# ============================================================================

TOPICS_CATEGORIAS = [
    # TECNOLOGIA & DADOS
    {
        "nome": "Inteligência Artificial e Machine Learning",
        "keywords": ["IA", "ML", "Deep Learning", "Redes Neurais"],
        "categoria": "Hard Skill"
    },
    {
        "nome": "Ciência de Dados e Analytics",
        "keywords": ["Data Science", "Analytics", "Big Data", "Visualização"],
        "categoria": "Hard Skill"
    },
    {
        "nome": "Programação e Desenvolvimento",
        "keywords": ["Python", "JavaScript", "Java", "React", "Node.js"],
        "categoria": "Hard Skill"
    },
    {
        "nome": "Cloud Computing e DevOps",
        "keywords": ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
        "categoria": "Hard Skill"
    },
    {
        "nome": "Cybersecurity e Segurança da Informação",
        "keywords": ["Segurança", "Ethical Hacking", "Pentest", "LGPD"],
        "categoria": "Hard Skill"
    },
    
    # NEGÓCIOS & GESTÃO
    {
        "nome": "Gestão Ágil e Scrum",
        "keywords": ["Agile", "Scrum", "Kanban", "Product Owner"],
        "categoria": "Hard Skill"
    },
    {
        "nome": "Marketing Digital e Growth",
        "keywords": ["SEO", "SEM", "Google Ads", "Facebook Ads", "Analytics"],
        "categoria": "Hard Skill"
    },
    {
        "nome": "Gestão de Projetos",
        "keywords": ["PMI", "PMP", "Prince2", "Gestão de Projetos"],
        "categoria": "Hard Skill"
    },
    {
        "nome": "Empreendedorismo e Inovação",
        "keywords": ["Startups", "Lean Startup", "Business Model Canvas"],
        "categoria": "Soft Skill"
    },
    {
        "nome": "Finanças e Investimentos",
        "keywords": ["Finanças Pessoais", "Mercado Financeiro", "Investimentos"],
        "categoria": "Hard Skill"
    },
    
    # DESIGN & CRIAÇÃO
    {
        "nome": "UX/UI Design",
        "keywords": ["User Experience", "Interface", "Figma", "Prototipagem"],
        "categoria": "Hard Skill"
    },
    {
        "nome": "Design Gráfico e Motion",
        "keywords": ["Adobe", "Illustrator", "Photoshop", "After Effects"],
        "categoria": "Hard Skill"
    },
    
    # IDIOMAS & COMUNICAÇÃO
    {
        "nome": "Inglês para Negócios",
        "keywords": ["Business English", "Inglês Técnico", "TOEFL"],
        "categoria": "Hard Skill"
    },
    {
        "nome": "Comunicação e Oratória",
        "keywords": ["Apresentações", "Public Speaking", "Storytelling"],
        "categoria": "Soft Skill"
    },
    
    # SOFT SKILLS ESSENCIAIS
    {
        "nome": "Liderança e Gestão de Pessoas",
        "keywords": ["Liderança", "Coaching", "Feedback", "Gestão de Equipes"],
        "categoria": "Soft Skill"
    },
    {
        "nome": "Produtividade e Gestão do Tempo",
        "keywords": ["Produtividade", "GTD", "Pomodoro", "Time Management"],
        "categoria": "Soft Skill"
    },
    {
        "nome": "Inteligência Emocional",
        "keywords": ["IE", "Autoconhecimento", "Empatia", "Resiliência"],
        "categoria": "Soft Skill"
    },
    
    # ÁREAS EMERGENTES
    {
        "nome": "ESG e Sustentabilidade",
        "keywords": ["ESG", "Sustentabilidade", "Governança", "Compliance"],
        "categoria": "Hard Skill"
    },
    {
        "nome": "Biotecnologia e Saúde Digital",
        "keywords": ["Biotech", "Telemedicina", "Health Tech", "Bioinformática"],
        "categoria": "Hard Skill"
    },
]


class Curso(BaseModel):
    """Schema de validação para um curso"""
    id: str
    titulo: str = Field(min_length=5, max_length=200)
    instituicao: str = Field(min_length=3, max_length=150)
    link: HttpUrl
    link_afiliado: Optional[HttpUrl] = None
    categoria: str = Field(pattern=r'^(Hard Skill|Soft Skill)$')
    tags: List[str] = Field(min_items=1, max_items=5)
    descricao: str = Field(min_length=20, max_length=300)
    certificado_gratuito: bool
    imagem: Optional[str] = ""
    adicionado_em: str

    @validator('tags')
    def validate_tags(cls, v):
        """Garante que tags não sejam vazias"""
        return [tag.strip() for tag in v if tag.strip()]


class CursoDatabase(BaseModel):
    """Schema do banco de dados completo"""
    ultima_atualizacao: str
    total_cursos: int
    cursos: List[Curso]


def criar_prompt_curacao_inteligente(topico: Dict[str, any]) -> str:
    """
    Cria prompt RIGOROSO focado em QUALIDADE sobre quantidade
    
    Args:
        topico: Dicionário com nome, keywords e categoria do tópico
    
    Returns:
        Prompt otimizado para curadoria de excelência
    """
    keywords_str = ", ".join(topico['keywords'])
    
    return f"""Você é um especialista em curadoria de cursos profissionais de EXCELÊNCIA para o mercado de trabalho 2026.

🎯 TÓPICO ATUAL: {topico['nome']}
📌 KEYWORDS: {keywords_str}
📂 CATEGORIA: {topico['categoria']}

CRITÉRIOS DE APROVAÇÃO (HARD RULES - REJEITADOS SE NÃO ATENDER):

1. ✅ GRATUITO 100%: Acesso ao conteúdo completamente grátis
2. ✅ CERTIFICAÇÃO COMPROVADA: Menção explícita de certificado (pode ser pago separadamente)
3. ✅ RELEVÂNCIA MERCADO 2026: Habilidade ativamente EXIGIDA em vagas de emprego
4. ✅ QUALIDADE PREMIUM: Conteúdo atualizado, bem estruturado, de fonte confiável
5. ✅ NÃO-BÁSICO: Rejeite cursos introdutórios superficiais ou desatualizados

FONTES CONFIÁVEIS PRIORITÁRIAS:
- FGV, Fundação Bradesco, SENAI, SEBRAE (Brasil)
- Google, Microsoft, IBM, Meta, AWS (Tech)
- Coursera, edX, Udemy (cursos free de universidades top)
- LinkedIn Learning, HubSpot (certificações business)

INSTRUÇÕES CRÍTICAS:
- Busque cursos sobre "{topico['nome']}" e áreas relacionadas: {keywords_str}
- REJEITE cursos obsoletos (ex: Flash, Angular.js v1)
- REJEITE cursos básicos demais (ex: "O que é Internet")
- PRIORIZE certificações reconhecidas pelo mercado
- QUALIDADE >>> Quantidade

FORMATO DE RESPOSTA (JSON PURO, SEM MARKDOWN):

[
  {{
    "titulo": "Nome completo do curso",
    "instituicao": "Nome oficial da plataforma/universidade",
    "link": "URL completa e direta",
    "categoria": "{topico['categoria']}",
    "tags": ["tag1", "tag2", "tag3"],
    "descricao": "Por que este curso é VALIOSO para a carreira (foco em resultado profissional)",
    "certificado_gratuito": true ou false,
    "imagem": ""
  }}
]

IMPORTANTE:
- Retorne APENAS cursos que você tem CERTEZA que atendem TODOS os critérios
- Retorne de 3 a 8 cursos de ALTA QUALIDADE (se não achar, retorne menos)
- QUALIDADE é mais importante que quantidade
- Retorne APENAS o array JSON, nada mais"""


def consultar_gemini_por_topico(topico: Dict[str, any], retry_count: int = 3) -> Optional[List[Dict]]:
    """
    Consulta Gemini para um tópico específico com retry logic
    
    Args:
        topico: Dicionário do tópico a buscar
        retry_count: Número de tentativas
        
    Returns:
        Lista de cursos ou None
    """
    model = genai.GenerativeModel('gemini-1.5-flash')
    prompt = criar_prompt_curacao_inteligente(topico)
    
    logger.info(f"🔍 Buscando cursos de: {topico['nome']}")
    
    for attempt in range(retry_count):
        try:
            response = model.generate_content(
                prompt,
                generation_config=genai.types.GenerationConfig(
                    temperature=0.4,  # Balanceado para diversidade com consistência
                    max_output_tokens=3000,  # Mais tokens para múltiplos cursos
                )
            )
            
            # Extrair e limpar resposta
            texto_resposta = response.text.strip()
            
            # Remover markdown se presente
            if texto_resposta.startswith('```'):
                texto_resposta = texto_resposta.split('```')[1]
                if texto_resposta.startswith('json'):
                    texto_resposta = texto_resposta[4:]
                texto_resposta = texto_resposta.strip()
            
            # Parse JSON
            cursos = json.loads(texto_resposta)
            
            if not isinstance(cursos, list):
                raise ValueError("Resposta não é uma lista")
            
            logger.info(f"✓ {len(cursos)} cursos encontrados para '{topico['nome']}'")
            return cursos
            
        except json.JSONDecodeError as e:
            logger.error(f"✗ Erro JSON no tópico '{topico['nome']}': {e}")
            
        except Exception as e:
            logger.error(f"✗ Erro em '{topico['nome']}': {e}")
        
        # Aguardar antes de retry
        if attempt < retry_count - 1:
            wait_time = 2 ** attempt
            logger.info(f"Aguardando {wait_time}s antes de retry...")
            time.sleep(wait_time)
    
    logger.warning(f"✗ Falha total no tópico '{topico['nome']}'")
    return None


def processar_todos_topicos(topics: List[Dict[str, any]], delay_between: int = 2) -> List[Dict]:
    """
    Itera sobre TODOS os tópicos, processando cada um
    
    Args:
        topics: Lista de tópicos a processar
        delay_between: Delay entre requests (rate limiting)
        
    Returns:
        Lista combinada de todos os cursos encontrados
    """
    todos_cursos = []
    
    logger.info("=" * 70)
    logger.info(f"🚀 Iniciando busca em {len(topics)} categorias de mercado")
    logger.info("=" * 70)
    
    for idx, topico in enumerate(topics, 1):
        logger.info(f"\n[{idx}/{len(topics)}] Processando: {topico['nome']}")
        
        cursos = consultar_gemini_por_topico(topico)
        
        if cursos:
            todos_cursos.extend(cursos)
            logger.info(f"✓ Total acumulado: {len(todos_cursos)} cursos")
        
        # Rate limiting entre requests
        if idx < len(topics):
            logger.debug(f"Aguardando {delay_between}s (rate limiting)...")
            time.sleep(delay_between)
    
    logger.info("=" * 70)
    logger.info(f"✓ Busca concluída: {len(todos_cursos)} cursos no total")
    logger.info("=" * 70)
    
    return todos_cursos


def validar_e_processar_cursos(cursos_brutos: List[Dict]) -> List[Curso]:
    """Valida cursos com Pydantic"""
    cursos_validos = []
    
    for idx, curso_dict in enumerate(cursos_brutos, 1):
        try:
            # Gerar ID único
            titulo_slug = curso_dict['titulo'].lower()
            titulo_slug = ''.join(c if c.isalnum() else '_' for c in titulo_slug)
            curso_dict['id'] = f"{titulo_slug[:50]}_{int(time.time())}_{idx}"
            
            # Timestamp
            curso_dict['adicionado_em'] = datetime.utcnow().isoformat() + 'Z'
            
            # Validar
            curso = Curso(**curso_dict)
            cursos_validos.append(curso)
            
            logger.debug(f"✓ Curso {idx} validado: {curso.titulo}")
            
        except Exception as e:
            logger.warning(f"✗ Curso {idx} rejeitado: {e}")
            continue
    
    logger.info(f"✓ {len(cursos_validos)} de {len(cursos_brutos)} cursos passaram na validação")
    return cursos_validos


def carregar_database_existente(caminho: Path) -> CursoDatabase:
    """Carrega database ou cria novo"""
    if caminho.exists():
        try:
            with open(caminho, 'r', encoding='utf-8') as f:
                data = json.load(f)
                logger.info(f"✓ Database existente: {data['total_cursos']} cursos")
                return CursoDatabase(**data)
        except Exception as e:
            logger.warning(f"✗ Erro ao carregar: {e}. Criando novo...")
    
    return CursoDatabase(
        ultima_atualizacao=datetime.utcnow().isoformat() + 'Z',
        total_cursos=0,
        cursos=[]
    )


def mesclar_cursos_sem_duplicatas(database: CursoDatabase, novos_cursos: List[Curso]) -> CursoDatabase:
    """
    Merge inteligente: adiciona apenas cursos NOVOS
    
    Critério de duplicata: mesmo link OU título muito similar
    """
    # Set de links existentes
    links_existentes = {str(curso.link).lower() for curso in database.cursos}
    
    # Set de títulos existentes (lowercase para comparação)
    titulos_existentes = {curso.titulo.lower() for curso in database.cursos}
    
    cursos_adicionados = 0
    cursos_duplicados = 0
    
    for novo_curso in novos_cursos:
        link_novo = str(novo_curso.link).lower()
        titulo_novo = novo_curso.titulo.lower()
        
        # Verificar duplicata por link
        if link_novo in links_existentes:
            logger.debug(f"○ Duplicata (link): {novo_curso.titulo}")
            cursos_duplicados += 1
            continue
        
        # Verificar duplicata por título similar
        if titulo_novo in titulos_existentes:
            logger.debug(f"○ Duplicata (título): {novo_curso.titulo}")
            cursos_duplicados += 1
            continue
        
        # Adicionar curso novo
        database.cursos.append(novo_curso)
        links_existentes.add(link_novo)
        titulos_existentes.add(titulo_novo)
        cursos_adicionados += 1
        logger.info(f"+ NOVO: {novo_curso.titulo} ({novo_curso.instituicao})")
    
    # Atualizar metadados
    database.ultima_atualizacao = datetime.utcnow().isoformat() + 'Z'
    database.total_cursos = len(database.cursos)
    
    logger.info(f"✓ Merge completo: +{cursos_adicionados} novos | ○{cursos_duplicados} duplicatas ignoradas")
    return database


def salvar_database(database: CursoDatabase, caminho: Path):
    """Salva database JSON"""
    try:
        caminho.parent.mkdir(parents=True, exist_ok=True)
        
        with open(caminho, 'w', encoding='utf-8') as f:
            json.dump(
                database.dict(),
                f,
                ensure_ascii=False,
                indent=2
            )
        
        logger.info(f"✓ Database salva: {caminho}")
        logger.info(f"✓ Total final: {database.total_cursos} cursos")
        
        # Estatísticas por categoria
        hard_skills = sum(1 for c in database.cursos if c.categoria == 'Hard Skill')
        soft_skills = sum(1 for c in database.cursos if c.categoria == 'Soft Skill')
        logger.info(f"  - Hard Skills: {hard_skills} ({hard_skills/database.total_cursos*100:.1f}%)")
        logger.info(f"  - Soft Skills: {soft_skills} ({soft_skills/database.total_cursos*100:.1f}%)")
        
    except Exception as e:
        logger.error(f"✗ Erro ao salvar: {e}")
        raise


def main():
    """Função principal: Curadoria Inteligente Multi-Categoria"""
    logger.info("=" * 70)
    logger.info("🤖 EduBot Pro - Coletor Inteligente Multi-Categoria")
    logger.info("   Foco: QUALIDADE sobre Quantidade | Sem Limites Arbitrários")
    logger.info("=" * 70)
    
    repo_root = Path(__file__).parent.parent
    database_path = repo_root / 'src' / 'data' / 'cursos.json'
    
    try:
        # 1. Carregar database existente
        database = carregar_database_existente(database_path)
        logger.info(f"Base existente: {database.total_cursos} cursos")
        
        # 2. Processar TODOS os tópicos (qualidade > quantidade)
        cursos_brutos = processar_todos_topicos(TOPICS_CATEGORIAS, delay_between=2)
        
        if not cursos_brutos:
            logger.error("Nenhum curso encontrado em NENHUMA categoria. Abortando...")
            return 1
        
        # 3. Validar cursos
        cursos_validos = validar_e_processar_cursos(cursos_brutos)
        
        if not cursos_validos:
            logger.error("Nenhum curso passou na validação. Abortando...")
            return 1
        
        # 4. Merge sem duplicatas
        database = mesclar_cursos_sem_duplicatas(database, cursos_validos)
        
        # 5. Salvar database
        salvar_database(database, database_path)
        
        logger.info("=" * 70)
        logger.info("✓ CURADORIA INTELIGENTE CONCLUÍDA COM SUCESSO!")
        logger.info("=" * 70)
        return 0
        
    except Exception as e:
        logger.error(f"✗ Erro crítico: {e}", exc_info=True)
        return 1


if __name__ == '__main__':
    exit(main())

import os
import json
import time
import logging
from datetime import datetime
from typing import List, Dict, Optional
from pathlib import Path

import google.generativeai as genai
from dotenv import load_dotenv
from pydantic import BaseModel, HttpUrl, Field, validator

# Configuração de logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Carregar variáveis de ambiente
load_dotenv()

# Configuração da Gemini API
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')
if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY não configurada! Configure no GitHub Secrets.")

genai.configure(api_key=GEMINI_API_KEY)


class Curso(BaseModel):
    """Schema de validação para um curso"""
    id: str
    titulo: str = Field(min_length=5, max_length=200)
    instituicao: str = Field(min_length=3, max_length=150)
    link: HttpUrl
    link_afiliado: Optional[HttpUrl] = None
    categoria: str = Field(pattern=r'^(Hard Skill|Soft Skill)$')
    tags: List[str] = Field(min_items=1, max_items=5)
    descricao: str = Field(min_length=20, max_length=300)
    certificado_gratuito: bool
    imagem: Optional[str] = ""
    adicionado_em: str

    @validator('tags')
    def validate_tags(cls, v):
        """Garante que tags não sejam vazias"""
        return [tag.strip() for tag in v if tag.strip()]


class CursoDatabase(BaseModel):
    """Schema do banco de dados completo"""
    ultima_atualizacao: str
    total_cursos: int
    cursos: List[Curso]


def criar_prompt_curacao() -> str:
    """Cria o prompt otimizado para o Gemini"""
    return """Você é um especialista em curadoria de cursos profissionais online.

Sua missão é encontrar CURSOS EXCEPCIONAIS que atendam RIGOROSAMENTE estes critérios:

CRITÉRIOS OBRIGATÓRIOS (HARD RULES):
1. ✅ CUSTO ZERO: O curso deve ser 100% gratuito para assistir
2. ✅ CERTIFICAÇÃO: Deve haver menção explícita de certificado (pode ser pago separadamente)
3. ✅ RELEVÂNCIA: Conteúdo atual e útil para o mercado de trabalho 2026
4. ✅ FONTES CONFIÁVEIS: FGV, Fundação Bradesco, SENAI, SEBRAE, Google, Microsoft, Coursera, edX

Busque cursos nas seguintes áreas:
- HARD SKILLS: Python, JavaScript, Excel, SQL, Design, Marketing Digital, Gestão de Projetos
- SOFT SKILLS: Liderança, Comunicação, Inteligência Emocional, Produtividade

FORMATO DE RESPOSTA (JSON):
Retorne EXATAMENTE 5 cursos no formato JSON puro (sem markdown, sem ```json):

[
  {
    "titulo": "Nome exato do curso",
    "instituicao": "Nome da plataforma/universidade",
    "link": "URL direta e completa",
    "categoria": "Hard Skill" ou "Soft Skill",
    "tags": ["tag1", "tag2", "tag3"],
    "descricao": "Descrição objetiva focada no benefício profissional (1 frase)",
    "certificado_gratuito": true ou false,
    "imagem": ""
  }
]

IMPORTANTE: Retorne APENAS o JSON array, nada mais."""


def consultar_gemini(prompt: str, retry_count: int = 3) -> Optional[List[Dict]]:
    """
    Consulta a Gemini API com retry logic robusto
    
    Args:
        prompt: O prompt de curadoria
        retry_count: Número de tentativas em caso de falha
        
    Returns:
        Lista de cursos ou None em caso de erro
    """
    model = genai.GenerativeModel('gemini-pro')
    
    for attempt in range(retry_count):
        try:
            logger.info(f"Tentativa {attempt + 1}/{retry_count} de consulta à Gemini API...")
            
            response = model.generate_content(
                prompt,
                generation_config=genai.types.GenerationConfig(
                    temperature=0.3,  # Respostas mais determinísticas
                    max_output_tokens=2048,
                )
            )
            
            # Extrair texto da resposta
            texto_resposta = response.text.strip()
            
            # Remover markdown se presente
            if texto_resposta.startswith('```'):
                texto_resposta = texto_resposta.split('```')[1]
                if texto_resposta.startswith('json'):
                    texto_resposta = texto_resposta[4:]
                texto_resposta = texto_resposta.strip()
            
            # Parse JSON
            cursos = json.loads(texto_resposta)
            
            if not isinstance(cursos, list):
                raise ValueError("Resposta não é uma lista")
            
            logger.info(f"✓ Recebidos {len(cursos)} cursos da Gemini API")
            return cursos
            
        except json.JSONDecodeError as e:
            logger.error(f"✗ Erro ao parsear JSON: {e}")
            logger.debug(f"Resposta recebida: {response.text[:200]}...")
            
        except Exception as e:
            logger.error(f"✗ Erro na consulta Gemini: {e}")
        
        # Aguardar antes de retry (exponential backoff)
        if attempt < retry_count - 1:
            wait_time = 2 ** attempt
            logger.info(f"Aguardando {wait_time}s antes de retry...")
            time.sleep(wait_time)
    
    logger.error("✗ Falha após todas as tentativas")
    return None


def validar_e_processar_cursos(cursos_brutos: List[Dict]) -> List[Curso]:
    """
    Valida e processa cursos recebidos da API
    
    Args:
        cursos_brutos: Lista de dicionários de cursos
        
    Returns:
        Lista de cursos validados (Pydantic models)
    """
    cursos_validos = []
    
    for idx, curso_dict in enumerate(cursos_brutos, 1):
        try:
            # Gerar ID único
            titulo_slug = curso_dict['titulo'].lower()
            titulo_slug = ''.join(c if c.isalnum() else '_' for c in titulo_slug)
            curso_dict['id'] = f"{titulo_slug[:50]}_{int(time.time())}"
            
            # Adicionar timestamp
            curso_dict['adicionado_em'] = datetime.utcnow().isoformat() + 'Z'
            
            # Validar com Pydantic
            curso = Curso(**curso_dict)
            cursos_validos.append(curso)
            
            logger.info(f"✓ Curso {idx} validado: {curso.titulo}")
            
        except Exception as e:
            logger.warning(f"✗ Curso {idx} inválido: {e}")
            continue
    
    return cursos_validos


def carregar_database_existente(caminho: Path) -> CursoDatabase:
    """Carrega database existente ou cria novo"""
    if caminho.exists():
        try:
            with open(caminho, 'r', encoding='utf-8') as f:
                data = json.load(f)
                logger.info(f"✓ Database existente carregada: {data['total_cursos']} cursos")
                return CursoDatabase(**data)
        except Exception as e:
            logger.warning(f"✗ Erro ao carregar database: {e}. Criando novo...")
    
    return CursoDatabase(
        ultima_atualizacao=datetime.utcnow().isoformat() + 'Z',
        total_cursos=0,
        cursos=[]
    )


def mesclar_cursos(database: CursoDatabase, novos_cursos: List[Curso]) -> CursoDatabase:
    """
    Mescla novos cursos evitando duplicatas
    
    Args:
        database: Database existente
        novos_cursos: Novos cursos a adicionar
        
    Returns:
        Database atualizada
    """
    # Set de links existentes para verificação rápida
    links_existentes = {str(curso.link) for curso in database.cursos}
    
    cursos_adicionados = 0
    for novo_curso in novos_cursos:
        if str(novo_curso.link) not in links_existentes:
            database.cursos.append(novo_curso)
            links_existentes.add(str(novo_curso.link))
            cursos_adicionados += 1
            logger.info(f"+ Adicionado: {novo_curso.titulo}")
        else:
            logger.debug(f"○ Duplicata ignorada: {novo_curso.titulo}")
    
    # Atualizar metadados
    database.ultima_atualizacao = datetime.utcnow().isoformat() + 'Z'
    database.total_cursos = len(database.cursos)
    
    logger.info(f"✓ {cursos_adicionados} novos cursos adicionados")
    return database


def salvar_database(database: CursoDatabase, caminho: Path):
    """Salva database no formato JSON"""
    try:
        caminho.parent.mkdir(parents=True, exist_ok=True)
        
        with open(caminho, 'w', encoding='utf-8') as f:
            json.dump(
                database.dict(),
                f,
                ensure_ascii=False,
                indent=2
            )
        
        logger.info(f"✓ Database salva: {caminho}")
        logger.info(f"✓ Total de cursos: {database.total_cursos}")
        
    except Exception as e:
        logger.error(f"✗ Erro ao salvar database: {e}")
        raise


def main():
    """Função principal do coletor"""
    logger.info("=" * 60)
    logger.info("EduBot Pro - Coletor Automático Iniciado")
    logger.info("=" * 60)
    
    # Caminhos
    repo_root = Path(__file__).parent.parent
    database_path = repo_root / 'src' / 'data' / 'cursos.json'
    
    try:
        # 1. Carregar database existente
        database = carregar_database_existente(database_path)
        
        # 2. Criar prompt de curadoria
        prompt = criar_prompt_curacao()
        
        # 3. Consultar Gemini API
        cursos_brutos = consultar_gemini(prompt)
        
        if not cursos_brutos:
            logger.error("Nenhum curso retornado pela API. Abortando...")
            return 1
        
        # 4. Validar cursos
        cursos_validos = validar_e_processar_cursos(cursos_brutos)
        
        if not cursos_validos:
            logger.error("Nenhum curso válido após processamento. Abortando...")
            return 1
        
        # 5. Mesclar com database existente
        database = mesclar_cursos(database, cursos_validos)
        
        # 6. Salvar database atualizada
        salvar_database(database, database_path)
        
        logger.info("=" * 60)
        logger.info("✓ Curadoria concluída com sucesso!")
        logger.info("=" * 60)
        return 0
        
    except Exception as e:
        logger.error(f"✗ Erro crítico: {e}", exc_info=True)
        return 1


if __name__ == '__main__':
    exit(main())
