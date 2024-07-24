/**
 * @file Nuxt config
 * @see {@link https://nuxt.com/docs/api/configuration/nuxt-config}
 */

export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@nuxt/content'],

  css: ['@unocss/reset/tailwind.css', '~/styles/vars.css', '~/styles/index.css'],

  imports: {
    dirs: [
      './composables',
      //
      './composables/state',
      './utils',
    ],
  },

  components: {
    dirs: ['./components/home'],
  },

  app: {
    head: {
      title: 'ntnyq',
      meta: [
        { name: 'keywords', content: 'ntnyq' },
        { name: 'description', content: 'ntnyq' },
      ],
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
    },
  },

  devtools: {
    enabled: true,
  },

  // Disable SSR when building
  ssr: false,

  plugins: [],

  vite: {},

  vue: {},

  /**
   * @see {@link https://content.nuxt.com/get-started/configuration}
   */
  content: {
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
  },

  compatibilityDate: '2024-07-25',
})