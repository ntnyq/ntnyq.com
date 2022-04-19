<template>
  <TheHeader />
  <main class="px-7 py-10 flex-auto">
    <RouterView />
  </main>
  <TheFooter />
  <Nana />
</template>

<script lang="ts" setup>
useHead({
  meta: [
    { property: `og:title`, content: `ntnyq` },
    { name: `twitter:card`, content: `summary` },
    { name: `twitter:creator`, content: `@ntnyq` },
  ],
})
</script>
