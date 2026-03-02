/* empty css                                 */
import { d as createAstro, c as createComponent, m as maybeRenderHead, g as addAttribute, b as renderTemplate, r as renderComponent, i as defineScriptVars } from '../chunks/astro/server_suRLM8Uk.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_A_DR7axz.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import 'clsx';
/* empty css                                 */
import { GoogleGenAI } from '@google/genai';
export { renderers } from '../renderers.mjs';

function CourseInteractions({ courseId }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    const savedData = localStorage.getItem(`course_interactions_${courseId}`);
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setRating(parsed.rating || 0);
      setComments(parsed.comments || []);
    }
  }, [courseId]);
  const saveData = (newRating, newComments) => {
    localStorage.setItem(`course_interactions_${courseId}`, JSON.stringify({
      rating: newRating,
      comments: newComments
    }));
  };
  const handleRating = (value) => {
    setRating(value);
    saveData(value, comments);
  };
  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      const commentObj = {
        id: Date.now(),
        text: newComment.trim(),
        date: (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR"),
        author: "Usuário Anônimo"
        // Sem sistema de login ainda
      };
      const updatedComments = [commentObj, ...comments];
      setComments(updatedComments);
      saveData(rating, updatedComments);
      setNewComment("");
      setIsSubmitting(false);
    }, 400);
  };
  return /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-6 border-t border-neutral-100/60 bg-white/50 rounded-xl p-4 backdrop-blur-sm -mx-4 -mb-4 px-6 pb-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-neutral-800", children: "Avalie este curso" }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-1", onMouseLeave: () => setHoverRating(0), children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "focus:outline-none transition-transform hover:scale-110",
          onMouseEnter: () => setHoverRating(star),
          onClick: () => handleRating(star),
          children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: `w-6 h-6 ${(hoverRating || rating) >= star ? "text-amber-400 fill-amber-400" : "text-neutral-300 fill-transparent"} transition-colors duration-200`,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              strokeWidth: "1.5",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" })
            }
          )
        },
        star
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx("form", { onSubmit: handleSubmitComment, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "textarea",
        {
          className: "w-full text-sm border border-neutral-200 rounded-lg p-3 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none shadow-sm",
          rows: "2",
          placeholder: "O que você achou do curso? (Opcional)",
          value: newComment,
          onChange: (e) => setNewComment(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: !newComment.trim() || isSubmitting,
          className: `absolute bottom-2 right-2 px-3 py-1.5 text-xs font-medium text-white rounded-md transition-all ${!newComment.trim() || isSubmitting ? "bg-neutral-300 cursor-not-allowed" : "bg-primary hover:bg-primary-hover shadow-md hover:shadow-lg"}`,
          children: isSubmitting ? "Enviando..." : "Comentar"
        }
      )
    ] }) }) }),
    comments.length > 0 && /* @__PURE__ */ jsx("div", { className: "max-h-40 overflow-y-auto pr-2 space-y-3 custom-scrollbar", children: comments.map((comment) => /* @__PURE__ */ jsxs("div", { className: "bg-neutral-50 rounded-lg p-3 border border-neutral-100/80 transition-all hover:border-neutral-200", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-1", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-neutral-700", children: comment.author }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-neutral-400", children: comment.date })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-600 leading-relaxed break-words", children: comment.text })
    ] }, comment.id)) })
  ] });
}

const $$Astro$2 = createAstro("https://edubot-pro.vercel.app");
const $$CourseCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CourseCard;
  const { curso } = Astro2.props;
  const linkFinal = curso.link_afiliado || curso.link;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(curso.id, "data-id")} class="group bg-white border border-slate-200 rounded-xl hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full relative"> <!-- Image/Placeholder --> <div class="h-48 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden"> ${curso.imagem ? renderTemplate`<img${addAttribute(curso.imagem, "src")}${addAttribute(curso.titulo, "alt")} class="w-full h-full object-cover" loading="lazy">` : renderTemplate`<div class="w-full h-full flex items-center justify-center"> <svg class="w-16 h-16 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> </div>`} <!-- Category Badge - Cores Automáticas --> <div class="absolute top-3 left-3"> <span${addAttribute(`
        px-3 py-1 text-xs font-mono font-medium rounded-full
        ${curso.categoria === "Hard Skill" ? "bg-primary text-white shadow-sm" : "bg-success text-white shadow-sm"}
      `, "class")}> ${curso.categoria === "Hard Skill" ? "\u{1F4BB} Hard Skill" : "\u{1F9E0} Soft Skill"} </span> </div> </div> <!-- Content --> <div class="p-6"> <div class="mb-4"> <h3 class="text-lg font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors"> ${curso.titulo} </h3> <p class="text-sm text-slate-600 flex items-center"> <svg class="w-4 h-4 mr-1.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path> </svg> ${curso.instituicao} </p> </div> <p class="text-sm text-slate-700 mb-4 line-clamp-2"> ${curso.descricao} </p> <!-- Tags --> <div class="flex flex-wrap gap-2 mb-4"> ${curso.tags.slice(0, 3).map((tag) => renderTemplate`<span class="px-2.5 py-1 text-xs font-mono bg-slate-100 text-slate-700 rounded-md hover:bg-slate-200 transition-colors">
#${tag} </span>`)} </div> <!-- Livro Recomendado (Afiliado) --> ${curso.livro_recomendado && renderTemplate`<div class="mb-4 mt-2 p-3 bg-indigo-50/50 border border-indigo-100 rounded-lg"> <div class="flex items-start"> <svg class="w-5 h-5 text-indigo-500 mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> <div> <span class="text-[10px] font-bold tracking-wider text-indigo-600 uppercase block mb-1">Aprofunde-se no tema</span> <a${addAttribute(curso.livro_recomendado.link_amazon, "href")} target="_blank" rel="noopener noreferrer" class="text-sm font-medium text-slate-800 hover:text-indigo-600 line-clamp-1 transition-colors" title="Comprar livro na Amazon"> ${curso.livro_recomendado.titulo} </a> </div> </div> </div>`} <!-- Footer --> <div class="flex items-center justify-between pt-4 border-t border-slate-100"> ${curso.certificado_gratuito ? renderTemplate`<span class="flex items-center text-xs font-medium text-success"> <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
Certificado Grátis
</span>` : renderTemplate`<span class="flex items-center text-xs font-medium text-amber-600"> <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path> </svg>
Certificado Pago
</span>`} <a${addAttribute(linkFinal, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(curso.link_afiliado ? "true" : "false", "data-affiliate")} class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-hover rounded-md transition-colors shadow-sm hover:shadow">
Acessar Curso
<svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </a> </div> ${renderComponent($$result, "CourseInteractions", CourseInteractions, { "client:load": true, "courseId": curso.id, "client:component-hydration": "load", "client:component-path": "C:/Users/Meu Computador/Documents/Programa\xE7\xE3o/Agentes/edubot-pro-v2/src/components/CourseInteractions.jsx", "client:component-export": "default" })} </div> </article>`;
}, "C:/Users/Meu Computador/Documents/Programa\xE7\xE3o/Agentes/edubot-pro-v2/src/components/CourseCard.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://edubot-pro.vercel.app");
const $$AdBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AdBanner;
  const { enabled = false, position = "top", adSlot } = Astro2.props;
  if (!enabled) {
    return null;
  }
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<div", ' data-astro-cid-33f3bo6r> <div class="bg-neutral-100 border border-neutral-200 rounded-lg p-4 text-center" data-astro-cid-33f3bo6r> <!-- Placeholder para Google AdSense --> <div class="flex flex-col items-center justify-center min-h-[120px] text-neutral-500" data-astro-cid-33f3bo6r> <svg class="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-33f3bo6r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" data-astro-cid-33f3bo6r></path> </svg> <p class="text-xs font-mono" data-astro-cid-33f3bo6r>Ad Space</p> </div> <!-- Quando tiver AdSense, descomentar: --> <!--\n    <ins class="adsbygoogle"\n         style="display:block"\n         data-ad-client="ca-pub-XXXXXXXXXX"\n         data-ad-slot={adSlot}\n         data-ad-format="auto"\n         data-full-width-responsive="true">\n    </ins>\n    <script>\n      (adsbygoogle = window.adsbygoogle || []).push({});\n    <\/script>\n    --> </div> <p class="text-xs text-neutral-400 text-center mt-2" data-astro-cid-33f3bo6r>Publicidade</p> </div> '])), maybeRenderHead(), addAttribute(`
  ad-banner-container
  ${position === "sidebar" ? "lg:sticky lg:top-24" : ""}
  ${position === "top" ? "mb-8" : "mt-8"}
