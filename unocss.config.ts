import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {},

  safelist: [],

  shortcuts: [],

  presets: [
    presetUno({}),
    presetIcons({}),
    presetWebFonts({}),
    presetAttributify({}),
  ],

  transformers: [transformerDirectives(), transformerVariantGroup()],
})
