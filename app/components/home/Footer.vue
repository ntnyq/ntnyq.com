<template>
  <Motion
    :initial="{
      opacity: 0,
      y: 20,
    }"
    :in-view="{
      opacity: 1,
      y: 0,
    }"
    :transition="{
      type: 'spring',
      stiffness: 45,
      damping: 15,
    }"
    :in-view-options="{ once: true }"
    as="footer"
    class="mt-12 flex items-center justify-between"
  >
    <p class="text-sm op-40">ntnyq &copy; 2024-PRESENT</p>
    <div
      @click="toggleDark"
      class="cursor-pointer rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700"
    >
      <div class="i-radix-icons:sun dark:i-radix-icons:moon" />
    </div>
  </Motion>
</template>
