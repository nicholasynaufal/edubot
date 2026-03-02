#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Gera index.html estático com dados do cursos.json"""
import json
import os

# Carregar cursos
with open('src/data/cursos.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

cursos = data['cursos']
print(f"Carregados {len(cursos)} cursos do JSON")

# Gerar cards HTML
cards_html = ""
for curso in cursos:
    # Imagem ou placeholder
    if curso.get('imagem'):
        img_html = f'''<img src="{curso['imagem']}" alt="{curso['titulo']}" class="w-full h-full object-cover" loading="lazy">'''
    else:
        img_html = '''<svg class="w-16 h-16 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>'''
    
    # Badge de categoria
    if curso['categoria'] == 'Hard Skill':
        badge_class = 'bg-blue-600'
        badge_icon = '💻'
    else:
        badge_class = 'bg-green-600'
        badge_icon = '🧠'
    
    # Certificado
    if curso['certificado_gratuito']:
        cert_html = '<span class="text-xs font-medium text-green-600">✓ Certificado Grátis</span>'
    else:
        cert_html = '<span class="text-xs font-medium text-amber-600">⚠ Certificado Pago</span>'
    
    # Tags (primeiras 3)
    tags_html = ''. join([f'<span class="px-2.5 py-1 text-xs bg-slate-100 text-slate-700 rounded-md">#{tag}</span>' 
                         for tag in curso['tags'][:3]])
    
    # Descrição com fallback
    descricao = curso.get('descricao', curso.get('descrição', 'Curso profissional com certificação.'))
    
    cards_html += f'''
    <article class="bg-white border border-slate-200 rounded-lg hover:shadow-md transition-all overflow-hidden" data-category="{curso['categoria']}" data-tags="{' '.join(curso['tags']).lower()}" data-title="{curso['titulo'].lower()}" data-institution="{curso['instituicao'].lower()}">
      <div class="h-48 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden flex items-center justify-center">
        {img_html}
        <div class="absolute top-3 left-3">
          <span class="px-3 py-1 text-xs font-medium rounded-full text-white {badge_class}">
            {badge_icon} {curso['categoria']}
          </span>
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-lg font-bold text-slate-800 mb-2">{curso['titulo']}</h3>
        <p class="text-sm text-slate-600 mb-4">{curso['instituicao']}</p>
        <p class="text-sm text-slate-700 mb-4">{descricao}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          {tags_html}
        </div>
        <div class="flex items-center justify-between pt-4 border-t border-slate-100">
          {cert_html}
          <a href="{curso['link']}" target="_blank" rel="noopener" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
            Acessar Curso →
          </a>
        </div>
      </div>
    </article>
    '''

# Extrair tags mais populares
from collections import Counter
all_tags = []
for curso in cursos:
    all_tags.extend(curso['tags'])
tag_counts = Counter(all_tags)
top_tags = [tag for tag, count in tag_counts.most_common(10)]

# Template HTML completo
html_template = f'''<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EduBot Pro - 100 Cursos Gratuitos Certificados</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    body {{ font-family: 'Inter', sans-serif; }}
    .font-mono {{ font-family: 'JetBrains Mono', monospace; }}
  </style>
</head>
<body class="bg-slate-50 text-slate-800">
  
  <!-- Header -->
  <header class="bg-white border-b border-slate-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold text-slate-900">EduBot Pro</h1>
          <p class="text-sm text-slate-600">Curadoria Inteligente · 100% Gratuito</p>
        </div>
        <div class="text-right">
          <p class="text-sm font-medium text-slate-700">{len(cursos)} Cursos</p>
          <p class="text-xs text-slate-500">Atualizado hoje</p>
        </div>
      </div>
    </div>
  </header>

  <!-- Filters -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="bg-white rounded-lg border border-slate-200 p-6 mb-6">
      <div class="space-y-4">
        <!-- Category Filters -->
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Tipo de Habilidade</label>
          <div class="flex flex-wrap gap-2">
            <button class="category-filter-btn px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white" data-filter="all">
              Todos ({len(cursos)})
            </button>
            <button class="category-filter-btn px-4 py-2 text-sm font-medium rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200" data-filter="Hard Skill">
              💻 Hard Skills ({sum(1 for c in cursos if c['categoria'] == 'Hard Skill')})
            </button>
            <button class="category-filter-btn px-4 py-2 text-sm font-medium rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200" data-filter="Soft Skill">
              🧠 Soft Skills ({sum(1 for c in cursos if c['categoria'] == 'Soft Skill')})
            </button>
          </div>
        </div>
        
        <!-- Tag Filters -->
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Categorias Populares</label>
          <div class="flex flex-wrap gap-2">
            {''.join([f'<button class="tag-filter-btn px-3 py-1.5 text-xs font-mono font-medium rounded-md bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-700 border border-slate-200" data-tag="{tag.lower()}">#{tag} ({sum(1 for c in cursos if tag in c["tags"])})</button>' for tag in top_tags])}
          </div>
        </div>
        
        <!-- Search -->
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Buscar</label>
          <input 
            type="text" 
            id="searchInput" 
            placeholder="Pesquise por título, instituição ou tags..."
            class="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
        </div>
      </div>
    </div>

    <!-- Results Count -->
    <div class="mb-4">
      <p class="text-sm text-slate-600">
        Mostrando <span id="resultCount">{len(cursos)}</span> cursos
      </p>
    </div>

    <!-- Course Grid -->
    <div id="courseGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {cards_html}
    </div>

    <!-- Empty State -->
    <div id="emptyState" class="hidden text-center py-12">
      <svg class="mx-auto h-12 w-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 class="mt-2 text-sm font-medium text-slate-900">Nenhum curso encontrado</h3>
      <p class="mt-1 text-sm text-slate-500">Tente ajustar os filtros de busca</p>
      <button onclick="clearFilters()" class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
        Limpar Filtros
      </button>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white border-t border-slate-200 mt-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="text-center">
        <p class="text-sm text-slate-600">
          © 2026 EduBot Pro · Curadoria inteligente de cursos gratuitos certificados
        </p>
        <p class="text-xs text-slate-500 mt-2">
          {len([c for c in cursos if c['certificado_gratuito']])} cursos com certificado gratuito
        </p>
      </div>
    </div>
  </footer>

  <script>
    let currentFilter = 'all';
    let currentTag = '';
    let currentSearch = '';

    // Category filter buttons
    document.querySelectorAll('.category-filter-btn').forEach(btn => {{
      btn.addEventListener('click', () => {{
        // Update active button
        document.querySelectorAll('.category-filter-btn').forEach(b => {{
          b.classList.remove('bg-blue-600', 'text-white');
          b.classList.add('bg-slate-100', 'text-slate-700');
        }});
        btn.classList.remove('bg-slate-100', 'text-slate-700');
        btn.classList.add('bg-blue-600', 'text-white');
        
        // Apply filter
        currentFilter = btn.dataset.filter;
        applyFilters();
      }});
    }});

    // Tag filter buttons
    document.querySelectorAll('.tag-filter-btn').forEach(btn => {{
      btn.addEventListener('click', () => {{
        // Toggle active state
        const isActive = btn.classList.contains('bg-blue-600');
        
        if (isActive) {{
          // Deactivate
          btn.classList.remove('bg-blue-600', 'text-white', 'border-blue-600');
          btn.classList.add('bg-slate-100', 'text-slate-700', 'border-slate-200');
          currentTag = '';
        }} else {{
          // Reset category filter to 'all' when selecting a tag
          currentFilter = 'all';
          document.querySelectorAll('.category-filter-btn').forEach(b => {{
            b.classList.remove('bg-blue-600', 'text-white');
            b.classList.add('bg-slate-100', 'text-slate-700');
          }});
          document.querySelector('.category-filter-btn[data-filter="all"]').classList.remove('bg-slate-100', 'text-slate-700');
          document.querySelector('.category-filter-btn[data-filter="all"]').classList.add('bg-blue-600', 'text-white');
          
          // Deactivate all other tag buttons
          document.querySelectorAll('.tag-filter-btn').forEach(b => {{
            b.classList.remove('bg-blue-600', 'text-white', 'border-blue-600');
            b.classList.add('bg-slate-100', 'text-slate-700', 'border-slate-200');
          }});
          
          // Activate this one
          btn.classList.remove('bg-slate-100', 'text-slate-700', 'border-slate-200');
          btn.classList.add('bg-blue-600', 'text-white', 'border-blue-600');
          currentTag = btn.dataset.tag;
        }}
        
        applyFilters();
      }});
    }});

    // Search input
    document.getElementById('searchInput').addEventListener('input', (e) => {{
      currentSearch = e.target.value.toLowerCase();
      applyFilters();
    }});

    function applyFilters() {{
      const courses = document.querySelectorAll('#courseGrid > article');
      let visibleCount = 0;

      courses.forEach(course => {{
        let show = true;

        // Category filter
        if (currentFilter !== 'all' && course.dataset.category !== currentFilter) {{
          show = false;
        }}

        // Tag filter
        if (currentTag && show) {{
          const courseTags = course.dataset.tags.toLowerCase();
          if (!courseTags.includes(currentTag)) {{
            show = false;
          }}
        }}

        // Search filter
        if (currentSearch && show) {{
          const searchableText = (
            course.dataset.title + ' ' +
            course.dataset.institution + ' ' +
            course.dataset.tags
          ).toLowerCase();
          
          if (!searchableText.includes(currentSearch)) {{
            show = false;
          }}
        }}

        course.style.display = show ? 'block' : 'none';
        if (show) visibleCount++;
      }});

      // Update count and empty state
      document.getElementById('resultCount').textContent = visibleCount;
      document.getElementById('emptyState').classList.toggle('hidden', visibleCount > 0);
      document.getElementById('courseGrid').classList.toggle('hidden', visibleCount === 0);
    }}

    function clearFilters() {{
      currentFilter = 'all';
      currentTag = '';
      currentSearch = '';
      document.getElementById('searchInput').value = '';
      document.querySelector('[data-filter="all"]').click();
      
      // Deactivate all tag buttons
      document.querySelectorAll('.tag-filter-btn').forEach(btn => {{
        btn.classList.remove('bg-blue-600', 'text-white', 'border-blue-600');
        btn.classList.add('bg-slate-100', 'text-slate-700', 'border-slate-200');
      }});
    }}
  </script>
</body>
</html>'''

# Salvar HTML
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_template)

print(f"[OK] index.html gerado com {len(cursos)} cursos!")
print(f"   - Hard Skills: {sum(1 for c in cursos if c['categoria'] == 'Hard Skill')}")
print(f"   - Soft Skills: {sum(1 for c in cursos if c['categoria'] == 'Soft Skill')}")
print(f"   - Com certificado gratis: {sum(1 for c in cursos if c['certificado_gratuito'])}")
