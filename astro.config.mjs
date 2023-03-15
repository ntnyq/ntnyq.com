import { defineConfig } from 'astro/config'
import unocss from 'unocss/astro'
import solidJs from '@astrojs/solid-js'

import node from '@astrojs/node'
import vercel from '@astrojs/vercel/edge'
import netlify from '@astrojs/netlify/edge-functions'

import { META } from './src/config'

const envAdapter = () => {
  if (process.env.OUTPUT === 'vercel') {
    return vercel()
  } else if (process.env.OUTPUT === 'netlify') {
    return netlify()
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
