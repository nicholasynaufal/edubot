import { d as createAstro, c as createComponent, b as renderTemplate, r as renderComponent, e as renderSlot, f as renderHead, u as unescapeHTML, g as addAttribute } from './astro/server_suRLM8Uk.mjs';
import 'kleur/colors';
import { Analytics } from '@vercel/analytics/react';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

function DonationButton() {
  const [isOpen, setIsOpen] = useState(false);
  const pixKey = "63638300000110";
  const copyPix = () => {
    navigator.clipboard.writeText(pixKey);
    alert("Chave PIX copiada! Obrigado pelo apoio! ❤️");
  };
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-6 right-6 z-50", children: [
    isOpen && /* @__PURE__ */ jsx("div", { className: "absolute bottom-16 right-0 mb-2 w-72 bg-white rounded-2xl shadow-2xl border border-primary/20 p-5 transform transition-all duration-300 origin-bottom-right", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "☕" }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-800 mb-2", children: "Apoie o Projeto" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600 mb-4", children: "O EduBot Pro é gratuito e sem fins lucrativos. Se a nossa Inteligência Artificial te ajudou a encontrar o curso ideal, considere pagar um café para os desenvolvedores! 🚀" }),
      /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 p-3 rounded-lg border border-slate-200 mb-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wider", children: "Chave PIX" }),
        /* @__PURE__ */ jsx("p", { className: "font-mono text-sm text-slate-800 break-all select-all flex items-center justify-center gap-2", children: pixKey })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: copyPix,
          className: "w-full py-2.5 bg-success hover:bg-green-600 text-white font-medium rounded-lg transition-colors shadow-sm mb-2 flex items-center justify-center",
          children: [
            /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" }) }),
            "Copiar Chave PIX"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsOpen(false),
          className: "text-xs text-slate-500 hover:text-slate-800 transition-colors",
          children: "Agora não, obrigado"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-primary to-blue-500 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30",
        "aria-label": "Apoiar projeto",
        children: isOpen ? /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }) }) : /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }) })
      }
    )
  ] });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://edubot-murex.vercel.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Plataforma de curadoria inteligente de cursos profissionais 100% gratuitos com certifica\xE7\xE3o" } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate(_a || (_a = __template(['<html lang="pt-BR"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="canonical"', "><!-- Primary Meta Tags --><title>", ' | EduBot Pro</title><meta name="title"', '><meta name="description"', '><meta name="keywords" content="cursos gratuitos, certifica\xE7\xE3o gr\xE1tis, educa\xE7\xE3o online, hard skills, soft skills, curadoria"><meta name="author" content="EduBot Pro"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:site_name" content="EduBot Pro"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"><!-- Structured Data --><script type="application/ld+json">', "<\/script>", '</head> <body class="min-h-screen bg-neutral-50 text-neutral-900 font-sans antialiased"> <!-- Header --> <header class="border-b border-neutral-200 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-16"> <a href="/" class="flex items-center space-x-3 group"> <div class="w-8 h-8 bg-primary rounded flex items-center justify-center font-mono text-white text-sm font-bold">\nEP\n</div> <span class="text-xl font-bold text-neutral-900 group-hover:text-primary transition-colors">\nEduBot Pro\n</span> </a> <nav class="hidden md:flex space-x-8"> <a href="/" class="text-sm font-medium text-neutral-700 hover:text-primary transition-colors">\nCursos\n</a> <a href="/sobre" class="text-sm font-medium text-neutral-700 hover:text-primary transition-colors">\nSobre\n</a> <a href="/privacidade" class="text-sm font-medium text-neutral-700 hover:text-primary transition-colors">\nPrivacidade\n</a> </nav> </div> </div> </header> <!-- Main Content --> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> ', ' </main> <!-- Footer --> <footer class="border-t border-neutral-200 bg-white mt-24"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div> <div class="flex items-center space-x-3 mb-4"> <div class="w-8 h-8 bg-primary rounded flex items-center justify-center font-mono text-white text-sm font-bold">\nEP\n</div> <span class="text-lg font-bold text-neutral-900">EduBot Pro</span> </div> <p class="text-sm text-neutral-600">\nCuradoria inteligente de cursos profissionais gratuitos com certifica\xE7\xE3o.\n</p> </div> <div> <h3 class="text-sm font-bold text-neutral-900 mb-4">Links</h3> <ul class="space-y-2"> <li><a href="/" class="text-sm text-neutral-600 hover:text-primary transition-colors">Cursos</a></li> <li><a href="/sobre" class="text-sm text-neutral-600 hover:text-primary transition-colors">Sobre</a></li> <li><a href="/privacidade" class="text-sm text-neutral-600 hover:text-primary transition-colors">Privacidade</a></li> </ul> </div> <div> <h3 class="text-sm font-bold text-neutral-900 mb-4">Legal</h3> <p class="text-xs text-neutral-600">\n\xA9 2026 EduBot Pro. Todos os direitos reservados.<br>\nDesenvolvido com Astro + Tailwind CSS.\n</p> </div> </div> <div class="mt-8 pt-8 border-t border-neutral-200 text-center"> <p class="text-xs text-neutral-500">\nOs cursos listados s\xE3o oferecidos por institui\xE7\xF5es terceiras. EduBot Pro n\xE3o \xE9 respons\xE1vel pelo conte\xFAdo dos cursos.\n</p> </div> </div> </footer> ', " ", " </body></html>"])), addAttribute(canonicalURL, "href"), title, addAttribute(`${title} | EduBot Pro`, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "content"), addAttribute(`${title} | EduBot Pro`, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "content"), addAttribute(`${title} | EduBot Pro`, "content"), addAttribute(description, "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "EduBot Pro",
    "description": description,
    "url": canonicalURL
  })), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "DonationButton", DonationButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Meu Computador/Documents/Programa\xE7\xE3o/Agentes/edubot-pro-v2/src/components/DonationButton.jsx", "client:component-export": "default" }), renderComponent($$result, "Analytics", Analytics, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@vercel/analytics/react", "client:component-export": "Analytics" }));
}, "C:/Users/Meu Computador/Documents/Programa\xE7\xE3o/Agentes/edubot-pro-v2/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
