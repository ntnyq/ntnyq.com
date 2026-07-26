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
    presetTypography({
      cssExtend: {
        a: {
          'border-bottom': '1px solid var(--c-border)',
          color: 'inherit',
          'font-weight': 'inherit',
          'text-decoration': 'none',
          transition: 'border-color 0.2s ease, color 0.2s ease',
        },
        'a:hover': {
          'border-bottom-color': 'var(--c-fg)',
          color: 'var(--c-fg-deep)',
        },
        blockquote: {
          'border-left': '3px solid var(--c-border-soft)',
          color: 'var(--c-muted)',
          'font-style': 'italic',
        },
        'code::after': {
          content: 'none',
        },
        'code::before': {
          content: 'none',
        },
      },
    }),
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
      mono: 'var(--font-mono)',
      sans: 'var(--font-sans)',
    },
  },
})
