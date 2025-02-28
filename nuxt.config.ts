// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  site: {
    url: process.env.NODE_ENV === 'production' ? 'https://wiciu.pl' : 'http://localhost:3000/',
    name: 'Wiktor Wasiński',
  },
  app: {
    baseURL: '/',
    head: {
      title: 'Wiktor Wasiński',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
  nitro: {
    preset: 'github-pages',
  },
  modules: ['@nuxt/eslint', '@nuxtjs/seo', '@nuxt/ui', '@nuxtjs/google-fonts', '@nuxt/image'],
})