`, "class"));
}, "C:/Users/Meu Computador/Documents/Programa\xE7\xE3o/Agentes/edubot-pro-v2/src/components/AdBanner.astro", void 0);

const ultima_atualizacao = "2026-02-06T15:30:00Z";
const total_cursos = 100;
const cursos = [
	{
		id: "fgv_ia_ml_1738855200",
		titulo: "Inteligência Artificial e Machine Learning",
		instituicao: "FGV (Fundação Getulio Vargas)",
		link: "https://educacao-executiva.fgv.br/cursos/gratuitos",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"IA",
			"Machine Learning",
			"Tecnologia"
		],
		descricao: "Fundamentos de IA e ML para profissionais que desejam entender e aplicar algoritmos inteligentes.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "google_python_automation_1738855201",
		titulo: "Automação com Python - Google IT",
		instituicao: "Google (Coursera)",
		link: "https://www.coursera.org/learn/automating-real-world-tasks-python",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Python",
			"Automação",
			"Programação"
		],
		descricao: "Aprenda a automatizar tarefas do mundo real usando Python, com certificado do Google.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "bradesco_data_science_1738855202",
		titulo: "Fundamentos de Ciência de Dados",
		instituicao: "Fundação Bradesco - Escola Virtual",
		link: "https://www.ev.org.br/cursos/fundamentos-de-ciencia-de-dados",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Data Science",
			"Análise",
			"Dados"
		],
		descricao: "Aprenda os conceitos fundamentais para iniciar na área de dados e análise.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "aws_cloud_practitioner_1738855203",
		titulo: "AWS Cloud Practitioner Essentials",
		instituicao: "Amazon Web Services",
		link: "https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"AWS",
			"Cloud",
			"DevOps"
		],
		descricao: "Fundamentos da nuvem AWS para iniciar carreira em cloud computing.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "google_cybersecurity_1738855204",
		titulo: "Google Cybersecurity Certificate",
		instituicao: "Google (Coursera)",
		link: "https://www.coursera.org/professional-certificates/google-cybersecurity",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Cybersecurity",
			"Segurança",
			"Redes"
		],
		descricao: "Certificação profissional em segurança cibernética do Google.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "senai_scrum_agile_1738855205",
		titulo: "Metodologias Ágeis e Scrum",
		instituicao: "SENAI",
		link: "https://www.mundosenai.com.br/curso/metodologia-agil-e-scrum/",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Scrum",
			"Agile",
			"Gestão"
		],
		descricao: "Domine as metodologias ágeis mais usadas no mercado de tecnologia.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "google_marketing_digital_1738855206",
		titulo: "Fundamentos do Marketing Digital",
		instituicao: "Google Skillshop",
		link: "https://skillshop.withgoogle.com/",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Marketing",
			"Digital",
			"SEO"
		],
		descricao: "Aprenda estratégias de marketing digital diretamente do Google.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "fgv_gestao_projetos_1738855207",
		titulo: "Gestão de Projetos",
		instituicao: "FGV (Fundação Getulio Vargas)",
		link: "https://educacao-executiva.fgv.br/cursos/gratuitos",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"PMI",
			"Projetos",
			"Gestão"
		],
		descricao: "Fundamentos de gestão de projetos com metodologias reconhecidas internacionalmente.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "sebrae_empreendedorismo_1738855208",
		titulo: "Como Elaborar um Plano de Negócios",
		instituicao: "SEBRAE",
		link: "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"Empreendedorismo",
			"Negócios",
			"Startups"
		],
		descricao: "Aprenda a estruturar seu plano de negócios com a metodologia SEBRAE.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "bradesco_financas_pessoais_1738855209",
		titulo: "Educação Financeira e Investimentos",
		instituicao: "Fundação Bradesco - Escola Virtual",
		link: "https://www.ev.org.br/cursos/educacao-financeira",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Finanças",
			"Investimentos",
			"Economia"
		],
		descricao: "Desenvolva conhecimento em finanças pessoais e gestão financeira.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "google_ux_design_1738855210",
		titulo: "Google UX Design Certificate",
		instituicao: "Google (Coursera)",
		link: "https://www.coursera.org/professional-certificates/google-ux-design",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"UX",
			"Design",
			"Figma"
		],
		descricao: "Certificação profissional em design de experiência do usuário.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "bradesco_design_grafico_1738855211",
		titulo: "Adobe Photoshop CC - Fundamentos",
		instituicao: "Fundação Bradesco - Escola Virtual",
		link: "https://www.ev.org.br/cursos/adobe-photoshop-cc",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Design",
			"Photoshop",
			"Adobe"
		],
		descricao: "Aprenda os fundamentos do Photoshop para design gráfico profissional.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "british_council_english_1738855212",
		titulo: "English for Business and Entrepreneurship",
		instituicao: "University of Pennsylvania (Coursera)",
		link: "https://www.coursera.org/learn/english-for-business-and-entrepreneurship",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Inglês",
			"Business",
			"Comunicação"
		],
		descricao: "Inglês para negócios e empreendedorismo com foco em comunicação profissional.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "fgv_comunicacao_oratoria_1738855213",
		titulo: "Comunicação e Oratória",
		instituicao: "FGV (Fundação Getulio Vargas)",
		link: "https://educacao-executiva.fgv.br/cursos/gratuitos",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"Oratória",
			"Comunicação",
			"Apresentações"
		],
		descricao: "Desenvolva habilidades de comunicação e falar em público.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "fgv_lideranca_1738855214",
		titulo: "Liderança e Desenvolvimento de Equipes",
		instituicao: "FGV (Fundação Getulio Vargas)",
		link: "https://educacao-executiva.fgv.br/cursos/gratuitos",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"Liderança",
			"Gestão de Pessoas",
			"Equipes"
		],
		descricao: "Aprimore suas habilidades de liderança e gestão de equipes de alto desempenho.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "bradesco_produtividade_1738855215",
		titulo: "Gestão do Tempo e Produtividade",
		instituicao: "Fundação Bradesco - Escola Virtual",
		link: "https://www.ev.org.br/cursos/gestao-do-tempo",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"Produtividade",
			"Gestão",
			"Tempo"
		],
		descricao: "Técnicas para otimizar sua produtividade e gerenciar melhor seu tempo.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "bradesco_intel_emocional_1738855216",
		titulo: "Inteligência Emocional",
		instituicao: "Fundação Bradesco - Escola Virtual",
		link: "https://www.ev.org.br/cursos/inteligencia-emocional",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"Autoconhecimento",
			"Psicologia",
			"Relacionamento"
		],
		descricao: "Desenvolva o equilíbrio emocional necessário para lidar com os desafios do dia a dia.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "fgv_esg_sustentabilidade_1738855217",
		titulo: "ESG: Ambiental, Social e Governança",
		instituicao: "FGV (Fundação Getulio Vargas)",
		link: "https://educacao-executiva.fgv.br/cursos/gratuitos",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"ESG",
			"Sustentabilidade",
			"Governança"
		],
		descricao: "Compreenda os fundamentos de ESG e sua aplicação nas organizações.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "fiocruz_saude_digital_1738855218",
		titulo: "Introdução à Saúde Digital",
		instituicao: "Fiocruz",
		link: "https://portal.fiocruz.br/cursos-abertos",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Saúde Digital",
			"Telemedicina",
			"Health Tech"
		],
		descricao: "Fundamentos de saúde digital e telemedicina para profissionais da área.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "bradesco_python_basico_1738855219",
		titulo: "Linguagem de Programação Python - Básico",
		instituicao: "Fundação Bradesco - Escola Virtual",
		link: "https://www.ev.org.br/cursos/linguagem-de-programacao-python-basico",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Programação",
			"Python",
			"Tecnologia"
		],
		descricao: "Inicie sua jornada na programação com uma das linguagens mais versáteis do mundo.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "microsoft_excel_1738855220",
		titulo: "Excel: do Básico ao Avançado",
		instituicao: "Fundação Bradesco - Escola Virtual",
		link: "https://www.ev.org.br/cursos/microsoft-excel-2016-completo",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Excel",
			"Planilhas",
			"Produtividade"
		],
		descricao: "Domine o Excel desde funções básicas até análise de dados avançada.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "google_analytics_1738855221",
		titulo: "Google Analytics para Iniciantes",
		instituicao: "Google Skillshop",
		link: "https://skillshop.withgoogle.com/",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Analytics",
			"Marketing Digital",
			"Dados"
		],
		descricao: "Domine as métricas essenciais para análise de dados web e tomada de decisões.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "ibm_data_science_1738855222",
		titulo: "IBM Data Science Professional Certificate",
		instituicao: "IBM (Coursera)",
		link: "https://www.coursera.org/professional-certificates/ibm-data-science",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Data Science",
			"IBM",
			"Python"
		],
		descricao: "Certificação profissional em ciência de dados da IBM.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "meta_marketing_1738855223",
		titulo: "Meta Marketing Analytics Certificate",
		instituicao: "Meta (Facebook - Coursera)",
		link: "https://www.coursera.org/professional-certificates/facebook-marketing-analytics",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Marketing",
			"Analytics",
			"Facebook Ads"
		],
		descricao: "Certificação em marketing analytics da Meta (Facebook).",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "harvard_cs50_1738855224",
		titulo: "CS50: Introduction to Computer Science",
		instituicao: "Harvard University (edX)",
		link: "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Programação",
			"CS",
			"Harvard"
		],
		descricao: "Curso introdutório de ciência da computação de Harvard, mundialmente reconhecido.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "microsoft_azure_1738855225",
		titulo: "Microsoft Azure Fundamentals",
		instituicao: "Microsoft Learn",
		link: "https://learn.microsoft.com/training/paths/az-900-describe-cloud-concepts/",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Azure",
			"Cloud",
			"Microsoft"
		],
		descricao: "Fundamentos de computação em nuvem com Microsoft Azure.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "linkedin_powerbi_1738855226",
		titulo: "Power BI Essential Training",
		instituicao: "LinkedIn Learning",
		link: "https://www.linkedin.com/learning/power-bi-essential-training",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Power BI",
			"BI",
			"Visualização"
		],
		descricao: "Treinamento essencial em Power BI para análise e visualização de dados.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "salesforce_basics_1738855227",
		titulo: "Salesforce Basics",
		instituicao: "Salesforce Trailhead",
		link: "https://trailhead.salesforce.com/",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"CRM",
			"Salesforce",
			"Vendas"
		],
		descricao: "Fundamentos do Salesforce CRM para profissionais de vendas e marketing.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "stanford_ml_1738855228",
		titulo: "Machine Learning",
		instituicao: "Stanford University (Coursera)",
		link: "https://www.coursera.org/learn/machine-learning",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Machine Learning",
			"IA",
			"Stanford"
		],
		descricao: "Curso clássico de Machine Learning ministrado por Andrew Ng.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "senai_industria40_1738855229",
		titulo: "Indústria 4.0",
		instituicao: "SENAI",
		link: "https://www.mundosenai.com.br/curso/industria-4-0/",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Indústria 4.0",
			"Automação",
			"IoT"
		],
		descricao: "Conceitos fundamentais da transformação digital na indústria.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:20:00Z"
	},
	{
		id: "deep_learning_ai_1738855300",
		titulo: "Deep Learning Specialization",
		instituicao: "DeepLearning.AI (Coursera)",
		link: "https://learn.microsoft.com/en-us/training/paths/get-started-with-artificial-intelligence-on-azure/",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Deep Learning",
			"Neural Networks",
			"IA"
		],
		descricao: "Especialização completa em deep learning com Andrew Ng.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "tensorflow_google_1738855301",
		titulo: "Introduction to TensorFlow",
		instituicao: "Google (Coursera)",
		link: "https://www.coursera.org/learn/introduction-tensorflow",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"TensorFlow",
			"Python",
			"ML"
		],
		descricao: "Aprenda TensorFlow para desenvolvimento de modelos de machine learning.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "sql_data_science_1738855302",
		titulo: "SQL for Data Science",
		instituicao: "UC Davis (Coursera)",
		link: "https://www.coursera.org/learn/sql-for-data-science",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"SQL",
			"Database",
			"Data Science"
		],
		descricao: "SQL essencial para análise de dados e ciência de dados.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "r_programming_1738855303",
		titulo: "R Programming",
		instituicao: "Johns Hopkins University (Coursera)",
		link: "https://www.coursera.org/learn/r-programming",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"R",
			"Estatística",
			"Data Science"
		],
		descricao: "Programação em R para análise estatística e visualização de dados.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "tableau_fundamentals_1738855304",
		titulo: "Tableau Fundamentals",
		instituicao: "Tableau (LinkedIn Learning)",
		link: "https://www.linkedin.com/learning/tableau-essential-training-2020-1",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Tableau",
			"BI",
			"Visualização"
		],
		descricao: "Domine o Tableau para criar visualizações de dados impactantes.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "javascript_fullstack_1738855305",
		titulo: "JavaScript Completo: do Básico ao Avançado",
		instituicao: "Fundação Bradesco - Escola Virtual",
		link: "https://www.ev.org.br/cursos/javascript",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"JavaScript",
			"Web",
			"Programação"
		],
		descricao: "JavaScript completo para desenvolvimento web moderno.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "react_complete_1738855306",
		titulo: "React - The Complete Guide",
		instituicao: "Meta (Coursera)",
		link: "https://www.coursera.org/learn/react-basics",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"React",
			"JavaScript",
			"Frontend"
		],
		descricao: "Desenvolvimento frontend moderno com React da Meta (Facebook).",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "nodejs_backend_1738855307",
		titulo: "Node.js: Backend Development",
		instituicao: "IBM (Coursera)",
		link: "https://www.coursera.org/learn/developing-back-end-apps-with-nodejs-and-express",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Node.js",
			"Backend",
			"JavaScript"
		],
		descricao: "Desenvolvimento backend com Node.js e Express.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "java_programming_1738855308",
		titulo: "Java Programming and Software Engineering",
		instituicao: "Duke University (Coursera)",
		link: "https://www.coursera.org/specializations/java-programming",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Java",
			"Programação",
			"Software"
		],
		descricao: "Programação Java e engenharia de software.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "git_github_1738855309",
		titulo: "Git e GitHub Essencial",
		instituicao: "Fundação Bradesco - Escola Virtual",
		link: "https://www.ev.org.br/cursos/git-e-github",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Git",
			"GitHub",
			"Versionamento"
		],
		descricao: "controle de versão com Git e colaboração com GitHub.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "docker_kubernetes_1738855310",
		titulo: "Docker e Kubernetes: Fundamentos",
		instituicao: "IBM (Coursera)",
		link: "https://www.coursera.org/learn/ibm-containers-docker-kubernetes-openshift",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Docker",
			"Kubernetes",
			"DevOps"
		],
		descricao: "Containerização e orquestração com Docker e Kubernetes.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "gcp_fundamentals_1738855311",
		titulo: "Google Cloud Platform Fundamentals",
		instituicao: "Google Cloud",
		link: "https://cloud.google.com/training/courses",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"GCP",
			"Cloud",
			"Google"
		],
		descricao: "Fundamentos da Google Cloud Platform para iniciantes.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "terraform_iac_1738855312",
		titulo: "Infrastructure as Code with Terraform",
		instituicao: "HashiCorp (Learn Platform)",
		link: "https://learn.hashicorp.com/terraform",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Terraform",
			"IaC",
			"DevOps"
		],
		descricao: "Automação de infraestrutura com Terraform.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "ethical_hacking_1738855313",
		titulo: "Ethical Hacking Essentials",
		instituicao: "EC-Council (iClass)",
		link: "https://iclass.eccouncil.org/",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Ethical Hacking",
			"Pentest",
			"Segurança"
		],
		descricao: "Fundamentos de hacking ético e testes de penetração.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "iso27001_1738855314",
		titulo: "Segurança da Informação: ISO 27001",
		instituicao: "Fundação Bradesco - Escola Virtual",
		link: "https://www.ev.org.br/cursos/seguranca-da-informacao",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"ISO 27001",
			"Segurança",
			"Compliance"
		],
		descricao: "Fundamentos da ISO 27001 para segurança da informação.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "seo_fundamentals_1738855315",
		titulo: "SEO Fundamentals",
		instituicao: "UC Davis (Coursera)",
		link: "https://www.coursera.org/learn/seo-fundamentals",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"SEO",
			"Marketing",
			"Google"
		],
		descricao: "Otimização para mecanismos de busca e marketing orgânico.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "content_marketing_1738855316",
		titulo: "Content Marketing Strategy",
		instituicao: "HubSpot Academy",
		link: "https://academy.hubspot.com/courses/content-marketing",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Content Marketing",
			"Marketing",
			"Estratégia"
		],
		descricao: "Estratégia de marketing de conteúdo da HubSpot.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "social_media_marketing_1738855317",
		titulo: "Social Media Marketing",
		instituicao: "Northwestern University (Coursera)",
		link: "https://www.coursera.org/specializations/social-media-marketing",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Social Media",
			"Marketing",
			"Redes Sociais"
		],
		descricao: "Marketing em mídias sociais completo.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "email_marketing_1738855318",
		titulo: "Email Marketing Certification",
		instituicao: "HubSpot Academy",
		link: "https://academy.hubspot.com/courses/email-marketing",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Email Marketing",
			"Marketing",
			"Automação"
		],
		descricao: "Certificação em email marketing da HubSpot.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "pmp_exam_prep_1738855319",
		titulo: "PMP Exam Preparation",
		instituicao: "Project Management Institute",
		link: "https://www.pmi.org/certifications/project-management-pmp",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"PMP",
			"PMI",
			"Gestão de Projetos"
		],
		descricao: "Preparação para certificação PMP do PMI.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "prince2_foundation_1738855320",
		titulo: "PRINCE2 Foundation",
		instituicao: "AXELOS",
		link: "https://www.axelos.com/certifications/propath/prince2-project-management",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"PRINCE2",
			"Gestão",
			"Projetos"
		],
		descricao: "Metodologia PRINCE2 para gestão de projetos.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "kanban_management_1738855321",
		titulo: "Kanban Management Professional",
		instituicao: "Kanban University",
		link: "https://kanban.university/",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Kanban",
			"Agile",
			"Gestão"
		],
		descricao: "Gestão de fluxo de trabalho com método Kanban.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "lean_startup_1738855322",
		titulo: "The Lean Startup Method",
		instituicao: "Udemy (Eric Ries)",
		link: "https://www.udemy.com/course/lean-startup/",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"Lean Startup",
			"Empreendedorismo",
			"Startups"
		],
		descricao: "Metodologia Lean Startup para validação de negócios.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "business_model_canvas_1738855323",
		titulo: "Business Model Canvas",
		instituicao: "SEBRAE",
		link: "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"Business Model",
			"Canvas",
			"Negócios"
		],
		descricao: "Modelagem de negócios com Business Model Canvas.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "contabilidade_basica_1738855324",
		titulo: "Contabilidade Básica",
		instituicao: "Fundação Bradesco - Escola Virtual",
		link: "https://www.ev.org.br/cursos/contabilidade-basica",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Contabilidade",
			"Finanças",
			"Gestão"
		],
		descricao: "Fundamentos de contabilidade para não-contadores.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "financial_modeling_1738855325",
		titulo: "Financial Modeling & Valuation",
		instituicao: "University of Pennsylvania (Coursera)",
		link: "https://www.coursera.org/learn/wharton-financial-modeling-valuation",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Modelagem Financeira",
			"Valuation",
			"Finanças"
		],
		descricao: "Modelagem financeira e valuation de empresas.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "crypto_blockchain_1738855326",
		titulo: "Blockchain and Cryptocurrency",
		instituicao: "University of California (Coursera)",
		link: "https://www.coursera.org/learn/cryptocurrency",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Blockchain",
			"Cripto",
			"Web3"
		],
		descricao: "Fundamentos de blockchain e criptomoedas.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "figma_ui_design_1738855327",
		titulo: "Figma UI/UX Design",
		instituicao: "Udemy",
		link: "https://www.udemy.com/course/figma-ux-ui-design/",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Figma",
			"UI",
			"UX"
		],
		descricao: "Design de interfaces modernas com Figma.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "user_research_1738855328",
		titulo: "User Experience Research",
		instituicao: "University of Michigan (Coursera)",
		link: "https://www.coursera.org/learn/user-research",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"UX Research",
			"Pesquisa",
			"Design"
		],
		descricao: "Pesquisa de usuário para design centrado no ser humano.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "ui_animation_1738855329",
		titulo: "UI Animation and Micro-interactions",
		instituicao: "Interaction Design Foundation",
		link: "https://www.interaction-design.org/courses/ui-animation",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Animação",
			"UI",
			"Interação"
		],
		descricao: "Animações e micro-interações para interfaces modernas.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "illustrator_advanced_1738855330",
		titulo: "Adobe Illustrator - Avançado",
		instituicao: "Fundação Bradesco - Escola Virtual",
		link: "https://www.ev.org.br/cursos/adobe-illustrator",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Illustrator",
			"Adobe",
			"Design"
		],
		descricao: "Técnicas avançadas de Illustrator para design vetorial.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "after_effects_motion_1738855331",
		titulo: "After Effects: Motion Graphics",
		instituicao: "Adobe Learn",
		link: "https://helpx.adobe.com/after-effects/tutorials.html",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"After Effects",
			"Motion",
			"Vídeo"
		],
		descricao: "Motion graphics e animação com After Effects.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "graphic_design_principles_1738855332",
		titulo: "Graphic Design Fundamentals",
		instituicao: "CalArts (Coursera)",
		link: "https://www.coursera.org/specializations/graphic-design",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Design Gráfico",
			"Fundamentos",
			"Arte"
		],
		descricao: "Fundamentos de design gráfico da California Institute of the Arts.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "toefl_preparation_1738855333",
		titulo: "TOEFL Test Preparation",
		instituicao: "ETS (TOEFL Official)",
		link: "https://www.ets.org/toefl/test-takers/ibt/prepare.html",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"TOEFL",
			"Inglês",
			"Certificação"
		],
		descricao: "Preparação para o exame TOEFL iBT.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "ielts_academic_1738855334",
		titulo: "IELTS Academic Preparation",
		instituicao: "British Council",
		link: "https://www.britishcouncil.org/exam/ielts/prepare",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"IELTS",
			"Inglês",
			"Academic"
		],
		descricao: "Preparação para IELTS acadêmico.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "spanish_beginners_1738855335",
		titulo: "Español para Principiantes",
		instituicao: "Duolingo",
		link: "https://www.duolingo.com/course/es/en/Learn-Spanish",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Espanhol",
			"Idiomas",
			"Básico"
		],
		descricao: "Espanhol para iniciantes de forma gamificada.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1589409514187-c21d14df0d04?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "ted_public_speaking_1738855336",
		titulo: "TED Masterclass: Public Speaking",
		instituicao: "TED",
		link: "https://www.ted.com/participate/ted-masterclass",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"Public Speaking",
			"TED",
			"Apresentações"
		],
		descricao: "Técnicas de apresentação dos palestrantes TED.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "storytelling_business_1738855337",
		titulo: "Storytelling for Business",
		instituicao: "LinkedIn Learning",
		link: "https://www.linkedin.com/learning/storytelling-for-business",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"Storytelling",
			"Comunicação",
			"Business"
		],
		descricao: "Arte de contar histórias para negócios.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "copywriting_1738855338",
		titulo: "Copywriting: Escrita Persuasiva",
		instituicao: "Rock Content University",
		link: "https://university.rockcontent.com/",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Copywriting",
			"Escrita",
			"Marketing"
		],
		descricao: "Técnicas de escrita persuasiva para marketing.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "servant_leadership_1738855339",
		titulo: "Servant Leadership",
		instituicao: "Greenleaf Center",
		link: "https://www.greenleaf.org/what-is-servant-leadership/",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"Liderança Servidora",
			"Gestão",
			"Liderança"
		],
		descricao: "Liderança servidora: liderar servindo.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "coaching_fundamentals_1738855340",
		titulo: "Coaching Fundamentals",
		instituicao: "ICF (International Coaching Federation)",
		link: "https://coachingfederation.org/",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"Coaching",
			"Desenvolvimento",
			"Liderança"
		],
		descricao: "Fundamentos de coaching profissional.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "feedback_cultura_1738855341",
		titulo: "Cultura de Feedback",
		instituicao: "FGV (Fundação Getulio Vargas)",
		link: "https://educacao-executiva.fgv.br/cursos/gratuitos",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"Feedback",
			"Cultura",
			"Gestão"
		],
		descricao: "Como criar cultura de feedback construtivo.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "gtd_getting_things_done_1738855342",
		titulo: "Getting Things Done (GTD)",
		instituicao: "David Allen Company",
		link: "https://gettingthingsdone.com/",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"GTD",
			"Produtividade",
			"Organização"
		],
		descricao: "Método GTD para máxima produtividade.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "focus_deep_work_1738855343",
		titulo: "Deep Work: Foco Profundo",
		instituicao: "Cal Newport (MasterClass)",
		link: "https://www.masterclass.com/",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"Foco",
			"Deep Work",
			"Concentração"
		],
		descricao: "Técnicas para trabalho focado e produtivo.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "notion_productivity_1738855344",
		titulo: "Notion: Produtividade Total",
		instituicao: "Notion Academy",
		link: "https://www.notion.so/",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Notion",
			"Produtividade",
			"Organização"
		],
		descricao: "Domine o Notion para produtividade máxima.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "mindfulness_meditation_1738855345",
		titulo: "Mindfulness e Meditação",
		instituicao: "Headspace",
		link: "https://www.headspace.com/meditation",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"Mindfulness",
			"Meditação",
			"Bem-estar"
		],
		descricao: "Prática de mindfulness para equilíbrio mental.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "resilience_training_1738855346",
		titulo: "Desenvolvimento de Resiliência",
		instituicao: "Fundação Bradesco - Escola Virtual",
		link: "https://www.ev.org.br/cursos/resiliencia",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"Resiliência",
			"Bem-estar",
			"Psicologia"
		],
		descricao: "Fortaleça sua resiliência para superar desafios.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "emotional_intelligence_yale_1738855347",
		titulo: "The Science of Well-Being",
		instituicao: "Yale University (Coursera)",
		link: "https://www.coursera.org/learn/the-science-of-well-being",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"Bem-estar",
			"Felicidade",
			"IE"
		],
		descricao: "Ciência do bem-estar e felicidade de Yale.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "sustentabilidade_empresarial_1738855348",
		titulo: "Sustentabilidade Empresarial",
		instituicao: "FGV (Fundação Getulio Vargas)",
		link: "https://educacao-executiva.fgv.br/cursos/gratuitos",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Sustentabilidade",
			"ESG",
			"Empresas"
		],
		descricao: "Práticas de sustentabilidade no mundo corporativo.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "economia_circular_1738855349",
		titulo: "Economia Circular",
		instituicao: "Ellen MacArthur Foundation",
		link: "https://ellenmacarthurfoundation.org/",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Economia Circular",
			"Sustentabilidade",
			"ESG"
		],
		descricao: "Fundamentos de economia circular e regenerativa.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "carbon_footprint_1738855350",
		titulo: "Climate Change & Carbon Footprint",
		instituicao: "University of Edinburgh (Coursera)",
		link: "https://www.coursera.org/learn/climate-change",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Clima",
			"Carbono",
			"Sustentabilidade"
		],
		descricao: "Mudanças climáticas e pegada de carbono.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "health_informatics_1738855351",
		titulo: "Health Informatics",
		instituicao: "Johns Hopkins University (Coursera)",
		link: "https://www.coursera.org/specializations/healthcare-informatics",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Informática em Saúde",
			"Health Tech",
			"Tecnologia"
		],
		descricao: "Informática aplicada à saúde.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "telemedicina_fundamentos_1738855352",
		titulo: "Telemedicina e Telessaúde",
		instituicao: "Fiocruz",
		link: "https://portal.fiocruz.br/cursos-abertos",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Telemedicina",
			"Telessaúde",
			"Saúde Digital"
		],
		descricao: "Fundamentos de telemedicina e telessaúde.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "iot_wearables_1738855353",
		titulo: "IoT and Wearable Technologies",
		instituicao: "MIT (edX)",
		link: "https://www.edx.org/course/internet-of-things-iot",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"IoT",
			"Wearables",
			"Tecnologia"
		],
		descricao: "Internet das Coisas e tecnologias vestíveis.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1530319067432-f2a729c03db5?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "autocad_2d_1738855354",
		titulo: "AutoCAD 2D - Fundamentos",
		instituicao: "Fundação Bradesco - Escola Virtual",
		link: "https://www.ev.org.br/cursos/autocad",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"AutoCAD",
			"CAD",
			"Engenharia"
		],
		descricao: "Desenho técnico 2D com AutoCAD.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "solidworks_cad_1738855355",
		titulo: "SolidWorks: CAD 3D",
		instituicao: "Dassault Systèmes",
		link: "https://www.solidworks.com/sw/education/certification-programs-cad-students.htm",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"SolidWorks",
			"3D",
			"CAD"
		],
		descricao: "Modelagem 3D com SolidWorks.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "arduino_iot_1738855356",
		titulo: "Arduino e IoT para Iniciantes",
		instituicao: "Arduino",
		link: "https://www.arduino.cc/education/",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Arduino",
			"IoT",
			"Eletrônica"
		],
		descricao: "Programação de Arduino e projetos IoT.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "raspberry_pi_1738855357",
		titulo: "Raspberry Pi Fundamentals",
		instituicao: "Raspberry Pi Foundation",
		link: "https://www.raspberrypi.org/teach/",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Raspberry Pi",
			"Linux",
			"Programação"
		],
		descricao: "Programação e projetos com Raspberry Pi.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1591799265444-d66432b91588?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "ethical_ai_1738855358",
		titulo: "AI Ethics and Responsible AI",
		instituicao: "MIT (edX)",
		link: "https://www.edx.org/course/ethics-of-ai",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"IA Ética",
			"Ethics",
			"IA"
		],
		descricao: "Ética e uso responsável de inteligência artificial.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "quantum_computing_1738855359",
		titulo: "Introduction to Quantum Computing",
		instituicao: "IBM Quantum",
		link: "https://quantum-computing.ibm.com/learn",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Quantum",
			"Computação Quântica",
			"IBM"
		],
		descricao: "Fundamentos de computação quântica da IBM.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "nlp_processing_1738855360",
		titulo: "Natural Language Processing",
		instituicao: "Stanford University (Coursera)",
		link: "https://www.coursera.org/specializations/natural-language-processing",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"NLP",
			"IA",
			"Linguagem"
		],
		descricao: "Processamento de linguagem natural com IA.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "computer_vision_1738855361",
		titulo: "Computer Vision Fundamentals",
		instituicao: "IBM (Coursera)",
		link: "https://www.coursera.org/learn/introduction-computer-vision-watson-opencv",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Computer Vision",
			"IA",
			"Visão"
		],
		descricao: "Fundamentos de visão computacional e reconhecimento de imagens.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "game_development_unity_1738855362",
		titulo: "Game Development with Unity",
		instituicao: "Unity Learn",
		link: "https://learn.unity.com/",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Unity",
			"Games",
			"Desenvolvimento"
		],
		descricao: "Desenvolvimento de jogos com Unity.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "unreal_engine_1738855363",
		titulo: "Unreal Engine for Beginners",
		instituicao: "Epic Games",
		link: "https://www.unrealengine.com/en-US/learn",
		link_afiliado: null,
		categoria: "Hard Skill",
		tags: [
			"Unreal",
			"Games",
			"3D"
		],
		descricao: "Desenvolvimento com Unreal Engine 5.",
		certificado_gratuito: true,
		imagem: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "negotiation_skills_1738855364",
		titulo: "Negotiation and Conflict Resolution",
		instituicao: "University of Michigan (Coursera)",
		link: "https://www.coursera.org/learn/negotiation-skills",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"Negociação",
			"Conflitos",
			"Soft Skill"
		],
		descricao: "Habilidades de negociação e resolução de conflitos.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "critical_thinking_1738855365",
		titulo: "Critical Thinking and Problem Solving",
		instituicao: "LinkedIn Learning",
		link: "https://www.linkedin.com/learning/critical-thinking-for-better-judgment",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"Pensamento Crítico",
			"Solução de Problemas",
			"Raciocínio"
		],
		descricao: "Desenvolvimento de pensamento crítico e resolução de problemas.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "creativity_innovation_1738855366",
		titulo: "Creativity and Innovation",
		instituicao: "Stanford University (Coursera)",
		link: "https://www.coursera.org/learn/creativity-innovation",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"Criatividade",
			"Inovação",
			"Design Thinking"
		],
		descricao: "Desenvolva criatividade e pensamento inovador.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "remote_work_1738855367",
		titulo: "Remote Work and Digital Collaboration",
		instituicao: "LinkedIn Learning",
		link: "https://www.linkedin.com/learning/remote-work-foundations",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"Trabalho Remoto",
			"Colaboração",
			"Produtividade"
		],
		descricao: "Trabalho remoto eficiente e colaboração digital.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "networking_professional_1738855368",
		titulo: "Professional Networking",
		instituicao: "Dale Carnegie",
		link: "https://www.dalecarnegie.com/en/courses/professional-networking",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"Networking",
			"Relacionamentos",
			"Carreira"
		],
		descricao: "Construa uma rede profissional sólida.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	},
	{
		id: "personal_branding_1738855369",
		titulo: "Personal Branding",
		instituicao: "LinkedIn Learning",
		link: "https://www.linkedin.com/learning/building-your-personal-brand",
		link_afiliado: null,
		categoria: "Soft Skill",
		tags: [
			"Marca Pessoal",
			"LinkedIn",
			"Carreira"
		],
		descricao: "Construa sua marca pessoal e destaque-se no mercado.",
		certificado_gratuito: false,
		imagem: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop",
		adicionado_em: "2026-02-06T15:25:00Z"
	}
];
const coursesData = {
	ultima_atualizacao: ultima_atualizacao,
	total_cursos: total_cursos,
	cursos: cursos
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://edubot-pro.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { cursos, ultima_atualizacao, total_cursos } = coursesData;
  let displayCourses = [...cursos];
  let aiSearchTerm = Astro2.url.searchParams.get("ai_search");
  let aiError = null;
  if (aiSearchTerm) {
    try {
      const apiKey = "AIzaSyAdfRb17TNTFu_htPvnZlw1OG8TkfwN26w";
      if (apiKey) {
        const ai = new GoogleGenAI({ apiKey });
        const prompt = `
        O usuário buscou por um curso relacionado a: "${aiSearchTerm}".
        Você é um curador educacional especialista (EduBot Pro).
        Sua missão é encontrar 1 a 3 cursos EXCELENTES, GRATUITOS e COM CERTIFICADO sobre este tema.

        REGRAS CRÍTICAS:
        1. Os cursos DEVEM ser 100% gratuitos para acessar e estudar.
        2. O \`link\` NÃO DEVE ser apenas a página inicial. DEVE ser o link direto para a página do curso específico.
        3. A \`imagem\` DEVE ser uma URL do Unsplash.
        4. A \`categoria\` DEVE ser exatamente "Hard Skill" ou "Soft Skill".
        5. VOCÊ DEVE RECOMENDAR UM LIVRO DA AMAZON RELACIONADO. O link deve ser de busca da Amazon para facilitar a conversão de afiliados.
        
        Gere a resposta no seguinte formato JSON estrito:
        [
          {
            "id": "gerado_agora_${Date.now()}",
            "titulo": "Nome do Curso",
            "instituicao": "Instituição",
            "link": "https://url-especifica",
            "categoria": "Hard Skill",
            "tags": ["Tag1"],
            "descricao": "Pequena descrição...",
            "certificado_gratuito": true,
            "imagem": "https://images.unsplash.com/photo-exemplo?w=800&h=400&fit=crop",
            "livro_recomendado": {
               "titulo": "Nome do Melhor Livro sobre o Assunto",
               "link_amazon": "https://www.amazon.com.br/s?k=nome+do+livro&tag=SEU_TRACKING_ID"
            }
          }
        ]
      `;
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: prompt,
          config: {
            temperature: 0.3,
            responseMimeType: "application/json"
          }
        });
        const generatedCourses = JSON.parse(response.text);
        displayCourses = [...generatedCourses, ...displayCourses];
      }
    } catch (err) {
      console.error("Erro na busca por IA:", err);
      aiError = "Não foi possível gerar cursos com IA no momento. Tente novamente.";
    }
  }
  const hardSkillsCount = displayCourses.filter((c) => c.categoria === "Hard Skill").length;
  const softSkillsCount = displayCourses.filter((c) => c.categoria === "Soft Skill").length;
  const allTags = displayCourses.flatMap((c) => c.tags);
  const uniqueCategories = [...new Set(allTags)].sort().slice(0, 10);
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", `
  // Estado global de filtros
  let allCourses = displayCourses;
  let currentFilter = 'all';
  let currentSearch = document.getElementById('searchInput')?.value || '';
  let currentCategoryFilter = null;
  
  function applyFilters() {
    const filtered = allCourses.filter(curso => {
      // 1. Filtro de categoria (Hard/Soft/All)
      const categoryMatch = currentFilter === 'all' ||
        (currentFilter === 'hard' && curso.categoria === 'Hard Skill') ||
        (currentFilter === 'soft' && curso.categoria === 'Soft Skill');
      
      if (!categoryMatch) return false;
      
      // 2. Filtro por tag de categoria específica
      if (currentCategoryFilter) {
        if (!curso.tags.includes(currentCategoryFilter)) return false;
      }
      
      // 3. Filtro de busca textual
      if (currentSearch) {
        const searchable = [
          curso.titulo,
          curso.instituicao,
          curso.descricao,
          ...curso.tags
        ].join(' ').toLowerCase();
        
        if (!searchable.includes(currentSearch.toLowerCase())) return false;
      }
      
      return true;
    });
    
    updateDisplay(filtered);
  }
  
  function updateDisplay(filtered) {
    const grid = document.getElementById('coursesGrid');
    const emptyState = document.getElementById('emptyState');
    const counter = document.getElementById('courseCount');
    
    if (filtered.length === 0) {
      grid.classList.add('hidden');
      emptyState.classList.remove('hidden');
      counter.textContent = 'Nenhum curso encontrado';
    } else {
      grid.classList.remove('hidden');
      emptyState.classList.add('hidden');
      counter.textContent = \`\${filtered.length} de \${allCourses.length} cursos\`;
      
      // Show/hide cards
      const allCards = grid.querySelectorAll('article');
      allCards.forEach((card) => {
        const id = card.dataset.id;
        const isVisible = filtered.some(c => c.id === id);
        card.style.display = isVisible ? 'block' : 'none';
      });
    }
  }
  
  function resetFilters() {
    currentFilter = 'all';
    currentSearch = '';
    currentCategoryFilter = null;
    
    // Reset UI
    document.getElementById('searchInput').value = '';
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-filter="all"]').classList.add('active');
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    
    applyFilters();
  }
  
  // Event Listeners
  window.addEventListener('DOMContentLoaded', () => {
    applyFilters();
    
    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim();
      applyFilters();
    });
    
    // Primary filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget;
        const filter = target.dataset.filter;
        
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        target.classList.add('active');
        
        currentFilter = filter;
        applyFilters();
      });
    });
    
    // Category filter buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget;
        const category = target.dataset.categoryFilter;
        
        // Toggle category filter
        if (currentCategoryFilter === category) {
          currentCategoryFilter = null;
          target.classList.remove('active', 'bg-primary', 'text-white', 'border-primary');
          target.classList.add('bg-slate-100', 'text-slate-700');
        } else {
          // Remove active from all
          document.querySelectorAll('.category-btn').forEach(b => {
            b.classList.remove('active', 'bg-primary', 'text-white', 'border-primary');
            b.classList.add('bg-slate-100', 'text-slate-700');
          });
          
          // Activate clicked
          currentCategoryFilter = category;
          target.classList.add('active', 'bg-primary', 'text-white', 'border-primary');
          target.classList.remove('bg-slate-100', 'text-slate-700');
        }
        
        applyFilters();
      });
    });
    
    // Reset button
    const resetBtn = document.getElementById('resetFilters');
    if (resetBtn) {
      resetBtn.addEventListener('click', resetFilters);
    }

    // AI Search Trigger
    const aiSearchBtn = document.getElementById('aiSearchButton');
    if (aiSearchBtn) {
      aiSearchBtn.addEventListener('click', () => {
        const query = document.getElementById('searchInput').value.trim();
        if (query) {
          aiSearchBtn.innerHTML = '<span class="flex items-center"><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Garimpando cursos...</span>';
          aiSearchBtn.disabled = true;
          window.location.href = \`/?ai_search=\${encodeURIComponent(query)}\`;
        }
      });
    }
  });
})();</script> `], ["", " <script>(function(){", `
  // Estado global de filtros
  let allCourses = displayCourses;
  let currentFilter = 'all';
  let currentSearch = document.getElementById('searchInput')?.value || '';
  let currentCategoryFilter = null;
  
  function applyFilters() {
    const filtered = allCourses.filter(curso => {
      // 1. Filtro de categoria (Hard/Soft/All)
      const categoryMatch = currentFilter === 'all' ||
        (currentFilter === 'hard' && curso.categoria === 'Hard Skill') ||
        (currentFilter === 'soft' && curso.categoria === 'Soft Skill');
      
      if (!categoryMatch) return false;
      
      // 2. Filtro por tag de categoria específica
      if (currentCategoryFilter) {
        if (!curso.tags.includes(currentCategoryFilter)) return false;
      }
      
      // 3. Filtro de busca textual
      if (currentSearch) {
        const searchable = [
          curso.titulo,
          curso.instituicao,
          curso.descricao,
          ...curso.tags
        ].join(' ').toLowerCase();
        
        if (!searchable.includes(currentSearch.toLowerCase())) return false;
      }
      
      return true;
    });
    
    updateDisplay(filtered);
  }
  
  function updateDisplay(filtered) {
    const grid = document.getElementById('coursesGrid');
    const emptyState = document.getElementById('emptyState');
    const counter = document.getElementById('courseCount');
    
    if (filtered.length === 0) {
      grid.classList.add('hidden');
      emptyState.classList.remove('hidden');
      counter.textContent = 'Nenhum curso encontrado';
    } else {
      grid.classList.remove('hidden');
      emptyState.classList.add('hidden');
      counter.textContent = \\\`\\\${filtered.length} de \\\${allCourses.length} cursos\\\`;
      
      // Show/hide cards
      const allCards = grid.querySelectorAll('article');
      allCards.forEach((card) => {
        const id = card.dataset.id;
        const isVisible = filtered.some(c => c.id === id);
        card.style.display = isVisible ? 'block' : 'none';
      });
    }
  }
  
  function resetFilters() {
    currentFilter = 'all';
    currentSearch = '';
    currentCategoryFilter = null;
    
    // Reset UI
    document.getElementById('searchInput').value = '';
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-filter="all"]').classList.add('active');
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    
    applyFilters();
  }
  
  // Event Listeners
  window.addEventListener('DOMContentLoaded', () => {
    applyFilters();
    
    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim();
      applyFilters();
    });
    
    // Primary filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget;
        const filter = target.dataset.filter;
        
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        target.classList.add('active');
        
        currentFilter = filter;
        applyFilters();
      });
    });
    
    // Category filter buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget;
        const category = target.dataset.categoryFilter;
        
        // Toggle category filter
        if (currentCategoryFilter === category) {
          currentCategoryFilter = null;
          target.classList.remove('active', 'bg-primary', 'text-white', 'border-primary');
          target.classList.add('bg-slate-100', 'text-slate-700');
        } else {
          // Remove active from all
          document.querySelectorAll('.category-btn').forEach(b => {
            b.classList.remove('active', 'bg-primary', 'text-white', 'border-primary');
            b.classList.add('bg-slate-100', 'text-slate-700');
          });
          
          // Activate clicked
          currentCategoryFilter = category;
          target.classList.add('active', 'bg-primary', 'text-white', 'border-primary');
          target.classList.remove('bg-slate-100', 'text-slate-700');
        }
        
        applyFilters();
      });
    });
    
    // Reset button
    const resetBtn = document.getElementById('resetFilters');
    if (resetBtn) {
      resetBtn.addEventListener('click', resetFilters);
    }

    // AI Search Trigger
    const aiSearchBtn = document.getElementById('aiSearchButton');
    if (aiSearchBtn) {
      aiSearchBtn.addEventListener('click', () => {
        const query = document.getElementById('searchInput').value.trim();
        if (query) {
          aiSearchBtn.innerHTML = '<span class="flex items-center"><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Garimpando cursos...</span>';
          aiSearchBtn.disabled = true;
          window.location.href = \\\`/?ai_search=\\\${encodeURIComponent(query)}\\\`;
        }
      });
    }
  });
})();</script> `])), renderComponent($$result, "Layout", $$Layout, { "title": "Cursos Gratuitos com Certificação", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="text-center mb-12" data-astro-cid-j7pv25f6> <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4" data-astro-cid-j7pv25f6>
Cursos Profissionais <span class="text-primary" data-astro-cid-j7pv25f6>100% Gratuitos</span> </h1> <p class="text-lg text-slate-600 max-w-2xl mx-auto mb-8" data-astro-cid-j7pv25f6>
Curadoria inteligente via IA em <strong data-astro-cid-j7pv25f6>19 áreas de mercado</strong>. 
      Validação rigorosa. Qualidade sobre quantidade.
</p> <!-- Stats --> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12" data-astro-cid-j7pv25f6> <div class="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow transition-shadow" data-astro-cid-j7pv25f6> <div class="text-3xl font-bold text-primary mb-1" data-astro-cid-j7pv25f6>${total_cursos}</div> <div class="text-sm text-slate-600 font-medium" data-astro-cid-j7pv25f6>Cursos Validados</div> </div> <div class="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow transition-shadow" data-astro-cid-j7pv25f6> <div class="text-3xl font-bold text-primary mb-1" data-astro-cid-j7pv25f6>${hardSkillsCount}</div> <div class="text-sm text-slate-600 font-medium" data-astro-cid-j7pv25f6>Hard Skills</div> </div> <div class="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow transition-shadow" data-astro-cid-j7pv25f6> <div class="text-3xl font-bold text-success mb-1" data-astro-cid-j7pv25f6>${softSkillsCount}</div> <div class="text-sm text-slate-600 font-medium" data-astro-cid-j7pv25f6>Soft Skills</div> </div> </div> </div>  ${renderComponent($$result2, "AdBanner", $$AdBanner, { "enabled": true, "position": "top", "data-astro-cid-j7pv25f6": true })}  <div class="bg-white border border-slate-200 rounded-lg p-6 mb-8 shadow-sm" data-astro-cid-j7pv25f6> <div class="flex flex-col gap-4" data-astro-cid-j7pv25f6> <!-- Search Input --> <div class="flex-1" data-astro-cid-j7pv25f6> <div class="relative" data-astro-cid-j7pv25f6> <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-astro-cid-j7pv25f6> <svg class="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-j7pv25f6></path> </svg> </div> <input type="text" id="searchInput"${addAttribute(aiSearchTerm || "", "value")} placeholder="Buscar por curso, instituição ou tag..." class="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm bg-slate-50 focus:bg-white transition-colors" data-astro-cid-j7pv25f6> </div> </div> <!-- Primary Filters --> <div class="flex flex-wrap gap-2" data-astro-cid-j7pv25f6> <button data-filter="all" class="filter-btn active px-4 py-2 text-sm font-medium rounded-lg transition-all border" data-astro-cid-j7pv25f6>
📚 Todos
</button> <button data-filter="hard" class="filter-btn px-4 py-2 text-sm font-medium rounded-lg transition-all border" data-astro-cid-j7pv25f6>
💻 Hard Skills
</button> <button data-filter="soft" class="filter-btn px-4 py-2 text-sm font-medium rounded-lg transition-all border" data-astro-cid-j7pv25f6>
🧠 Soft Skills
</button> <div class="h-8 w-px bg-slate-300 mx-2" data-astro-cid-j7pv25f6></div> <!-- Category Tags --> ${uniqueCategories.slice(0, 5).map((category) => renderTemplate`<button${addAttribute(category, "data-category-filter")} class="category-btn px-3 py-2 text-xs font-mono bg-slate-100 text-slate-700 rounded-md hover:bg-slate-200 transition-colors border border-transparent hover:border-slate-300" data-astro-cid-j7pv25f6>
#${category} </button>`)} </div> <!-- Results Counter --> <div class="text-sm text-slate-600 font-medium" data-astro-cid-j7pv25f6> <span id="courseCount" data-astro-cid-j7pv25f6>Carregando...</span> </div> </div> </div>  <div id="coursesGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-j7pv25f6> ${displayCourses.map((curso) => renderTemplate`${renderComponent($$result2, "CourseCard", $$CourseCard, { "curso": curso, "data-astro-cid-j7pv25f6": true })}`)} </div>  <div id="emptyState"${addAttribute(`text-center py-16 ${aiSearchTerm && displayCourses.length === cursos.length ? "block" : "hidden"}`, "class")} data-astro-cid-j7pv25f6> <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 text-slate-400 mb-6" data-astro-cid-j7pv25f6> <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-j7pv25f6></path> </svg> </div> <h3 class="text-xl font-bold text-slate-800 mb-2" data-astro-cid-j7pv25f6>Nenhum curso encontrado na base principal</h3> <p class="text-slate-600 mb-8 max-w-md mx-auto" data-astro-cid-j7pv25f6> ${aiError ? aiError : "Ainda não catalogamos Cursos para essa busca exata. Deseja que a Inteligência Artificial procure na internet e faça uma curadoria em tempo real para você?"} </p> <div class="flex items-center justify-center gap-4" data-astro-cid-j7pv25f6> <button id="resetFilters" class="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors" data-astro-cid-j7pv25f6>
Limpar Filtros
</button> <button id="aiSearchButton" class="px-5 py-2.5 bg-primary hover:bg-primary-hover shadow-lg shadow-primary/20 text-white text-sm font-semibold rounded-lg transition-all flex items-center hover:-translate-y-0.5" data-astro-cid-j7pv25f6> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-j7pv25f6></path> </svg>
Buscar com Inteligência Artificial
</button> </div> </div>  ${renderComponent($$result2, "AdBanner", $$AdBanner, { "enabled": true, "position": "bottom", "data-astro-cid-j7pv25f6": true })}  <div class="mt-12 text-center text-sm text-slate-500" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Última atualização: ${new Date(ultima_atualizacao).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  })}</p> </div> ` }), defineScriptVars({ displayCourses }));
}, "C:/Users/Meu Computador/Documents/Programação/Agentes/edubot-pro-v2/src/pages/index.astro", void 0);
const $$file = "C:/Users/Meu Computador/Documents/Programação/Agentes/edubot-pro-v2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
