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
  <footer class="mt-auto pb-10 pt-8">
    <div
      class="site-frame flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
    >
      <p class="m-0 text-0.78rem text-$c-muted">
        CC BY-NC-SA 4.0 2024—PRESENT © ntnyq
      </p>
      <div class="flex items-center gap-4">
        <NuxtLink
          to="/sponsor"
          class="soft-link m-0 text-0.78rem text-$c-muted"
        >
          Sponsor
        </NuxtLink>
        <NuxtLink
          v-if="commitUrl && shortCommitSha"
          :to="commitUrl"
          class="soft-link m-0 text-0.78rem text-$c-muted"
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
