import { defineNuxtPlugin } from '#app'
import gsap from 'gsap'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      gsap
    }
  }
})