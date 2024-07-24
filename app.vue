<template>
  <Suspense>
    <main class="flex flex-col lg:h-screen">
      <NuxtLayout />
      <NuxtPwaManifest />
    </main>

    <template #fallback>
      <div class="h-screen flex flex-center gap-1 text-3xl font-bold">
        <div class="i-ri:loader-4-fill animate-spin"></div>
        Loading...
      </div>
    </template>
  </Suspense>
</template>
