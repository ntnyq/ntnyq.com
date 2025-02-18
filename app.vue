<script lang="ts" setup>
import { Analytics } from '@vercel/analytics/nuxt'
</script>

<template>
  <Suspense>
    <main class="flex flex-col lg:h-screen">
      <NuxtLayout />
      <Analytics />
      <NuxtPwaManifest />
    </main>

    <template #fallback>
      <div class="relative h-screen">
        <Loading />
      </div>
    </template>
  </Suspense>
</template>
