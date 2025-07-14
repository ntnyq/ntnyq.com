<script lang="ts" setup>
const route = useRoute()

const { data: list } = await useAsyncData(
  route.path,
  async () => await queryCollection('content').all(),
)
</script>

<template>
  <div class="mx-auto max-w-76ch w-full px-4 py-10">
    <div class="relative">
      <NuxtLink
        v-for="post in list"
        :key="post.id"
        :to="post.path"
        class="mb-4 block border border-gray-200 rounded-md p-4 transition-colors hover:bg-gray-50"
      >
        <h2 class="mb-2 text-xl">
          {{ post.title }}
        </h2>

        <p class="text-gray-500">
          {{ post.description || 'No description' }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>
