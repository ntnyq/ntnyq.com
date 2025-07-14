<script lang="ts" setup>
defineProps<{
  text?: string
}>()
</script>

<template>
  <div class="wh-full flex-center gap-1 text-3xl text-primary font-medium">
    <div class="i-ri:loader-4-fill animate-spin" />
    <span>{{ text || 'Loading...' }}</span>
  </div>
</template>
