import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import pages from '~pages'
import type { UserModule } from '@/types'

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

export const createApp = ViteSSG(App,
  {
    routes,
    base: import.meta.env.BASE_URL,
  }, ctx => {
    Object.values(
      import.meta.glob<{ install: UserModule }>(`./modules/*.ts`, { eager: true }))
      .forEach(i => i.install?.(ctx))
  })
