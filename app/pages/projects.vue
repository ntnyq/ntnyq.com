<script setup lang="ts">
import { PROJECT_GROUPS } from '~/utils/portfolio'

useHead({
  title: 'Projects — ntnyq',
})
</script>

<template>
  <div class="page-wrap site-frame">
    <header class="page-header">
      <h1 class="page-title">Projects</h1>
      <p class="page-description">
        Open-source projects I build and maintain, from linting and developer
        tools to browser extensions and native desktop apps.
      </p>
    </header>

    <section
      v-for="group in PROJECT_GROUPS"
      :key="group.title"
      class="mt-12 first-of-type:mt-0"
    >
      <div
        class="pointer-events-none relative h-2.8rem"
        aria-hidden="true"
      >
        <span
          class="absolute left--0.5rem top--0.9rem text-2.6em text-transparent font-700 leading-none text-stroke-1.5 text-stroke-$c-ghost-stroke sm:left--1.6rem sm:text-3.4em"
          >{{ group.title }}</span
        >
      </div>
      <h2 class="sr-only">{{ group.title }}</h2>

      <div class="grid grid-cols-1 mx--4 gap-x-4 gap-y-1 sm:grid-cols-2">
        <ProjectItem
          v-for="item in group.projects"
          :key="item.name"
          :item
        />
      </div>
    </section>
  </div>
</template>
