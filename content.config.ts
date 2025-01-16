/**
 * @file @nuxt/content config
 * @see {@link https://content.nuxt.com}
 */

import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      source: '**/*.md',
      type: 'page',
    }),
  },
})
