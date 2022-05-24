<template>
  <span
    title="Toggle Color Scheme"
    class="select-none cursor-pointer"
    @click="toggleDark()"
  >
    <IRiMoonLine v-if="isDark" />
    <IRiSunLine v-else />
  </span>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from '@/composables'
</script>
