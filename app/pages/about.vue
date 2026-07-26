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
  <div class="site-frame page-wrap">
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

    <section class="working-set">
      <h2>Tools I use</h2>
      <ul>
        <li
          v-for="item in workingSet"
          :key="item"
        >
          {{ item }}
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.working-set {
  margin-top: 2.5rem;
}

.working-set h2 {
  margin: 0;
  color: var(--c-fg-deep);
  font-size: 1.15rem;
  font-weight: 500;
}

.working-set ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.2rem;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}

.working-set li {
  color: var(--c-muted);
  font-family: var(--font-mono);
  font-size: 0.85rem;
}
</style>
