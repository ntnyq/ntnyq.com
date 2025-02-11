/**
 * @file Nuxt config
 * @see {@link https://nuxt.com/docs/api/configuration/nuxt-config}
 */

import { META } from './composables/constants'

export default defineNuxtConfig({
  compatibilityDate: '2025-02-06',

  css: ['@unocss/reset/tailwind.css', '~/styles/vars.css', '~/styles/index.css'],

  app: {
    head: {
      title: META.appName,
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { content: META.appName, name: 'keywords' },
        { content: META.appDescription, name: 'description' },
        { content: META.appName, name: 'twitter:title' },
        { content: META.appUrl, name: 'twitter:domain' },
        { content: '@ntnyq', name: 'twitter:creator' },
        { content: META.appUrl, name: 'twitter:url' },
        { content: META.appImage, name: 'twitter:image' },
        { content: META.appDescription, name: 'twitter:description' },
        { content: META.appName, property: 'og:title' },
        { content: 'website', property: 'og:type' },
        { content: META.appUrl, property: 'og:url' },
        { content: META.appImage, property: 'og:image' },
        { content: META.appDescription, property: 'og:description' },
      ],
    },
  },

  components: {
    dirs: ['./components/home'],
  },

  nitro: {
    preset: 'static',
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    routeRules: {
      '/': {
        prerender: true,
      },
      '/*': {
        prerender: false,
      },
      '/200.html': {
        prerender: true,
      },
      '/404.html': {
        prerender: true,
      },
    },
  },

  // Disable SSR when building
  ssr: false,

  /**
   * @see {@link https://content.nuxt.com/get-started/configuration}
   */
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            dark: 'vitesse-dark',
            default: 'vitesse-light',
          },
        },
      },
    },
  },

  devtools: {
    enabled: false,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  experimental: {
    appManifest: false,
    clientNodeCompat: true,
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  future: {
    compatibilityVersion: 4,
  },

  imports: {
    dirs: ['./composables', './composables/state', './utils'],
  },

  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/content',
    '@nuxt/eslint',
    '@vite-pwa/nuxt',
    '@nuxt-dev/medium-zoom',
    /**
     * @see {@link https://motion.unovue.com/getting-started/introduction}
     */
    'motion-v/nuxt',
  ],

  pwa: {
    base: '/',
    injectRegister: 'auto',
    registerType: 'autoUpdate',
    registerWebManifestInRouteRules: true,
    scope: '/',
    manifest: {
      background_color: '#ffffff',
      description: META.appDescription,
      id: 'com.ntnyq.website',
      name: META.appName,
      orientation: 'landscape-primary',
      protocol_handlers: [],
      short_name: META.appName,
      theme_color: '#000000',
      icons: [
        {
          sizes: '196x196',
          src: '/icons/icon-196x196.png',
          type: 'image/png',
        },
        {
          sizes: '196x196',
          src: '/icons/icon-196x196.png',
          type: 'image/png',
        },
        {
          sizes: '512x512',
          src: '/icons/icon-512x512.png',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,svg,ico,json,txt,ttf,woff,woff2}'],
      maximumFileSizeToCacheInBytes: 1024 * 1024 * 5,
      // https://github.com/vite-pwa/nuxt/issues/53
      navigateFallback: undefined,
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          urlPattern: '/',
        },
      ],
    },
  },
})
