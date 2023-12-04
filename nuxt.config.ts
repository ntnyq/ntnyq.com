/**
 * @file nuxt config
 * @see https://nuxt.com/docs/api/configuration/nuxt-config
 */

import { META } from './constants/meta'

export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@vueuse/nuxt', '@pinia/nuxt', '@nuxtjs/color-mode'],

  components: {
    dirs: ['~/components'],
  },

  imports: {
    dirs: ['./composables', './utils'],
    injectAtEnd: true,
  },

  css: ['@unocss/reset/tailwind.css', '~/styles/default-theme.css', '~/styles/vars.css'],

  app: {
    head: {
      title: META.appName,
      viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
      bodyAttrs: {
        class: 'overflow-x-hidden',
      },
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
          sizes: 'any',
        },
      ],
      meta: [
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'description', content: META.appDescription },
        // open graph social image
        { property: 'og:title', content: META.appName },
        { property: 'og:description', content: META.appDescription },
        { property: 'og:type', content: 'website' },
        // { property: 'og:image', content: '' },
        { property: 'og:image:width', content: '3800' },
        { property: 'og:image:height', content: '1900' },
        { property: 'og:site_name', content: META.appName },
        // { property: 'twitter:site', content: '' },
        // { property: 'twitter:card', content: 'summary_large_image' },
      ],
    },
  },

  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: false,
    typedPages: true,
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },

    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },

  vue: {
    defineModel: true,
  },

  devtools: { enabled: true },

  ssr: false,
})
