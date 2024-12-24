<script lang="ts" setup>
import type { ISocial } from '~/types'

defineProps<{
  item: ISocial
}>()
</script>

<template>
  <a
    :class="item.class"
    :href="item.link"
    :aria-label="item.label || item.text"
    class="mr-2 mt-2 inline-flex items-center rounded-md bg-gray-50 px-3 py-2 decoration-none transition-colors dark:bg-gray-50/10 hover:text-white"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div
      v-if="item.icon"
      class="text-xl"
    >
      <div :class="item.icon" />
    </div>
    <div
      v-if="item.text"
      class="ml-1 text-sm"
    >
      {{ item.text }}
    </div>
  </a>
</template>
