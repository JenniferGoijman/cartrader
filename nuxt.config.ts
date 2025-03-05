// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-02-19",
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  imports: {
    autoImport: true
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxt/image",
    "@vueuse/nuxt",
  ],
});