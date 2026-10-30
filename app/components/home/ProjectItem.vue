<script setup lang="ts">
import type { IProject } from '~/types'

defineProps<{
  item: IProject
}>()
</script>

<template>
  <a
    :href="item.url"
    class="block rounded-lg px-4 py-0.8rem no-underline opacity-85 transition-[background-color,opacity] duration-200 ease-[ease] hover:bg-$c-hover-bg hover:opacity-100 focus-ring"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span class="block text-0.95rem text-$c-fg-deep font-500">{{
      item.name
    }}</span>
    <span class="mt-0.3rem block text-0.82rem text-$c-muted leading-[1.55]">{{
      item.description
    }}</span>
  </a>
</template>
