<script lang="ts" setup>
import type { IProject } from '~/types'

defineProps<{
  item: IProject
}>()
</script>

<template>
  <a
    :href="item.url"
    class="rounded-md bg-gray-50 px-4 py-3 decoration-none transition-colors dark:bg-gray-50/10 hover:bg-gray-100 dark:hover:bg-gray-50/20"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="h-full flex items-center justify-center">
      <div
        v-if="item.icon"
        class="mr-4 text-4xl"
      >
        <div :class="item.icon" />
      </div>
      <div class="flex-1">
        <h3 class="text-sm font-medium">{{ item.name }}</h3>
        <p class="text-sm font-normal op-50">{{ item.description }}</p>
      </div>
    </div>
  </a>
</template>
