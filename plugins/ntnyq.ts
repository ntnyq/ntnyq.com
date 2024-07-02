/**
 * @file Plugin nuxt
 */

export default defineNuxtPlugin({
  name: 'ntnyq',
  hooks: {
    'app:mounted': () => {
      if (!import.meta.env.DEV) return
      logger.success('App mounted')
    },
  },
})
