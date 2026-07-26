<script setup lang="ts">
useHead({
  title: 'Sponsor — ntnyq',
})
</script>

<template>
  <div class="content-frame page-wrap">
    <header class="page-header">
      <h1 class="page-title">Sponsor</h1>
      <p class="page-description">
        If one of my open-source projects has helped you, you can support its
        continued maintenance through WeChat.
      </p>
    </header>

    <figure class="sponsor-figure">
      <img
        src="/images/sponsor/wechat.png"
        alt="WeChat sponsor QR code"
      />
      <figcaption>Scan with WeChat. Thank you!</figcaption>
    </figure>

    <NuxtLink
      to="/projects"
      class="soft-link back-link focus-ring"
    >
      <span
        class="i-ri:arrow-left-line"
        aria-hidden="true"
      />
      Back to projects
    </NuxtLink>
  </div>
</template>

<style scoped>
.sponsor-figure {
  width: min(100%, 16rem);
  margin: 0 0 2rem;
}

.sponsor-figure img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0.75rem;
}

.sponsor-figure figcaption {
  margin-top: 0.75rem;
  color: var(--c-muted);
  font-size: 0.8rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.9rem;
}
</style>
