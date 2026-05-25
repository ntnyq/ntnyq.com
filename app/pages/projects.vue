<script lang="ts" setup>
import { stagger } from 'motion-v'
import type { IProjectGroup } from '~/types'

const projectGroups = readonly<IProjectGroup[]>([
  {
    title: 'Browser Extension',
    projects: [
      {
        name: 'Prettier Now',
        url: 'https://github.com/ntnyq/prettier-now',
        description: 'Yet another @prettier browser extension',
        icon: 'i-vscode-icons:file-type-prettier',
      },
      {
        name: 'Filter Now',
        url: 'https://github.com/ntnyq/filter-now',
        description: `An offline tool help user to add CSS based filter to image`,
        icon: 'i-vscode-icons:file-type-css',
      },
    ],
  },
  {
    title: 'ESLint',
    projects: [
      {
        name: 'eslint-plugin-github-action',
        url: 'https://github.com/ntnyq/eslint-plugin-github-action',
        description: `Rules for consistent, readable and valid GitHub action files`,
        icon: 'i-vscode-icons:file-type-eslint',
      },
      {
        name: 'eslint-plugin-svgo',
        url: 'https://github.com/ntnyq/eslint-plugin-svgo',
        description: 'Optimize SVG files with SVGO using ESLint',
        icon: 'i-vscode-icons:file-type-eslint',
      },
      {
        name: 'eslint-plugin-svg',
        url: 'https://github.com/ntnyq/eslint-plugin-svg',
        description: 'Rules for consistent, readable and valid SVG files',
        icon: 'i-vscode-icons:file-type-eslint',
      },
      {
        name: 'svg-eslint-parser',
        url: 'https://github.com/ntnyq/svg-eslint-parser',
        description: `An SVG parser that produces output compatible with ESLint`,
        icon: 'i-vscode-icons:file-type-eslint',
      },
      {
        name: 'eslint-plugin-oxfmt',
        url: 'https://github.com/ntnyq/eslint-plugin-oxfmt',
        description: 'An ESLint plugin for formatting code with oxfmt.',
        icon: 'i-vscode-icons:file-type-eslint',
      },
    ],
  },
  {
    title: 'Typedef',
    projects: [
      {
        name: 'taro-define-config',
        url: 'https://github.com/ntnyq/taro-define-config',
        description: 'Provide a defineConfig function for Taro project',
        icon: 'i-fluent-emoji-flat:alien',
      },
      {
        name: 'vscode-extension-manifest',
        url: 'https://github.com/ntnyq/vscode-extension-manifest',
        description: `VSCode extension manifest type definitions, validators, and utilities`,
        icon: 'i-vscode-icons:file-type-vscode',
      },
    ],
  },
  {
    title: 'UnoCSS',
    projects: [
      {
        name: 'unocss-presets',
        url: 'https://github.com/ntnyq/unocss-presets',
        description: ' A collection of unocss presets',
        icon: 'i-vscode-icons:file-type-unocss',
      },
      {
        name: 'iconify-collections',
        url: 'https://github.com/ntnyq/iconify-collections',
        description: 'Some iconify collections.',
        icon: 'i-vscode-icons:file-type-unocss',
      },
    ],
  },
  {
    title: 'Json Schema',
    projects: [
      {
        name: 'weapp-json-schema',
        url: 'https://github.com/ntnyq/weapp-json-schema',
        description: 'Json schema definitions for weapp',
        icon: 'i-vscode-icons:file-type-light-json-schema dark:i-vscode-icons:file-type-json-schema',
      },
    ],
  },
])

useHead({
  title: 'Projects - ntnyq',
})
</script>

<template>
  <div class="site-shell xl:text-lg">
    <Motion
      :initial="{ opacity: 0, y: 20 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ type: 'spring', stiffness: 45, damping: 15 }"
      :in-view-options="{ once: true }"
      as="header"
      class="mb-8 mt-4"
    >
      <p class="section-kicker">Directory</p>
      <h1 class="section-title text-4xl font-bold">Projects</h1>
      <p class="muted-copy mt-2">Open source things I've built and maintain.</p>
    </Motion>

    <ul class="w-full space-y-4">
      <li
        v-for="group in projectGroups"
        :key="group.title"
        class="relative py-2"
      >
        <h3
          class="muted-copy py-2 text-sm font-semibold tracking-wide uppercase"
        >
          {{ group.title }}
        </h3>
        <Motion
          :variants="{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }"
          :transition="{
            type: 'spring',
            delayChildren: stagger(0.12),
          }"
          initial="hidden"
          while-in-view="visible"
          class="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <Motion
            v-for="item in group.projects"
            :key="item.name"
            :variants="{
              hidden: {
                y: 30,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
              },
            }"
            as-child
          >
            <ProjectItem :item />
          </Motion>
        </Motion>
      </li>
    </ul>
  </div>
</template>
