/* empty css                                 */
import { c as createAstro, b as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D3jevMZl.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BQPa9ey0.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://edubot-pro.vercel.app");
const $$Sobre = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sobre;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sobre o Projeto", "description": "Conhe\xE7a o EduBot Pro e nossa miss\xE3o de democratizar o acesso \xE0 educa\xE7\xE3o profissional de qualidade" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto"> <h1 class="text-4xl font-bold text-neutral-900 mb-6">Sobre o EduBot Pro</h1> <div class="prose prose-neutral max-w-none"> <section class="mb-8"> <h2 class="text-2xl font-bold text-neutral-900 mb-4">Nossa Missão</h2> <p class="text-neutral-700 leading-relaxed mb-4">
O <strong>EduBot Pro</strong> nasceu da necessidade de facilitar o acesso a cursos profissionais
          de qualidade que sejam 100% gratuitos e ofereçam certificação. Em um mercado de trabalho cada
          vez mais competitivo, acreditamos que o conhecimento deve ser acessível a todos.
</p> <p class="text-neutral-700 leading-relaxed">
Nossa plataforma utiliza inteligência artificial para realizar uma curadoria rigorosa de cursos,
          garantindo que você encontre apenas oportunidades validadas e relevantes para sua carreira.
</p> </section> <section class="mb-8"> <h2 class="text-2xl font-bold text-neutral-900 mb-4">Como Funciona</h2> <div class="bg-neutral-50 border border-neutral-200 rounded-lg p-6 mb-4"> <h3 class="text-lg font-bold text-neutral-900 mb-3">1. Curadoria Automatizada</h3> <p class="text-neutral-700">
Diariamente, nosso sistema consulta a API Gemini do Google para buscar novos cursos em
            plataformas renomadas como FGV, Fundação Bradesco, SENAI, Google e outras.
</p> </div> <div class="bg-neutral-50 border border-neutral-200 rounded-lg p-6 mb-4"> <h3 class="text-lg font-bold text-neutral-900 mb-3">2. Validação Rigorosa</h3> <p class="text-neutral-700">
Cada curso passa por validação automática segundo critérios técnicos:
</p> <ul class="list-disc list-inside text-neutral-700 mt-2 space-y-1"> <li>✅ Custo zero para assistir ao conteúdo</li> <li>✅ Certificação disponível (pode ser paga separadamente)</li> <li>✅ Conteúdo atual e relevante para o mercado 2026</li> <li>✅ Fonte confiável e reconhecida</li> </ul> </div> <div class="bg-neutral-50 border border-neutral-200 rounded-lg p-6"> <h3 class="text-lg font-bold text-neutral-900 mb-3">3. Atualização Contínua</h3> <p class="text-neutral-700">
O banco de dados é atualizado automaticamente via GitHub Actions, garantindo que você
            sempre tenha acesso às melhores oportunidades disponíveis.
</p> </div> </section> <section class="mb-8"> <h2 class="text-2xl font-bold text-neutral-900 mb-4">Tecnologias Utilizadas</h2> <div class="grid grid-cols-2 md:grid-cols-3 gap-4"> <div class="bg-white border border-neutral-200 rounded-lg p-4 text-center"> <div class="font-mono text-sm text-primary font-bold mb-1">Gemini AI</div> <div class="text-xs text-neutral-600">Curadoria</div> </div> <div class="bg-white border border-neutral-200 rounded-lg p-4 text-center"> <div class="font-mono text-sm text-primary font-bold mb-1">Python</div> <div class="text-xs text-neutral-600">Automação</div> </div> <div class="bg-white border border-neutral-200 rounded-lg p-4 text-center"> <div class="font-mono text-sm text-primary font-bold mb-1">Astro</div> <div class="text-xs text-neutral-600">Frontend</div> </div> <div class="bg-white border border-neutral-200 rounded-lg p-4 text-center"> <div class="font-mono text-sm text-primary font-bold mb-1">Tailwind</div> <div class="text-xs text-neutral-600">Design</div> </div> <div class="bg-white border border-neutral-200 rounded-lg p-4 text-center"> <div class="font-mono text-sm text-primary font-bold mb-1">GitHub</div> <div class="text-xs text-neutral-600">Versionamento</div> </div> <div class="bg-white border border-neutral-200 rounded-lg p-4 text-center"> <div class="font-mono text-sm text-primary font-bold mb-1">Vercel</div> <div class="text-xs text-neutral-600">Deploy</div> </div> </div> </section> <section class="mb-8"> <h2 class="text-2xl font-bold text-neutral-900 mb-4">Transparência</h2> <p class="text-neutral-700 leading-relaxed mb-4">
Somos 100% transparentes sobre nosso processo. O código-fonte do projeto está disponível
          publicamente, e todos os cursos listados são validados segundo critérios objetivos e
          automatizados.
</p> <p class="text-neutral-700 leading-relaxed"> <strong>Importante:</strong> EduBot Pro não é responsável pelo conteúdo dos cursos listados.
          Somos apenas uma plataforma de curadoria que facilita a descoberta de oportunidades educacionais.
          Para dúvidas sobre cursos específicos, entre em contato diretamente com a instituição.
</p> </section> <div class="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center"> <p class="text-neutral-700 mb-4">
Tem alguma sugestão de melhoria ou encontrou um curso incrível que deveria estar aqui?
</p> <a href="https://github.com/nicholasynaufal/edubot/issues" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors">
Contribuir no GitHub
<svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path> </svg> </a> </div> </div> </div> ` })}`;
}, "C:/Users/Meu Computador/Documents/Programa\xE7\xE3o/Agentes/edubot-pro-v2/src/pages/sobre.astro", void 0);

const $$file = "C:/Users/Meu Computador/Documents/Programação/Agentes/edubot-pro-v2/src/pages/sobre.astro";
const $$url = "/sobre";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sobre,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
