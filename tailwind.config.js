const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans], // Set Roboto as the default sans-serif font
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};