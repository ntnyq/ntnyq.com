<script lang="ts" setup></script>

<template>
  <footer class="mt-12 flex items-center justify-between">
    <p class="text-sm op-40">ntnyq &copy; 2024</p>
    <div
      @click="toggleDark"
      class="cursor-pointer rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700"
    >
      <div class="i-radix-icons:sun dark:i-radix-icons:moon" />
    </div>
  </footer>
</template>
