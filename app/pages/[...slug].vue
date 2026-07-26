<script setup lang="ts">
definePageMeta({
  layout: 'post',
})

const route = useRoute()

const { data: page } = await useAsyncData(route.path, async () => {
  return await queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found',
  })
}

const postDate = computed(() => {
  const rawDate = (page.value?.meta as Record<string, unknown> | undefined)
    ?.date

  return typeof rawDate === 'string' ? new Date(rawDate) : null
})

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})

useHead({
  title: `${page.value.title || 'Note'} — ntnyq`,
})
</script>

<template>
  <article class="content-frame article-page">
    <header class="article-header">
      <h1>{{ page?.title || page?.stem }}</h1>
      <time
        v-if="postDate"
        :datetime="postDate.toISOString()"
      >
        {{ dateFormatter.format(postDate) }}
      </time>
    </header>

    <ContentRenderer
      v-if="page"
      :value="page"
      class="article-body prose"
      prose
    />

    <footer class="article-footer">
      <NuxtLink
        to="/posts"
        class="soft-link focus-ring"
      >
        &gt; cd ..
      </NuxtLink>
    </footer>
  </article>
</template>

<style scoped>
.article-page {
  padding-block: 2.5rem 4rem;
}

.article-header h1 {
  margin: 0;
  color: var(--c-fg-deep);
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.article-header time {
  display: block;
  margin-top: 0.6rem;
  color: var(--c-muted);
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.article-body {
  padding-block: 2rem 3rem;
}

/* The title is already rendered in the header above */
.article-body :deep(h1:first-child) {
  display: none;
}

.article-footer a {
  font-family: var(--font-mono);
  font-size: 0.9rem;
}
</style>
