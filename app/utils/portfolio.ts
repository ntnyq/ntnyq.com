import type { IProject, IProjectGroup } from '~/types'

const projects = {
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
  filterNow: {
    name: 'Filter Now',
    url: 'https://github.com/ntnyq/filter-now',
    description: 'Build CSS image filters locally, directly in the browser.',
  },
  iconifyCollections: {
    name: 'iconify-collections',
    url: 'https://github.com/ntnyq/iconify-collections',
    description:
      'Curated Iconify collections for projects with specific needs.',
  },
  prettierNow: {
    name: 'Prettier Now',
    url: 'https://github.com/ntnyq/prettier-now',
    description: 'A focused browser extension for formatting with Prettier.',
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
} satisfies Record<string, IProject>

export const PROJECT_GROUPS = [
  {
    title: 'Static analysis',
    projects: [
      projects.eslintPluginGithubAction,
      projects.eslintPluginSvgo,
      projects.eslintPluginSvg,
      projects.svgEslintParser,
      projects.eslintPluginOxfmt,
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
    title: 'Browser tools',
    projects: [projects.prettierNow, projects.filterNow],
  },
] as const satisfies readonly IProjectGroup[]

export const FEATURED_PROJECTS = [
  projects.eslintPluginSvgo,
  projects.svgEslintParser,
  projects.eslintPluginGithubAction,
  projects.vscodeExtensionManifest,
] as const satisfies readonly IProject[]
