// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/sass/main.scss"],
  devServer: {
    host: "0.0.0.0",
  },
})
