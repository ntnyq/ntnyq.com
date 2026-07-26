<script setup lang="ts">
interface PostEntry {
  date: Date | null
  path: string
  title: string
}

const route = useRoute()

const { data: list } = await useAsyncData(route.path, async () => {
  return await queryCollection('content').all()
})

const posts = computed<PostEntry[]>(() => {
  return (list.value || [])
    .filter(post => post.path?.startsWith('/posts/'))
    .map(post => {
      const rawDate = (post.meta as Record<string, unknown> | undefined)?.date

      return {
        date: typeof rawDate === 'string' ? new Date(rawDate) : null,
        path: post.path,
        title: post.title || post.stem,
      }
    })
    .sort((a, b) => {
      if (a.date && b.date) {
        return b.date.getTime() - a.date.getTime()
      }

      return b.path.localeCompare(a.path, undefined, { numeric: true })
    })
})

const groups = computed(() => {
  const map = new Map<string, PostEntry[]>()

  for (const post of posts.value) {
    const year = post.date ? String(post.date.getFullYear()) : ''
    const items = map.get(year) || []

    items.push(post)
    map.set(year, items)
  }

  return [...map.entries()].map(([year, items]) => ({ items, year }))
})

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'short',
})

useHead({
  title: 'Posts — ntnyq',
})
</script>

<template>
  <div class="site-frame page-wrap">
    <header class="page-header">
      <h1 class="page-title">Posts</h1>
    </header>

    <div v-if="posts.length">
      <section
        v-for="group in groups"
        :key="group.year"
        class="post-group"
      >
        <div
          v-if="group.year"
          class="ghost-block"
          aria-hidden="true"
        >
          <span>{{ group.year }}</span>
        </div>

        <ul class="post-list">
          <li
            v-for="post in group.items"
            :key="post.path"
          >
            <NuxtLink
              :to="post.path"
              class="post-link focus-ring"
            >
              <span class="post-title">{{ post.title }}</span>
              <time
                v-if="post.date"
                :datetime="post.date.toISOString()"
                class="post-date"
              >
                {{ dateFormatter.format(post.date) }}
              </time>
            </NuxtLink>
          </li>
        </ul>
      </section>
    </div>

    <p
      v-else
      class="muted-copy"
    >
      Nothing here yet.
    </p>
  </div>
</template>

<style scoped>
.post-group + .post-group {
  margin-top: 2.5rem;
}

.post-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.post-link {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  padding-block: 0.55rem;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.post-link:hover {
  opacity: 1;
}

.post-title {
  color: var(--c-fg-deep);
  font-size: 1.05rem;
  line-height: 1.4;
}

.post-date {
  flex: none;
  color: var(--c-muted);
  font-family: var(--font-mono);
  font-size: 0.8rem;
}
</style>
