import pages from '~pages'
import { ViteSSG } from 'vite-ssg'
import type { RouterScrollBehavior } from 'vue-router'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import '@/styles/main.css'
import '@/styles/prose.css'
import '@/styles/markdown.css'

const routes = pages.map(route => ({
  ...route,
  alias: route.path.endsWith(`/`)
    ? `${route.path}index.html`
    : `${route.path}.html`,
}))
const scrollBehavior: RouterScrollBehavior = (_, __, savedPosition) =>
  savedPosition || { top: 0 }

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior, base: import.meta.env.BASE_URL },
  ctx => {
    Object.values(import.meta.globEager(`./modules/*.ts`)).forEach(i =>
      i.install?.(ctx),
    )
  },
)
