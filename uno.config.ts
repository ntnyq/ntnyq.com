/**
 * @file UnoCSS config
 */

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      autoInstall: true,
      extraProperties: {
        color: 'inherit',
        // Avoid crushing of icons in crowded situations
        'min-width': '1.2em',
      },
      scale: 1.2,
    }),
    presetTypography(),
    presetAttributify(),
  ],

  safelist: [],

  shortcuts: {
    'flex-center': 'flex items-center justify-center',
  },

  transformers: [transformerDirectives(), transformerVariantGroup()],
})
