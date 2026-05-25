<script lang="ts" setup>
const route = useRoute()

const { data: list } = await useAsyncData(
  route.path,
  async () => await queryCollection('content').all(),
)

const posts = computed(() => {
  return (list.value || [])
    .filter(post => post.path?.startsWith('/posts/'))
    .sort((a, b) => b.path.localeCompare(a.path, undefined, { numeric: true }))
})

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
  <section class="site-shell w-full">
    <Motion
      :initial="{ opacity: 0, y: 16 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ type: 'spring', stiffness: 180, damping: 20 }"
      as="header"
      class="mb-8 border-b border-$c-border pb-6"
    >
      <p class="section-kicker">Writing</p>
      <h1 class="section-title text-3xl font-semibold lg:text-4xl">Posts</h1>
      <p class="muted-copy mt-3 leading-relaxed">
        Notes, ideas, and practical experiments.
      </p>
    </Motion>

    <div class="grid gap-4">
      <Motion
        v-for="post in posts"
        :key="post.id"
        :initial="{ opacity: 0, y: 16 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true, amount: 0.2 }"
        :transition="{ type: 'spring', stiffness: 210, damping: 21 }"
        as-child
      >
        <NuxtLink
          @mousemove="updateCardGlow"
          @mouseleave="resetCardGlow"
          :to="post.path"
          class="surface-card glow-track hover-lift group block p-5 focus-ring"
        >
          <div class="mb-3 flex items-center justify-between gap-3">
            <Motion
              :initial="{ opacity: 0, y: 6 }"
              :while-in-view="{ opacity: 1, y: 0 }"
              :in-view-options="{ once: true, amount: 0.2 }"
              :transition="{ type: 'spring', stiffness: 245, damping: 22 }"
              as="h2"
              class="line-clamp-1 text-xl font-medium transition-colors group-hover:text-$c-accent"
            >
              {{ post.title || post.stem }}
            </Motion>
            <span
              class="border border-$c-border rounded-full px-2.5 py-1 text-xs text-$c-muted font-mono"
            >
              {{ post.stem }}
            </span>
          </div>

          <Motion
            :initial="{ opacity: 0, y: 6 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :in-view-options="{ once: true, amount: 0.2 }"
            :transition="{
              type: 'spring',
              stiffness: 230,
              damping: 22,
              delay: 0.08,
            }"
            as="p"
            class="muted-copy line-clamp-2 leading-relaxed"
          >
            {{ post.description || 'No description yet.' }}
          </Motion>
        </NuxtLink>
      </Motion>

      <p
        v-if="posts.length === 0"
        class="surface-card p-5 text-$c-muted"
      >
        No posts yet.
      </p>
    </div>
  </section>
</template>
