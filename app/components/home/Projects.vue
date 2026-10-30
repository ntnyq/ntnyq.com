<script setup lang="ts">
import { FEATURED_PROJECTS } from '~/utils/portfolio'
</script>

<template>
  <section class="pb-12 pt-10">
    <h2 class="m-0 mb-4 text-1.25rem text-$c-fg-deep font-500">Projects</h2>

    <div class="grid grid-cols-1 mx--4 gap-x-4 gap-y-1 sm:grid-cols-2">
      <ProjectItem
        v-for="item in FEATURED_PROJECTS"
        :key="item.name"
        :item
      />
    </div>

    <NuxtLink
      to="/projects"
      class="soft-link mt-5 inline-flex items-center gap-0.35rem text-0.9rem focus-ring"
    >
      All projects
      <span
        class="i-ri:arrow-right-line"
        aria-hidden="true"
      />
    </NuxtLink>
  </section>
</template>
