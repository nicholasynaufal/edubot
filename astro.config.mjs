import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
    site: 'https://edubot-murex.vercel.app',
    integrations: [tailwind(), react()],
    output: 'server',
    adapter: vercel({
        imageService: true
    }),
    compressHTML: true,
    build: {
        inlineStylesheets: 'auto',
    },
    vite: {
        build: {
            cssMinify: true,
            minify: 'terser',
        },
    },
});