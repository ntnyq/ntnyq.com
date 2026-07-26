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
  <header class="site-header">
    <NuxtLink
      to="/"
      class="brand soft-link"
      aria-label="ntnyq, home"
    >
      ntnyq
    </NuxtLink>

    <nav
      class="nav-right"
      aria-label="Primary navigation"
    >
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        :aria-current="isActive(item.to) ? 'page' : undefined"
        class="nav-link soft-link"
      >
        {{ item.label }}
      </NuxtLink>

      <a
        v-for="item in socialItems"
        :key="item.url"
        :href="item.url"
        :aria-label="item.label"
        :title="item.label"
        class="nav-icon soft-link"
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
        class="nav-icon soft-link"
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

<style scoped>
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.6rem clamp(1.25rem, 5vw, 2.5rem);
}

.brand {
  color: var(--c-fg-deep);
  font-size: 1.05rem;
  font-weight: 500;
  opacity: 1;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 1.1rem;
}

.nav-link {
  font-size: 0.9rem;
}

.nav-link[aria-current='page'] {
  opacity: 1;
}

/* No focus ring in the navbar; show focus by going solid instead */
.soft-link:focus-visible {
  opacity: 1;
}

.nav-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  padding: 0;
  background: transparent;
  font-size: 1.1rem;
}

@media (max-width: 560px) {
  .site-header {
    padding-block: 1.25rem;
  }

  .nav-right {
    gap: 0.9rem;
  }

  .nav-link {
    font-size: 0.85rem;
  }

  .nav-icon:not(:last-child) {
    display: none;
  }
}
</style>
