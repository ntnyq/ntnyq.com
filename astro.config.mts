import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import image from '@astrojs/image'
// import pwa from '@vite-pwa/astro'

export default defineConfig({
  site: `https://ntnyq.com`,

  server: {
    host: true,
  },

  integrations: [
    sitemap(),
    mdx(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    // pwa({
    //   registerType: 'autoUpdate',
    //   includeAssets: [],
    //   manifest: {
    //     name: `ntnyq`,
    //     short_name: `ntnyq`,
    //     theme_color: `#ffffff`,
    //     icons: [
    //       {
    //         src: `/static/icons/icon-48x48.png`,
    //         sizes: `48x48`,
    //         type: `image/png`,
    //       },
    //       {
    //         src: `/static/icons/icon-196x196.png`,
    //         sizes: `196x196`,
    //         type: `image/png`,
    //       },
    //       {
    //         src: `/static/icons/icon-512x512.png`,
    //         sizes: `512x512`,
    //         type: `image/png`,
    //       },
    //       {
    //         src: `/static/icons/icon-512x512.png`,
    //         sizes: `512x512`,
    //         type: `image/png`,
    //         purpose: `any`,
    //       },
    //     ],
    //   },
    // }),
  ],

  markdown: {
    shikiConfig: {
      theme: 'vitesse-light',
    },
  },
})
