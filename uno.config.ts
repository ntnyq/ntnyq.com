/**
 * @file UnoCSS config
 */

import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  transformers: [transformerDirectives(), transformerVariantGroup()],

  presets: [
    presetUno(),
    presetIcons({
      autoInstall: true,
      scale: 1.2,
      extraProperties: {
        color: 'inherit',
        // Avoid crushing of icons in crowded situations
        'min-width': '1.2em',
      },
    }),
    presetTypography(),
  ],

  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'flex-col-center': 'flex-center flex-col',
    'wh-full': 'w-full h-full',
  },

  theme: {
    colors: {
      primary: '#1F9CF0',
      'primary-darker': '',
      'primary-lighter': '',
    },

    fontFamily: {
      mono: 'var(--vp-font-family-mono)',
    },
  },
})
