<script lang="ts" setup>
import type { IProject } from '~/types'

const browserExtensions: IProject[] = [
  {
    name: 'Prettier Now',
    url: 'https://github.com/ntnyq/prettier-now',
    description: 'Yet another @prettier browser extension',
    icon: 'i-fluent-emoji-flat:toolbox',
  },
  {
    name: 'Filter Now',
    url: 'https://github.com/ntnyq/filter-now',
    description: 'An offline tool help user to add CSS based filter to image',
    icon: 'i-fluent-emoji-flat:framed-picture',
  },
]
const eslintPackages: IProject[] = [
  {
    name: 'eslint-plugin-github-action',
    url: 'https://github.com/ntnyq/eslint-plugin-github-action',
    description: 'Rules for consistent, readable and valid GitHub action files',
    icon: 'i-vscode-icons:file-type-eslint',
  },
  {
    name: 'eslint-plugin-svgo',
    url: 'https://github.com/ntnyq/eslint-plugin-svgo',
    description: 'Optimize SVG files with SVGO using ESLint',
    icon: 'i-vscode-icons:file-type-eslint',
  },
]
const typedefPackages: IProject[] = [
  {
    name: 'taro-define-config',
    url: 'https://github.com/ntnyq/taro-define-config',
    description: 'Provide a defineConfig function for Taro project',
    icon: 'i-fluent-emoji-flat:alien',
  },
  {
    name: 'vscode-extension-manifest',
    url: 'https://github.com/ntnyq/vscode-extension-manifest',
    description: 'VSCode extension manifest type definitions, validators, and utilities',
    icon: 'i-vscode-icons:file-type-vscode',
  },
]
</script>

<template>
  <div class="mb-4 mt-10">
    <h2 class="mb-4 text-3xl font-bold">Projects</h2>
    <div class="relative py-2">
      <h3 class="py-2 text-xl font-semibold op-75">Browser Extension</h3>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ProjectItem
          v-for="item in browserExtensions"
          :key="item.name"
          :item="item"
        />
      </div>
    </div>
    <div class="relative py-2">
      <h3 class="py-2 text-xl font-semibold op-75">ESLint</h3>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ProjectItem
          v-for="item in eslintPackages"
          :key="item.name"
          :item="item"
        />
      </div>
    </div>
    <div class="relative py-2">
      <h3 class="py-2 text-xl font-semibold op-75">Typedef</h3>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ProjectItem
          v-for="item in typedefPackages"
          :key="item.name"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>
