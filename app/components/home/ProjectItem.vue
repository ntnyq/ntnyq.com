<script setup lang="ts">
import type { IProject } from '~/types'

defineProps<{
  item: IProject
}>()
</script>

<template>
  <a
    :href="item.url"
    class="project-card focus-ring"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span class="project-name">{{ item.name }}</span>
    <span class="project-description">{{ item.description }}</span>
  </a>
</template>

<style scoped>
.project-card {
  display: block;
  border-radius: 0.5rem;
  padding: 0.8rem 1rem;
  text-decoration: none;
  opacity: 0.85;
  transition:
    background-color 0.2s ease,
    opacity 0.2s ease;
}

.project-card:hover {
  background: var(--c-hover-bg);
  opacity: 1;
}

.project-name {
  display: block;
  color: var(--c-fg-deep);
  font-size: 0.95rem;
  font-weight: 500;
}

.project-description {
  display: block;
  margin-top: 0.3rem;
  color: var(--c-muted);
  font-size: 0.82rem;
  line-height: 1.55;
}
</style>
