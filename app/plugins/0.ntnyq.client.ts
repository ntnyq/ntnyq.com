/**
 * @file Plugin nuxt
 */

const HOOK_APP_MOUNTED = 'app:mounted'

export default defineNuxtPlugin({
  name: 'ntnyq',
  hooks: {
    [HOOK_APP_MOUNTED]() {
      if (!import.meta.env.DEV) {
        return
      }
      logger.success('App mounted')
    },
  },
})
