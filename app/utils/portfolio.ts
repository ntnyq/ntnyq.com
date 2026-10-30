import type { IProject, IProjectGroup } from '~/types'

const projects = {
  a11yNow: {
    name: 'a11y-now',
    url: 'https://github.com/ntnyq/a11y-now',
    description:
      'A pluggable, themeable accessibility toolbar for any website.',
  },
  bilibiliDownloader: {
    name: 'Bilibili Downloader',
    url: 'https://github.com/ntnyq/bilibili-downloader',
    description:
      'Save Bilibili videos, audio, subtitles, and more from your browser.',
  },
  eslintPluginGithubAction: {
    name: 'eslint-plugin-github-action',
    url: 'https://github.com/ntnyq/eslint-plugin-github-action',
    description:
      'Consistent, readable, and valid GitHub Actions—checked by ESLint.',
  },
  eslintPluginOxfmt: {
    name: 'eslint-plugin-oxfmt',
    url: 'https://github.com/ntnyq/eslint-plugin-oxfmt',
    description: 'Bring oxfmt formatting feedback into the ESLint workflow.',
  },
  eslintPluginSvg: {
    name: 'eslint-plugin-svg',
    url: 'https://github.com/ntnyq/eslint-plugin-svg',
    description: 'Lint SVG source for consistency, readability, and validity.',
  },
  eslintPluginSvgo: {
    name: 'eslint-plugin-svgo',
    url: 'https://github.com/ntnyq/eslint-plugin-svgo',
    description: 'Optimize SVG files with SVGO without leaving ESLint.',
  },
  eslintPluginUnocssSort: {
    name: 'eslint-plugin-unocss-sort',
    url: 'https://github.com/ntnyq/eslint-plugin-unocss-sort',
    description:
      'Sort UnoCSS utilities and check duplicate and canonical classes.',
  },
  eslintPluginVuePerfectionist: {
    name: 'eslint-plugin-vue-perfectionist',
    url: 'https://github.com/ntnyq/eslint-plugin-vue-perfectionist',
    description:
      'ESLint rules for consistent, readable, and maintainable Vue 3 code.',
  },
  filterNow: {
    name: 'Filter Now',
    url: 'https://github.com/ntnyq/filter-now',
    description: 'Build CSS image filters locally, directly in the browser.',
  },
  gdfmt: {
    name: 'gdfmt',
    url: 'https://github.com/ntnyq/gdfmt',
    description:
      'Format GDScript with Rust, from the CLI to VS Code and the browser.',
  },
  iconifyCollections: {
    name: 'iconify-collections',
    url: 'https://github.com/ntnyq/iconify-collections',
    description:
      'Curated Iconify collections for projects with specific needs.',
  },
  imageminRs: {
    name: 'imagemin-rs',
    url: 'https://github.com/ntnyq/imagemin-rs',
    description: 'Optimize images with Rust through familiar imagemin APIs.',
  },
  prettierNow: {
    name: 'Prettier Now',
    url: 'https://github.com/ntnyq/prettier-now',
    description: 'A focused browser extension for formatting with Prettier.',
  },
  rivu: {
    name: 'Rivu',
    url: 'https://github.com/ntnyq/rivu',
    description:
      'A native BitTorrent app for macOS, Windows, and Linux, built with Go.',
  },
  svgEslintParser: {
    name: 'svg-eslint-parser',
    url: 'https://github.com/ntnyq/svg-eslint-parser',
    description: 'Parse SVG into an ESLint-compatible abstract syntax tree.',
  },
  taroDefineConfig: {
    name: 'taro-define-config',
    url: 'https://github.com/ntnyq/taro-define-config',
    description: 'Typed defineConfig helpers for Taro projects.',
  },
  unocssPresets: {
    name: 'unocss-presets',
    url: 'https://github.com/ntnyq/unocss-presets',
    description: 'A practical collection of reusable UnoCSS presets.',
  },
  unpluginStripAttrs: {
    name: 'unplugin-strip-attrs',
    url: 'https://github.com/ntnyq/unplugin-strip-attrs',
    description: 'Remove testing attributes from templates during build.',
  },
  vscodeAnnopulse: {
    name: 'AnnoPulse',
    url: 'https://github.com/ntnyq/vscode-annopulse',
    description: 'Track TODOs, FIXMEs, and other code annotations in VS Code.',
  },
  vscodeBetterColorHighlight: {
    name: 'Better Color Highlight',
    url: 'https://github.com/ntnyq/vscode-better-color-highlight',
    description:
      'Highlight, preview, and convert colors across code in VS Code.',
  },
  vscodeExtensionManifest: {
    name: 'vscode-extension-manifest',
    url: 'https://github.com/ntnyq/vscode-extension-manifest',
    description:
      'Type definitions, validators, and utilities for extension manifests.',
  },
  weappJsonSchema: {
    name: 'weapp-json-schema',
    url: 'https://github.com/ntnyq/weapp-json-schema',
    description: 'JSON Schema definitions for WeChat Mini Program projects.',
  },
  xVideoDownloader: {
    name: 'X Video Downloader',
    url: 'https://github.com/ntnyq/x-video-downloader',
    description:
      'Save X / Twitter videos with quality selection and batch downloads.',
  },
} satisfies Record<string, IProject>

export const PROJECT_GROUPS = [
  {
    title: 'Static analysis',
    projects: [
      projects.eslintPluginVuePerfectionist,
      projects.eslintPluginUnocssSort,
      projects.eslintPluginGithubAction,
      projects.eslintPluginSvgo,
      projects.eslintPluginSvg,
      projects.svgEslintParser,
      projects.eslintPluginOxfmt,
      projects.gdfmt,
    ],
  },
  {
    title: 'Developer tooling',
    projects: [
      projects.imageminRs,
      projects.unpluginStripAttrs,
      projects.a11yNow,
    ],
  },
  {
    title: 'Developer types',
    projects: [
      projects.taroDefineConfig,
      projects.vscodeExtensionManifest,
      projects.weappJsonSchema,
    ],
  },
  {
    title: 'CSS and icons',
    projects: [projects.unocssPresets, projects.iconifyCollections],
  },
  {
    title: 'Editor extensions',
    projects: [projects.vscodeAnnopulse, projects.vscodeBetterColorHighlight],
  },
  {
    title: 'Browser tools',
    projects: [
      projects.prettierNow,
      projects.filterNow,
      projects.bilibiliDownloader,
      projects.xVideoDownloader,
    ],
  },
  {
    title: 'Desktop apps',
    projects: [projects.rivu],
  },
] as const satisfies readonly IProjectGroup[]

export const FEATURED_PROJECTS = [
  projects.eslintPluginOxfmt,
  projects.taroDefineConfig,
  projects.eslintPluginGithubAction,
  projects.prettierNow,
] as const satisfies readonly IProject[]
