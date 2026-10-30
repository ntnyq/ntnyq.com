<script setup lang="ts">
useHead({
  title: 'Sponsor — ntnyq',
})
</script>

<template>
  <div class="page-wrap content-frame">
    <header class="page-header">
      <h1 class="page-title">Sponsor</h1>
      <p class="page-description">
        If one of my open-source projects has helped you, you can support its
        continued maintenance through WeChat.
      </p>
    </header>

    <figure class="m-0 mb-8 max-w-64 w-full">
      <img
        src="/images/sponsor/wechat.png"
        alt="WeChat sponsor QR code"
        class="block h-auto w-full rounded-xl"
      />
      <figcaption class="mt-3 text-0.8rem text-$c-muted">
        Scan with WeChat. Thank you!
      </figcaption>
    </figure>

    <NuxtLink
      to="/projects"
      class="soft-link inline-flex items-center gap-0.35rem text-0.9rem focus-ring"
    >
      <span
        class="i-ri:arrow-left-line"
        aria-hidden="true"
      />
      Back to projects
    </NuxtLink>
  </div>
</template>
