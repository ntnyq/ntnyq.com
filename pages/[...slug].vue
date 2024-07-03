<script lang="ts" setup>
definePageMeta({
  layout: 'post',
})
</script>

<template>
  <ContentDoc />
  <p class="py-4">
    <NuxtLink
      to="/posts"
      class="text-gray-500 decoration-none hover:underline"
    >
      cd ..
    </NuxtLink>
  </p>
</template>
