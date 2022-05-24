<template>
  <div
    v-if="frontmatter.display || frontmatter.title"
    class="prose m-auto pb-8"
  >
    <h1 class="mb-0">
      {{ frontmatter.display || frontmatter.title }}
    </h1>
    <p
      v-if="frontmatter.date"
      class="opacity-50 !-mt-2"
    >
      {{ frontmatter.date }}
      <span v-if="frontmatter.duraction">&middot; {{ frontmatter.duraction }}</span>
    </p>
    <p
      v-if="frontmatter.subtitle"
      class="opacity-50 !-mt-6 italic"
    >
      {{ frontmatter.subtitle }}
    </p>
  </div>
  <article ref="content">
    <slot />
  </article>
  <div
    v-if="route.path !== `/`"
    class="prose m-auto my-8"
  >
    <RouterLink
      :to="route.path.split(`/`).slice(0, -1).join(`/`) || `/`"
      class="font-mono no-underline opacity-50 hover:opacity-75"
    >
      cd ..
    </RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { isClient } from '@vueuse/core'

defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})

const route = useRoute()

if (isClient) {
  const navigate = () => {
    if (location.hash) {
      document
        .querySelector(decodeURIComponent(location.hash))
        ?.scrollIntoView({ behavior: `smooth` })
    }
  }

  useEventListener(window, `haschange`, navigate, false)

  onMounted(() => {
    document.querySelectorAll(`a[href^="#"]`).forEach(anchor => {
      anchor.addEventListener(`click`, evt => {
        evt.preventDefault()
        const href = anchor.getAttribute(`href`)!
        history.replaceState({}, ``, href)
        navigate()
      })
    })
  })

  navigate()
  setTimeout(navigate, 500)
}
</script>
