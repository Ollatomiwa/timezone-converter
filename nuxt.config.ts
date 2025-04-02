// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-01-01',  // Updated to valid compatibility date
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/image', '@nuxtjs/google-fonts', '@nuxt/icon'],
  vite: {
    optimizeDeps: {
      include: ['date-fns-tz']
    }
  },
  googleFonts: {
    families: {
      Roboto: [300, 400, 500, 700, 900],
    },
  },
})