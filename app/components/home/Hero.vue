<template>
  <section class="hero prose">
    <h1>Hi, I'm ntnyq</h1>
    <p>
      A front-end developer. I spend most of my time with
      <strong>TypeScript</strong>, <strong>Vue</strong>, and the tooling around
      them.
    </p>
    <p>
      I maintain
      <NuxtLink to="/projects">open-source projects</NuxtLink>
      for linting, parsing, types, and browser extensions. This is where I keep
      the things I build and the
      <NuxtLink to="/posts">notes</NuxtLink>
      I write along the way.
    </p>
    <p>
      Currently learning TypeScript and Nuxt, while maintaining a small family
      of developer tools.
    </p>
    <p class="find-me">
      Find me on
      <a
        href="https://github.com/ntnyq"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          class="i-ri:github-fill"
          aria-hidden="true"
        />
        GitHub
      </a>
      <a
        href="https://bsky.app/profile/ntnyq.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          class="i-ri:bluesky-fill"
          aria-hidden="true"
        />
        Bluesky
      </a>
      <a
        href="https://twitter.com/ntnyq"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          class="i-ri:twitter-x-fill"
          aria-hidden="true"
        />
        Twitter
      </a>
      <a
        href="https://space.bilibili.com/40199161"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          class="i-ri:bilibili-fill"
          aria-hidden="true"
        />
        Bilibili
      </a>
    </p>
    <p class="muted-copy">
      If my work has helped you, consider
      <NuxtLink to="/sponsor">sponsoring me</NuxtLink>
      to keep it sustainable.
    </p>
  </section>
</template>

<style scoped>
.hero {
  padding-top: 2.5rem;
}

.hero h1 {
  margin: 0 0 1.5rem;
  font-size: 2rem;
}

.hero p {
  margin: 0 0 1.1rem;
}

.find-me {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem 1rem;
}

.find-me a {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}
</style>
