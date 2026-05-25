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
      class="mb-8 flex items-center justify-between gap-4 border-b border-$c-border pb-5"
    >
      <NuxtLink
        to="/posts"
        class="inline-flex items-center gap-2 border border-$c-border rounded-full px-3 py-1.5 text-sm text-$c-muted transition-colors hover:border-$c-accent hover:text-$c-fg focus-ring"
      >
        <span class="i-ri:arrow-left-line" />
        All posts
      </NuxtLink>

      <span class="text-xs text-$c-muted font-mono">
        {{ page?.stem }}
      </span>
    </header>

    <div class="surface-card p-6 md:p-8">
      <ContentRenderer
        v-if="page"
        :value="page"
        prose
      />
    </div>
  </article>
</template>
