<script setup lang="ts">
const workingSet = [
  'TypeScript',
  'Vue',
  'Nuxt',
  'ESLint',
  'AST tooling',
  'UnoCSS',
] as const

useHead({
  title: 'About — ntnyq',
})
</script>

<template>
  <div class="page-wrap site-frame">
    <header class="page-header">
      <h1 class="page-title">About</h1>
    </header>

    <div class="prose">
      <p>
        I'm ntnyq, a front-end developer who enjoys working on the systems
        around an interface — not only what people see, but also the parsers,
        rules, types, and conventions underneath it.
      </p>
      <p>
        Most of my open-source work is about making everyday development a
        little clearer and more dependable: developer tooling, static analysis,
        typed configuration, SVG, and the small utilities that remove repeated
        friction from a project.
      </p>
    </div>

    <section class="mt-10">
      <h2 class="m-0 text-1.15rem text-$c-fg-deep font-500">Tools I use</h2>
      <ul class="mb-0 mt-4 flex flex-wrap list-none gap-x-1.2rem gap-y-2 p-0">
        <li
          v-for="item in workingSet"
          :key="item"
          class="text-0.85rem text-$c-muted font-mono"
        >
          {{ item }}
        </li>
      </ul>
    </section>
  </div>
</template>
