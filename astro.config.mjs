import { defineConfig } from 'astro/config'
import unocss from 'unocss/astro'
import solidJs from '@astrojs/solid-js'

import node from '@astrojs/node'
import vercel from '@astrojs/vercel/serverless'
import netlify from '@astrojs/netlify/functions'

import { META } from './src/config'

const envAdapter = () => {
  if (process.env.OUTPUT === 'vercel') {
    return vercel({
      edgeMiddleware: true,
    })
  } else if (process.env.OUTPUT === 'netlify') {
    return netlify({
      edgeMiddleware: true,
    })
  } else {
    return node({
      mode: 'standalone',
    })
  }
}

export default defineConfig({
  site: META.origin,

  integrations: [unocss(), solidJs()],

  output: 'server',

  adapter: envAdapter(),

  vite: {
    plugins: [],
  },
})
