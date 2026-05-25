<script lang="ts" setup>
const route = useRoute()

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
]

function isActive(to: string) {
  if (to === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(to)
}
</script>

<template>
  <Motion
    :initial="{ opacity: 0, y: -16 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ type: 'spring', stiffness: 230, damping: 24 }"
    as="nav"
    class="sticky top-0 z-50 border-b border-$c-border bg-$c-bg/84 backdrop-blur-xl"
  >
    <div class="site-shell flex items-center justify-between py-3 md:py-4">
      <NuxtLink
        to="/"
        class="group relative rounded-sm text-3xl font-bold tracking-tight md:text-4xl focus-ring"
      >
        <span class="section-title transition-colors group-hover:text-$c-accent"
          >ntnyq</span
        >
        <span
          class="absolute left-0 h-0.5 w-0 bg-$c-accent transition-all duration-300 -bottom-0.5 group-hover:w-full"
        />
      </NuxtLink>

      <div class="flex items-center gap-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :class="
            isActive(item.to)
              ? 'border-$c-border bg-$c-surface text-$c-fg op-100'
              : 'text-$c-muted op-92 hover:text-$c-fg'
          "
          class="relative border border-transparent rounded-xl px-3 py-2 text-sm font-bold tracking-wide transition-colors hover:bg-$c-surface md:px-4 md:text-base focus-ring dark:hover:bg-$c-surface-soft"
        >
          {{ item.label }}
          <span
            v-if="isActive(item.to)"
            class="absolute bottom-0 left-1/2 h-0.5 w-5 rounded-full bg-$c-accent -translate-x-1/2"
          />
        </NuxtLink>

        <div class="mx-1 h-4 w-px bg-$c-border md:mx-2" />

        <Motion
          @click="toggleDark"
          :while-hover="{ rotate: 12, scale: 1.06 }"
          :while-tap="{ scale: 0.94, rotate: -8 }"
          as="button"
          class="group relative inline-flex cursor-pointer items-center justify-center border border-$c-border rounded-full bg-$c-surface-soft p-2 text-$c-fg transition-colors hover:border-$c-accent md:p-2.5 focus-ring"
          aria-label="Toggle dark mode"
          type="button"
          role="button"
        >
          <span class="inline-block text-lg">
            <div class="i-radix-icons:sun dark:i-radix-icons:moon" />
          </span>
        </Motion>
      </div>
    </div>
  </Motion>
</template>
