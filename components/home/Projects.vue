<script lang="ts" setup>
import type { IProject } from '~/types'

const projects = shallowRef<IProject[]>([
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
])
</script>

<template>
  <div class="mb-4 mt-10">
    <h2 class="mb-4 text-3xl font-bold">Projects</h2>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <ProjectItem
        v-for="project in projects"
        :key="project.name"
        :item="project"
      />
    </div>
  </div>
</template>
