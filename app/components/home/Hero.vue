<template>
  <Motion
    :initial="{ opacity: 0, y: 18 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ type: 'spring', stiffness: 200, damping: 22 }"
    as="header"
    class="mb-8 mt-8 md:(mb-10 mt-14)"
  >
    <p class="section-kicker">Developer profile</p>
    <h1 class="section-title text-5xl font-bold lh-[1.06] md:text-6xl">
      <span class="block">Hello,</span>
      <span
        class="mt-2 block text-[color:color-mix(in_srgb,var(--c-accent)_78%,var(--c-fg))]"
      >
        I'm ntnyq.
      </span>
    </h1>
    <div class="mt-7 max-w-2xl text-lg space-y-2.5">
      <p class="font-medium">Front-end developer.</p>
      <p>
        Current learning
        <NuxtLink
          to="https://www.typescriptlang.org"
          target="_blank"
          class="mx-1 rounded-sm px-1.5 py-0.5 underline-offset-4 transition-colors hover:bg-$c-accent-soft hover:text-$c-accent hover:underline"
          external
        >
          TypeScript
        </NuxtLink>
        and
        <NuxtLink
          to="https://nuxt.com"
          target="_blank"
          class="mx-1 rounded-sm px-1.5 py-0.5 underline-offset-4 transition-colors hover:bg-$c-accent-soft hover:text-$c-accent hover:underline"
          external
        >
          Nuxt
        </NuxtLink>
      </p>
    </div>
  </Motion>
</template>
