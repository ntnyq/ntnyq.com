<script lang="ts" setup>
import type { ISocial } from '~/types'

const socialList = shallowRef<ISocial[]>([
  {
    text: 'GitHub',
    link: 'https://github.com/ntnyq',
    icon: 'i-ri:github-fill',
    class: 'hover:bg-gray-700 dark:hover:bg-white dark:hover:text-gray-900',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ntnyq',
    icon: 'i-fa-brands:twitter',
    class: 'hover:bg-#00ACEE',
  },
  {
    label: 'Bluesky',
    link: 'https://bsky.app/profile/ntnyq.com',
    icon: 'i-ri:bluesky-fill',
    class: 'hover:bg-#0057a8',
  },
  {
    label: 'Bilibili',
    link: 'https://space.bilibili.com/40199161',
    icon: 'i-ri:bilibili-fill',
    class: 'hover:bg-#fb7299',
  },
  {
    text: 'Sponsor',
    link: '/sponsor',
    icon: 'i-ri:heart-fill',
    class: 'hover:bg-#bf3989',
  },
])
</script>

<template>
  <div class="mt-4">
    <SocialItem
      v-for="item in socialList"
      :key="item.text"
      :item
    />
  </div>
</template>
