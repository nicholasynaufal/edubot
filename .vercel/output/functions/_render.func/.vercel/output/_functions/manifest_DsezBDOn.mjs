import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CarjdFIU.mjs';
import 'es-module-lexer';
import { h as decodeKey } from './chunks/astro/server_suRLM8Uk.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Meu%20Computador/Documents/Programa%C3%A7%C3%A3o/Agentes/edubot-pro-v2/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"api/buscar","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/buscar","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/buscar\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"buscar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/buscar.ts","pathname":"/api/buscar","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"privacidade/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacidade","isIndex":false,"type":"page","pattern":"^\\/privacidade\\/?$","segments":[[{"content":"privacidade","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacidade.astro","pathname":"/privacidade","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"sobre/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sobre","isIndex":false,"type":"page","pattern":"^\\/sobre\\/?$","segments":[[{"content":"sobre","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sobre.astro","pathname":"/sobre","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.uubk7CY_.css"},{"type":"inline","content":".ad-banner-container[data-astro-cid-33f3bo6r]{transition:opacity .3s ease}.ad-banner-container[data-astro-cid-33f3bo6r]:hover{opacity:.9}.filter-btn[data-astro-cid-j7pv25f6]{background-color:#fff;color:#334155;border-color:#cbd5e1}.filter-btn[data-astro-cid-j7pv25f6]:hover{background-color:#f8fafc;border-color:#06f}.filter-btn[data-astro-cid-j7pv25f6].active{background-color:#06f;color:#fff;border-color:#06f;box-shadow:0 2px 4px #06f3}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://edubot-murex.vercel.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Meu Computador/Documents/Programação/Agentes/edubot-pro-v2/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Meu Computador/Documents/Programação/Agentes/edubot-pro-v2/src/pages/privacidade.astro",{"propagation":"none","containsHead":true}],["C:/Users/Meu Computador/Documents/Programação/Agentes/edubot-pro-v2/src/pages/sobre.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/api/buscar@_@ts":"pages/api/buscar.astro.mjs","\u0000@astro-page:src/pages/privacidade@_@astro":"pages/privacidade.astro.mjs","\u0000@astro-page:src/pages/sobre@_@astro":"pages/sobre.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/Meu Computador/Documents/Programação/Agentes/edubot-pro-v2/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Users/Meu Computador/Documents/Programação/Agentes/edubot-pro-v2/node_modules/@astrojs/vercel/dist/image/build-service.js":"chunks/build-service_B4kYU1gG.mjs","\u0000@astrojs-manifest":"manifest_DsezBDOn.mjs","C:/Users/Meu Computador/Documents/Programação/Agentes/edubot-pro-v2/src/components/DonationButton.jsx":"_astro/DonationButton.CcuVqTqt.js","@vercel/analytics/react":"_astro/react.ChZ1phPn.js","C:/Users/Meu Computador/Documents/Programação/Agentes/edubot-pro-v2/src/components/CourseInteractions.jsx":"_astro/CourseInteractions.C5FqePby.js","@astrojs/react/client.js":"_astro/client.DM9yTgPk.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.uubk7CY_.css","/favicon.svg","/_astro/client.DM9yTgPk.js","/_astro/CourseInteractions.C5FqePby.js","/_astro/DonationButton.CcuVqTqt.js","/_astro/index.HRZChfWR.js","/_astro/jsx-runtime.DKusaIV_.js","/_astro/react.ChZ1phPn.js","/api/buscar","/privacidade/index.html","/sobre/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"MjD5edQO9GzsBAOUcMwfvAgwtyFX0NBYnQJZUYqnYnY=","experimentalEnvGetSecretEnabled":false});

export { manifest };
