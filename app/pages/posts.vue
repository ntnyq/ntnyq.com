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
</script>

<template>
  <section class="mx-auto max-w-76ch w-full px-4 py-10">
    <header class="mb-8 border-b border-zinc-200 pb-6 dark:border-zinc-800">
      <p class="mb-2 text-sm text-zinc-500 tracking-wide uppercase">Writing</p>
      <h1
        class="text-3xl text-zinc-900 font-semibold lg:text-4xl dark:text-zinc-100"
      >
        Posts
      </h1>
      <p class="mt-3 text-zinc-600 leading-relaxed dark:text-zinc-400">
        Notes, ideas, and practical experiments.
      </p>
    </header>

    <div class="grid gap-4">
      <NuxtLink
        v-for="post in posts"
        :key="post.id"
        :to="post.path"
        class="group border border-zinc-200 rounded-xl bg-white/85 p-5 transition-all duration-250 dark:border-zinc-800 hover:border-zinc-300 dark:bg-zinc-900/70 hover:shadow-sm hover:-translate-y-0.5 dark:hover:border-zinc-700"
      >
        <div class="mb-3 flex items-center justify-between gap-3">
          <h2
            class="line-clamp-1 text-xl text-zinc-900 font-medium transition-colors dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
          >
            {{ post.title || post.stem }}
          </h2>
          <span
            class="border border-zinc-200 rounded-full px-2.5 py-1 text-xs text-zinc-500 font-mono dark:border-zinc-700 dark:text-zinc-400"
          >
            {{ post.stem }}
          </span>
        </div>

        <p
          class="line-clamp-2 text-zinc-600 leading-relaxed dark:text-zinc-400"
        >
          {{ post.description || 'No description yet.' }}
        </p>
      </NuxtLink>

      <p
        v-if="posts.length === 0"
        class="border border-zinc-200 rounded-xl p-5 text-zinc-500 dark:border-zinc-800 dark:text-zinc-400"
      >
        No posts yet.
      </p>
    </div>
  </section>
</template>
