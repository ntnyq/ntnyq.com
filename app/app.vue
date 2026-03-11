<script lang="ts" setup>
defineProps<{}>()
</script>

<template>
  <Suspense>
    <main class="flex flex-col lg:h-screen">
      <NuxtLayout />
      <NuxtPwaManifest />
    </main>

    <template #fallback>
      <div class="relative h-screen">
        <Loading />
      </div>
    </template>
  </Suspense>
</template>
