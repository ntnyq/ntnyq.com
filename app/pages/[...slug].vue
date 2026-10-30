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
  <article class="content-frame pb-16 pt-10">
    <header>
      <h1
        class="m-0 text-1.8rem text-$c-fg-deep font-400 leading-[1.3] tracking--0.01em"
      >
        {{ page?.title || page?.stem }}
      </h1>
      <time
        v-if="postDate"
        :datetime="postDate.toISOString()"
        class="mt-0.6rem block text-0.85rem text-$c-muted font-mono"
      >
        {{ dateFormatter.format(postDate) }}
      </time>
    </header>

    <!-- The post title is already rendered in the header. -->
    <ContentRenderer
      v-if="page"
      :value="page"
      class="pb-12 pt-8 prose [&_h1:first-child]:hidden"
      prose
    />

    <footer>
      <NuxtLink
        to="/posts"
        class="soft-link text-0.9rem font-mono focus-ring"
      >
        &gt; cd ..
      </NuxtLink>
    </footer>
  </article>
</template>
