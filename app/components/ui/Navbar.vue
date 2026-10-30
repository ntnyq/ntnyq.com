<script setup lang="ts">
const route = useRoute()

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Posts', to: '/posts' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
] as const

const socialItems = [
  {
    icon: 'i-ri:github-fill',
    label: 'GitHub',
    url: 'https://github.com/ntnyq',
  },
  {
    icon: 'i-ri:bluesky-fill',
    label: 'Bluesky',
    url: 'https://bsky.app/profile/ntnyq.com',
  },
  {
    icon: 'i-ri:twitter-x-fill',
    label: 'Twitter',
    url: 'https://twitter.com/ntnyq',
  },
] as const

function isActive(to: string) {
  return to === '/' ? route.path === '/' : route.path.startsWith(to)
}
</script>

<template>
  <header
    class="flex items-center justify-between gap-2 px-[clamp(1.25rem,5vw,2.5rem)] py-5 sm:gap-6 sm:py-1.6rem"
  >
    <NuxtLink
      to="/"
      class="soft-link text-1.05rem text-$c-fg-deep font-500 opacity-100 focus-visible:opacity-100"
      aria-label="ntnyq, home"
    >
      ntnyq
    </NuxtLink>

    <nav
      class="flex items-center gap-2 sm:gap-1.1rem"
      aria-label="Primary navigation"
    >
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        :aria-current="isActive(item.to) ? 'page' : undefined"
        class="soft-link text-0.85rem sm:text-0.9rem aria-[current=page]:opacity-100 focus-visible:opacity-100"
      >
        {{ item.label }}
      </NuxtLink>

      <a
        v-for="item in socialItems"
        :key="item.url"
        :href="item.url"
        :aria-label="item.label"
        :title="item.label"
        class="soft-link hidden cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-1.1rem sm:inline-flex focus-visible:opacity-100"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          :class="item.icon"
          aria-hidden="true"
        />
      </a>

      <button
        @click="toggleDark"
        class="soft-link inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-1.1rem focus-visible:opacity-100"
        aria-label="Toggle color theme"
        title="Toggle color theme"
        type="button"
      >
        <span
          class="i-ri:sun-line dark:i-ri:moon-line"
          aria-hidden="true"
        />
      </button>
    </nav>
  </header>
</template>
