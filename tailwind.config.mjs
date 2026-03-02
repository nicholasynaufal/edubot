/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Paleta "Laboratório Minimalista" - Slate Based
                primary: {
                    DEFAULT: '#0066FF',
                    hover: '#0052CC',
                    light: '#3385FF',
                },
                success: {
                    DEFAULT: '#10B981',
                    light: '#34D399',
                },
                accent: {
                    DEFAULT: '#00B8D4',
                    hover: '#0097A7',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            spacing: {
                18: '4.5rem',
                22: '5.5rem',
            },
            borderRadius: {
                sm: '4px',
                DEFAULT: '6px',
                lg: '12px',
            },
            boxShadow: {
                sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                DEFAULT: '0 2px 6px 0 rgba(0, 0, 0, 0.06)',
                md: '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
                lg: '0 8px 20px 0 rgba(0, 0, 0, 0.10)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
