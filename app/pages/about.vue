<script lang="ts" setup>
useHead({
  title: 'About - ntnyq',
})
</script>

<template>
  <div class="site-shell xl:text-lg">
    <Motion
      :initial="{ opacity: 0, y: 20 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ type: 'spring', stiffness: 45, damping: 15 }"
      :in-view-options="{ once: true }"
      as="header"
      class="mb-7 mt-4"
    >
      <p class="section-kicker">Profile</p>
      <h1 class="section-title text-4xl font-bold">About</h1>
    </Motion>

    <Motion
      :initial="{ opacity: 0, y: 20 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ type: 'spring', stiffness: 45, damping: 15, delay: 0.1 }"
      :in-view-options="{ once: true }"
      as="div"
      class="surface-card p-6 text-lg space-y-4"
    >
      <p>
        I'm ntnyq, a front-end developer focused on building tools and open
        source projects that improve developer experience.
      </p>
      <p>
        Most of my work sits at the boundary between code quality and team
        velocity.
      </p>
      <p class="muted-copy">
        I work primarily with TypeScript, Vue, and the broader JavaScript
        ecosystem. Most of my projects revolve around linting, code quality, and
        developer tooling.
      </p>
    </Motion>
  </div>
</template>
