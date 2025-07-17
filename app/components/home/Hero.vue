<template>
  <header class="mb-8 mt-12 md:(mb-12 mt-18)">
    <h1 class="title text-5xl font-bold">
      <span class="block">Hello, </span>
      <span class="mt-2 block">I'm ntnyq.</span>
    </h1>
    <div class="mt-8 space-y-2">
      <p>Front-end developer</p>
      <p>
        Current learning
        <NuxtLink
          to="https://www.typescriptlang.org"
          target="_blank"
          class="mx-1 underline-offset-3 transition-colors hover:color-primary hover:underline"
          external
        >
          TypeScript
        </NuxtLink>
        and
        <NuxtLink
          to="https://nuxt.com"
          target="_blank"
          class="mx-1 underline-offset-3 transition-colors hover:color-primary hover:underline"
          external
        >
          Nuxt
        </NuxtLink>
      </p>
    </div>
  </header>
</template>
