<script setup lang="ts">
const { commitSha, repositoryUrl } = useAppConfig()

const shortCommitSha = computed(() => commitSha?.slice(0, 7))
const commitUrl = computed(() => {
  if (!commitSha || !repositoryUrl) {
    return null
  }

  return `${repositoryUrl}/commit/${commitSha}`
})
</script>

<template>
  <footer class="site-footer">
    <div class="site-frame footer-inner">
      <p>CC BY-NC-SA 4.0 2024—PRESENT © ntnyq</p>
      <div>
        <NuxtLink
          to="/sponsor"
          class="soft-link"
        >
          Sponsor
        </NuxtLink>
        <NuxtLink
          v-if="commitUrl && shortCommitSha"
          :to="commitUrl"
          class="soft-link"
          target="_blank"
          rel="noopener noreferrer"
          external
        >
          {{ shortCommitSha }}
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: auto;
  padding-block: 2rem 2.5rem;
}

.footer-inner,
.footer-inner div {
  display: flex;
  align-items: center;
}

.footer-inner {
  justify-content: space-between;
  gap: 1rem;
}

.footer-inner div {
  gap: 1rem;
}

.footer-inner p,
.footer-inner a {
  margin: 0;
  color: var(--c-muted);
  font-size: 0.78rem;
}

@media (max-width: 520px) {
  .footer-inner {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
