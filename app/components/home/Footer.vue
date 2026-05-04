<script lang="ts" setup>
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
  <Motion
    :initial="{
      opacity: 0,
      y: 20,
    }"
    :while-in-view="{
      opacity: 1,
      y: 0,
    }"
    :transition="{
      type: 'spring',
      stiffness: 45,
      damping: 15,
    }"
    :in-view-options="{
      once: true,
    }"
    as="footer"
    class="mt-12 flex items-center justify-between"
  >
    <p class="text-sm op-50">
      ntnyq &copy; 2024-PRESENT
      <template v-if="shortCommitSha">
        -
        <NuxtLink
          v-if="commitUrl"
          :to="commitUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-xs font-mono op-80 transition-opacity hover:op-100"
        >
          {{ shortCommitSha }}
        </NuxtLink>
        <span
          v-else
          class="text-xs font-mono"
        >
          {{ shortCommitSha }}
        </span>
      </template>
    </p>

    <div
      @click="toggleDark"
      class="cursor-pointer rounded-md p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700"
    >
      <div class="i-radix-icons:sun dark:i-radix-icons:moon" />
    </div>
  </Motion>
</template>
