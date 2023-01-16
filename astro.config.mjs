import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import image from '@astrojs/image'

export default defineConfig({
  site: `https://ntnyq.com`,

  server: {
    open: true,
    host: true,
  },

  integrations: [
    sitemap(),
    mdx(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],

  markdown: {
    shikiConfig: {
      theme: {
        light: `vitesse-light`,
        dark: `vitesse-dark`,
      },
    },
  },
})
