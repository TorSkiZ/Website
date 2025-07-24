// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  site: {
    url: process.env.NODE_ENV === 'production' ? 'https://wiciu.pl' : 'http://localhost:3000/',
    name: 'Wiktor Wasiński',
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      titleTemplate: '%s | Wiktor Wasiński',
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      script: [
        {
          src: 'https://umami.wiciu.pl/script.js',
          async: true,
          defer: true,
          'data-website-id': '22712d5e-5c69-45f4-a633-88b3a1c195cf',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  nitro: {
    preset: 'github-pages',
  },
  modules: ['@nuxt/eslint', '@nuxtjs/seo', '@nuxt/ui', '@nuxtjs/google-fonts', '@nuxt/image'],
  css: ['~/assets/scss/global.scss'],
  googleFonts: {
    families: {
      'Funnel+Sans': true,
    },
    display: 'swap',
  },
})
