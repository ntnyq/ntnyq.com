<script setup lang="ts">
import { PROJECT_GROUPS } from '~/utils/portfolio'

useHead({
  title: 'Projects — ntnyq',
})
</script>

<template>
  <div class="site-frame page-wrap">
    <header class="page-header">
      <h1 class="page-title">Projects</h1>
      <p class="page-description">
        Open-source tools I've built or maintain, mostly around linting, types,
        SVG, and front-end development.
      </p>
    </header>

    <section
      v-for="group in PROJECT_GROUPS"
      :key="group.title"
      class="project-group"
    >
      <div
        class="ghost-block group-ghost"
        aria-hidden="true"
      >
        <span>{{ group.title }}</span>
      </div>
      <h2 class="visually-hidden">{{ group.title }}</h2>

      <div class="group-grid">
        <ProjectItem
          v-for="item in group.projects"
          :key="item.name"
          :item
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.project-group + .project-group {
  margin-top: 3rem;
}

.group-ghost {
  height: 2.8rem;
}

.group-ghost span {
  top: -0.9rem;
  left: -1.6rem;
  font-size: 3.4em;
  -webkit-text-stroke-width: 1.5px;
}

.visually-hidden {
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  margin: -1px;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.group-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.25rem 1rem;
  margin-inline: -1rem;
}

@media (max-width: 620px) {
  .group-grid {
    grid-template-columns: 1fr;
  }

  .group-ghost span {
    left: -0.5rem;
    font-size: 2.6em;
  }
}
</style>
