import { resolve } from "path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
      "~/assets/main.scss",
      "@mdi/font/css/materialdesignicons.min.css"      
    ],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    alias: {
        '@': resolve(__dirname, "/"),
    },
    modules: [
      'nuxt-icons',
      'nuxt-icon',
      '@nuxtjs/strapi'
    ],
    
})


