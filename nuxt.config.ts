/**
 * @file Nuxt config
 * @see {@link https://nuxt.com/docs/api/configuration/nuxt-config}
 */

import { META } from './composables/constants'

export default defineNuxtConfig({
  app: {
    head: {
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
      title: META.appName,
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
    },
  },

  compatibilityDate: '2024-11-26',

  components: {
    dirs: ['./components/home'],
  },

  /**
   * @see {@link https://content.nuxt.com/get-started/configuration}
   */
  content: {
    highlight: {
      theme: {
        dark: 'vitesse-dark',
        default: 'vitesse-light',
      },
    },
  },

  css: ['@unocss/reset/tailwind.css', '~/styles/vars.css', '~/styles/index.css'],

  devtools: {
    enabled: true,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  experimental: {
    // should be disabled when `ssr: false`
    payloadExtraction: false,
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
    '@nuxt/image',
  ],

  pwa: {
    base: '/',
    injectRegister: 'auto',
    manifest: {
      background_color: '#ffffff',
      description: META.appDescription,
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
      id: 'com.ntnyq.website',
      name: META.appName,
      orientation: 'landscape-primary',
      protocol_handlers: [],
      short_name: META.appName,
      theme_color: '#000000',
    },
    registerType: 'autoUpdate',
    scope: '/',
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

  // Disable SSR when building
  ssr: false,
})
