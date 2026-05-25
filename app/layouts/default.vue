<template>
  <div class="relative min-h-screen flex flex-col">
    <div
      class="pointer-events-none absolute left-0 right-0 top-0 h-20 bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--c-accent)_10%,transparent),transparent)]"
    />
    <Navbar />
    <div class="page-wrap flex-1">
      <NuxtPage />
    </div>
    <div class="site-shell pb-8">
      <Footer />
    </div>
  </div>
</template>
