<script lang="ts" setup>
import type { IProject } from '~/types'

defineProps<{
  item: IProject
}>()

function updateCardGlow(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement | null
  if (!card) {
    return
  }

  const rect = card.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  card.style.setProperty('--mx', `${x}px`)
  card.style.setProperty('--my', `${y}px`)
}

function resetCardGlow(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement | null
  if (!card) {
    return
  }

  card.style.removeProperty('--mx')
  card.style.removeProperty('--my')
}
</script>

<template>
  <a
    @mousemove="updateCardGlow"
    @mouseleave="resetCardGlow"
    :href="item.url"
    class="surface-card glow-track hover-lift block px-4 py-4 decoration-none focus-ring"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="h-full flex items-center justify-center gap-1">
      <div
        v-if="item.icon"
        class="mr-3 text-4xl"
      >
        <div :class="item.icon" />
      </div>
      <Motion
        :initial="{ opacity: 0 }"
        :while-in-view="{ opacity: 1 }"
        :in-view-options="{ once: true, amount: 0.5 }"
        :transition="{ duration: 0.22 }"
        as="div"
        class="flex-1"
      >
        <Motion
          :initial="{ opacity: 0, y: 7 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true, amount: 0.5 }"
          :transition="{ type: 'spring', stiffness: 240, damping: 22 }"
          as="h3"
          class="pb-1 text-base font-semibold"
        >
          {{ item.name }}
        </Motion>
        <Motion
          :initial="{ opacity: 0, y: 7 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true, amount: 0.5 }"
          :transition="{
            type: 'spring',
            stiffness: 220,
            damping: 21,
            delay: 0.08,
          }"
          as="p"
          class="muted-copy min-h-3em text-sm font-normal lh-1.5em"
        >
          {{ item.description }}
        </Motion>
      </Motion>
    </div>
  </a>
</template>
