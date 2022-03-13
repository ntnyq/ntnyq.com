import '@unocss/reset/tailwind.css'
import 'uno.css'
import '@/styles/main.css'
import '@/styles/prose.css'
import '@/styles/markdown.css'
import pages from '~pages'
import { ViteSSG } from 'vite-ssg'
import NPprogress from 'nprogress'
import type { RouterScrollBehavior } from 'vue-router'
import App from './App.vue'

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
  { routes, scrollBehavior },
  ({ router, isClient }) => {
    if (isClient) {
      router.beforeEach(() => {
        NPprogress.start()
      })

      router.afterEach(() => {
        NPprogress.done()
      })
    }
  }
)
