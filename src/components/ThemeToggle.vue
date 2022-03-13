<template>
  <a
    @click="toggleDark"
    title="Toggle Color Scheme"
    class="select-none"
  >
    <IRiMoonLine v-if="isDark" />
    <IRiSunLine v-else />
  </a>
</template>

<script setup lang="ts">
import { isDark } from '@/composables'
const toggleDark = () => {
  isDark.value = !isDark.value
}
</script>
