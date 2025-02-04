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
      <div class="h-screen flex flex-center gap-1 text-3xl font-medium">
        <div class="i-ri:loader-4-fill animate-spin" />
        Loading...
      </div>
    </template>
  </Suspense>
</template>
