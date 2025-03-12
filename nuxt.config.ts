// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-01-01',  // Updated to valid compatibility date
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],
  vite: {
    optimizeDeps: {
      include: ['date-fns-tz']
    }
  }
})
