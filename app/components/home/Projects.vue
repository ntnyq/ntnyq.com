<script setup lang="ts">
import { FEATURED_PROJECTS } from '~/utils/portfolio'
</script>

<template>
  <section class="home-projects">
    <h2>Projects</h2>

    <div class="projects-list">
      <ProjectItem
        v-for="item in FEATURED_PROJECTS"
        :key="item.name"
        :item
      />
    </div>

    <NuxtLink
      to="/projects"
      class="soft-link all-link focus-ring"
    >
      All projects
      <span
        class="i-ri:arrow-right-line"
        aria-hidden="true"
      />
    </NuxtLink>
  </section>
</template>

<style scoped>
.home-projects {
  padding-block: 2.5rem 3rem;
}

.home-projects h2 {
  margin: 0 0 1rem;
  color: var(--c-fg-deep);
  font-size: 1.25rem;
  font-weight: 500;
}

.projects-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.25rem 1rem;
  margin-inline: -1rem;
}

.all-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 1.25rem;
  font-size: 0.9rem;
}

@media (max-width: 620px) {
  .projects-list {
    grid-template-columns: 1fr;
  }
}
</style>
