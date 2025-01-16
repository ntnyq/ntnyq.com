<script lang="ts" setup>
definePageMeta({
  layout: 'post',
})

const route = useRoute()

const { data: page } = await useAsyncData(
  route.path,
  async () => await queryCollection('content').path(route.path).first(),
)
</script>

<template>
  <div>
    <ContentRenderer
      v-if="page"
      :value="page"
      prose
    />
    <p class="py-4">
      <NuxtLink
        to="/posts"
        class="text-gray-500 decoration-none hover:underline"
      >
        cd ..
      </NuxtLink>
    </p>
  </div>
</template>
