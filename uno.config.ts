/**
 * @file UnoCSS config
 */

import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  transformers: [transformerDirectives(), transformerVariantGroup()],

  presets: [
    presetWind3(),
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
      primary: {
        DEFAULT: '#1f9cf0',
      },
    },

    fontFamily: {
      mono: 'var(--vp-font-family-mono)',
    },
  },
})
