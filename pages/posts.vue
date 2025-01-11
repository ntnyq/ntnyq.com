<template>
  <div class="mx-auto max-w-76ch w-full px-4 py-10">
    <ContentList
      v-slot="{ list }"
      path="/posts"
    >
      <NuxtLink
        v-for="post in list"
        :key="post._id"
        :to="post._path"
        class="mb-4 block border border-gray-200 rounded-md p-4 transition-colors hover:bg-gray-50"
      >
        <h2 class="mb-2 text-xl">
          {{ post.title }}
        </h2>

        <p class="text-gray-500">
          {{ post.description || 'No description' }}
        </p>

        <p class="text-gray-500">
          {{ post.date }}
        </p>
      </NuxtLink>
    </ContentList>
  </div>
</template>
