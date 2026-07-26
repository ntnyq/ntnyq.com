<script lang="ts" setup>
defineProps<{
  text?: string
}>()
</script>

<template>
  <div class="wh-full flex-center gap-2 text-$c-muted">
    <div class="i-ri:loader-4-fill animate-spin" />
    <span class="text-sm font-mono">{{ text || 'Loading…' }}</span>
  </div>
</template>
