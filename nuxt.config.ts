// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
export default defineNuxtConfig({
    alias: {
        '@': resolve(__dirname, '/'),
        pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"

    },
    css: ['~/assets/main.scss'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },

    ssr: false,



    modules: [
        'nuxt-windicss',
        '@nuxt/content',
        '@pinia/nuxt'
    ],
    runtimeConfig: {
        apiKey: process.env.NUXT_API_KEY,
        apiBaseUrl: process.env.NUXT_API_BASE_URL,
        public: {
            imageBaseUrl: process.env.NUXT_PUBLIC_IMAGE_BASE_URL
        }
    }
})
