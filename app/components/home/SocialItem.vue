<script lang="ts" setup>
import { NuxtLink } from '#components'
import type { ISocial } from '~/types'

const props = defineProps<{
  item: ISocial
}>()

const isExternal = computed(
  () => props.item.link && /^https?:/.test(props.item.link),
)
</script>

<template>
  <component
    :is="isExternal ? 'a' : NuxtLink"
    :class="item.class"
    :href="item.link"
    :aria-label="item.label || item.text"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? `noopener noreferrer` : undefined"
    class="mr-2 mt-2 inline-flex items-center rounded-md bg-gray-50 px-3 py-2 decoration-none transition-colors dark:bg-gray-50/10 hover:text-white"
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
  </component>
</template>
