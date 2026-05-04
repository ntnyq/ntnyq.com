<script lang="ts" setup>
definePageMeta({
  layout: 'post',
})

const route = useRoute()

const { data: page } = await useAsyncData(
  route.path,
  async () => await queryCollection('content').path(route.path).first(),
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found',
  })
}
</script>

<template>
  <article class="pb-8">
    <header
      class="mb-8 flex items-center justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-800"
    >
      <NuxtLink
        to="/posts"
        class="inline-flex items-center gap-2 border border-zinc-200 rounded-full px-3 py-1.5 text-sm text-zinc-600 transition-colors dark:border-zinc-700 hover:border-zinc-300 dark:text-zinc-300 hover:text-zinc-900 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
      >
        <span class="i-ri:arrow-left-line" />
        All posts
      </NuxtLink>

      <span class="text-xs text-zinc-500 font-mono dark:text-zinc-500">
        {{ page?.stem }}
      </span>
    </header>

    <div
      class="border border-zinc-200 rounded-2xl bg-white/90 p-6 dark:border-zinc-800 dark:bg-zinc-900/70 md:p-8"
    >
      <ContentRenderer
        v-if="page"
        :value="page"
        prose
      />
    </div>
  </article>
</template>
