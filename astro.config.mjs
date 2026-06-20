import { defineConfig } from 'astro/config';
import svgo from 'vite-plugin-svgo'

const isProd = process.env.NODE_ENV === 'production'

console.log('isProd:', isProd, 'base:', isProd ? '/pipepile' : '/')

export default defineConfig({
    build:{
        format: 'directory'
    },
    compressHTML:true,
    vite: {
        plugins: [svgo()]
    },
    site: 'https://Alrenado.github.io',
    base: isProd ? '/pipepile' : '/',
});
