/**
 * @file Nuxt config
 * @see {@link https://nuxt.com/docs/api/configuration/nuxt-config}
 */

import { META } from './composables/constants'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/content',
    '@nuxt/eslint',
    '@vite-pwa/nuxt',
    '@nuxt/image',
  ],

  css: ['@unocss/reset/tailwind.css', '~/styles/vars.css', '~/styles/index.css'],

  imports: {
    dirs: ['./composables', './composables/state', './utils'],
  },

  components: {
    dirs: ['./components/home'],
  },

  app: {
    head: {
      title: META.appName,
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'keywords', content: META.appName },
        { name: 'description', content: META.appDescription },
        { name: 'twitter:title', content: META.appName },
        { name: 'twitter:domain', content: META.appUrl },
        { name: 'twitter:creator', content: '@ntnyq' },
        { name: 'twitter:url', content: META.appUrl },
        { name: 'twitter:image', content: META.appImage },
        { name: 'twitter:description', content: META.appDescription },
        { property: 'og:title', content: META.appName },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: META.appUrl },
        { property: 'og:image', content: META.appImage },
        { property: 'og:description', content: META.appDescription },
      ],
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
    },
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: META.appName,
      short_name: META.appName,
      description: META.appDescription,
      background_color: '#ffffff',
      theme_color: '#000000',
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
    },
    workbox: {
      maximumFileSizeToCacheInBytes: 1024 * 1024 * 5,
      globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,svg,ico,json,txt,ttf,woff,woff2}'],
      runtimeCaching: [],
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    // should be disabled when `ssr: false`
    payloadExtraction: false,
  },

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

  devtools: {
    enabled: true,
  },

  // Disable SSR when building
  ssr: false,

  plugins: [],

  vite: {},

  vue: {},

  compatibilityDate: '2024-11-26',
})
