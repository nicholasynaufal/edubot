import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_0rzh5FPb.mjs';
import { manifest } from './manifest_DdC0Pda6.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/buscar.astro.mjs');
const _page2 = () => import('./pages/privacidade.astro.mjs');
const _page3 = () => import('./pages/sobre.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/buscar.ts", _page1],
    ["src/pages/privacidade.astro", _page2],
    ["src/pages/sobre.astro", _page3],
    ["src/pages/index.astro", _page4]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c66f2024-ea55-4dd5-824e-526a4e6ad017",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
