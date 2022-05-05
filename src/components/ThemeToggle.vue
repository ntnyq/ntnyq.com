<template>
  <span
    @click="toggleDark()"
    title="Toggle Color Scheme"
    class="select-none cursor-pointer"
  >
    <IRiMoonLine v-if="isDark" />
    <IRiSunLine v-else />
  </span>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from '@/composables'
</script>
