import { defineConfig } from 'astro/config';
import svgo from 'vite-plugin-svgo'


export default defineConfig({
    build:{
        format: 'directory'
    },
    compressHTML:true,
    vite: {
        plugins: [svgo()]
    },
    site: 'https://pipepile.com.ua',
});
