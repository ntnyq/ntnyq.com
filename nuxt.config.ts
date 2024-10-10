/**
 * @file Nuxt config
 * @see {@link https://nuxt.com/docs/api/configuration/nuxt-config}
 */

export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@nuxt/content', '@vite-pwa/nuxt', '@nuxt/image'],

  css: ['@unocss/reset/tailwind.css', '~/styles/vars.css', '~/styles/index.css'],

  imports: {
    dirs: ['./composables', './composables/state', './utils'],
  },

  components: {
    dirs: ['./components/home'],
  },

  app: {
    head: {
      title: 'ntnyq',
      htmlAttrs: {
        lang: 'en',
      },
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

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      orientation: 'landscape-primary',
      icons: [
        {
          src: '/icons/icon-196x196.png',
          sizes: '196x196',
          type: 'image/png',
        },
        {
          src: '/icons/icon-196x196.png',
          sizes: '196x196',
          type: 'image/png',
        },
        {
          src: '/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
      theme_color: '#000000',
    },
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
      runtimeCaching: [],
    },
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

  compatibilityDate: '2024-09-10',
})
