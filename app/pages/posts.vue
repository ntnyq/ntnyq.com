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

  return [...map.entries()].map(([year, items]) => ({
    items,
    year,
  }))
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
  <div class="page-wrap site-frame">
    <header class="page-header">
      <h1 class="page-title">Posts</h1>
    </header>

    <div v-if="posts.length">
      <section
        v-for="group in groups"
        :key="group.year"
        class="not-first:mt-10"
      >
        <div
          v-if="group.year"
          class="pointer-events-none relative h-3.6rem"
          aria-hidden="true"
        >
          <span
            class="absolute left--4 top--1.8rem text-5.5em text-transparent font-700 leading-none text-stroke-2 text-stroke-$c-ghost-stroke sm:left--2.8rem sm:text-7.5em"
            >{{ group.year }}</span
          >
        </div>

        <ul class="m-0 list-none p-0">
          <li
            v-for="post in group.items"
            :key="post.path"
          >
            <NuxtLink
              :to="post.path"
              class="flex items-baseline gap-3 py-0.55rem no-underline opacity-80 transition-opacity duration-200 ease-[ease] hover:opacity-100 focus-ring"
            >
              <span class="text-1.05rem text-$c-fg-deep leading-[1.4]">{{
                post.title
              }}</span>
              <time
                v-if="post.date"
                :datetime="post.date.toISOString()"
                class="flex-none text-0.8rem text-$c-muted font-mono"
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
      class="text-$c-muted"
    >
      Nothing here yet.
    </p>
  </div>
</template>
