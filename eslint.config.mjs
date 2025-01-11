// @ts-check

import { defineESLintConfig } from '@ntnyq/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

const configs = await defineESLintConfig({
  svgo: true,
})

export default nuxt(configs)
