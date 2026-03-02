#!/usr/bin/env python3
"""
Validador de schema e qualidade dos dados de cursos
"""

import json
import sys
from pathlib import Path
from typing import List, Dict
from urllib.parse import urlparse

from pydantic import ValidationError, HttpUrl
from coletor import CursoDatabase, Curso


def validar_url(url: str) -> bool:
    """Valida se a URL é bem formada"""
    try:
        result = urlparse(url)
        return all([result.scheme, result.netloc])
    except:
        return False


def verificar_duplicatas(cursos: List[Curso]) -> List[str]:
    """Verifica duplicatas por link"""
    links = {}
    duplicatas = []
    
    for curso in cursos:
        link = str(curso.link)
        if link in links:
            duplicatas.append(f"Duplicata encontrada: {curso.titulo} (já existe: {links[link]})")
        else:
            links[link] = curso.titulo
    
    return duplicatas


def validar_database(caminho: Path) -> tuple[bool, List[str]]:
    """
    Valida o arquivo de database completo
    
    Returns:
        (sucesso, lista_de_erros)
    """
    erros = []
    
    # 1. Verificar se arquivo existe
    if not caminho.exists():
        return False, [f"Arquivo não encontrado: {caminho}"]
    
    # 2. Tentar carregar JSON
    try:
        with open(caminho, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except json.JSONDecodeError as e:
        return False, [f"JSON inválido: {e}"]
    except Exception as e:
        return False, [f"Erro ao ler arquivo: {e}"]
    
    # 3. Validar schema com Pydantic
    try:
        database = CursoDatabase(**data)
    except ValidationError as e:
        erros.append(f"Erro de validação de schema:")
        for error in e.errors():
            erros.append(f"  - {error['loc']}: {error['msg']}")
        return False, erros
    
    # 4. Verificar duplicatas
    duplicatas = verificar_duplicatas(database.cursos)
    if duplicatas:
        erros.extend(duplicatas)
    
    # 5. Verificar consistência de total_cursos
    if database.total_cursos != len(database.cursos):
        erros.append(
            f"Inconsistência: total_cursos={database.total_cursos}, "
            f"mas existem {len(database.cursos)} cursos"
        )
    
    # 6. Validar categorias
    categorias_validas = {'Hard Skill', 'Soft Skill'}
    for curso in database.cursos:
        if curso.categoria not in categorias_validas:
            erros.append(
                f"Categoria inválida em '{curso.titulo}': "
                f"'{curso.categoria}' (deve ser Hard Skill ou Soft Skill)"
            )
    
    # Se há erros, retornar falha
    if erros:
        return False, erros
    
    # Sucesso!
    return True, [
        f"✓ Database válida!",
        f"✓ Total de cursos: {database.total_cursos}",
        f"✓ Última atualização: {database.ultima_atualizacao}",
        f"✓ Hard Skills: {sum(1 for c in database.cursos if c.categoria == 'Hard Skill')}",
        f"✓ Soft Skills: {sum(1 for c in database.cursos if c.categoria == 'Soft Skill')}",
    ]


def main():
    """Função principal"""
    repo_root = Path(__file__).parent.parent
    database_path = repo_root / 'src' / 'data' / 'cursos.json'
    
    print("=" * 60)
    print("EduBot Pro - Validador de Database")
    print("=" * 60)
    print(f"Validando: {database_path}")
    print()
    
    sucesso, mensagens = validar_database(database_path)
    
    for msg in mensagens:
        print(msg)
    
    print("=" * 60)
    
    if sucesso:
        print("✓ VALIDAÇÃO BEM-SUCEDIDA")
        return 0
    else:
        print("✗ VALIDAÇÃO FALHOU")
        return 1


if __name__ == '__main__':
    sys.exit(main())
