import { defineConfig, fontProviders } from 'astro/config';
import svgo from 'vite-plugin-svgo'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
    build:{
        format: 'directory'
    },
    compressHTML:true,
    vite: {
        plugins: [svgo()]
    },
    site: 'https://Alrenado.github.io',
    base: '/pipepile',
    fonts: [
        {
            provider: fontProviders.local(),
            name: 'Roboto',
            cssVariable: '--font-roboto',
            options: {
                variants: [
                    { weight: '300', style: 'normal', src: ['./src/assets/fonts/Roboto-Light.woff2', './src/assets/fonts/Roboto-Light.woff'] },
                    { weight: '400', style: 'normal', src: ['./src/assets/fonts/Roboto-Regular.woff2', './src/assets/fonts/Roboto-Regular.woff'] },
                    { weight: '500', style: 'normal', src: ['./src/assets/fonts/Roboto-Medium.woff2', './src/assets/fonts/Roboto-Medium.woff'] },
                    { weight: '700', style: 'normal', src: ['./src/assets/fonts/Roboto-Bold.woff2', './src/assets/fonts/Roboto-Bold.woff'] },
                ]
            }
        },
    ],
});
