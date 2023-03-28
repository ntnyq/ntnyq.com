import { defineConfig, presetIcons, presetUno, presetTypography } from 'unocss'

export default defineConfig({
  shortcuts: [
    [
      'btn',
      'inline-flex items-center justify-center rounded border border-transparent font-medium text-center text-base leading-snug transition py-3 px-6 shadow-lg ease-in duration-200 focus:ring-blue-500 focus:ring-offset-blue-200 focus:ring-2 focus:ring-offset-2',
    ],
  ],

  presets: [presetUno(), presetIcons(), presetTypography()],
})
