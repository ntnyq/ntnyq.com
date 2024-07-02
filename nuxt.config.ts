/**
 * @file Nuxt config
 * @see {@link https://nuxt.com/docs/api/configuration/nuxt-config}
 */

export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@unocss/nuxt', 'nuxt-shiki'],

  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/font.css',
    '~/styles/vars.css',
    '~/styles/index.css',
  ],

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

  shiki: {
    bundledLangs: ['javascript', 'typescript', 'json', 'html', 'css', 'markdown'],
    bundledThemes: ['vitesse-light', 'vitesse-dark'],
  },
})
