<template>
  <header class="header z40">
    <RouterLink
      class="w-10 h-10 absolute lg:fixed m-6 select-none outline-none"
      to="/"
      focusable="false"
    >
      <img
        src="/static/icons/icon-72x72.png"
        alt="LOGO"
      >
    </RouterLink>
    <nav class="nav">
      <div class="spacer" />
      <div class="right">
        <RouterLink to="/posts">
          Blog
        </RouterLink>
        <a
          href="https://twitter.com/ntnyq"
          title="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IFeatherTwitter />
        </a>
        <a
          href="https://github.com/ntnyq"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IUilGithubAlt />
        </a>
        <ThemeToggle />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav {
  display: grid;
  grid-template-columns: auto max-content;
  padding: 2rem;
  width: 100vw;
}

.nav > * {
  margin: auto;
}

.nav a {
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
  cursor: pointer;
}

.nav a:hover {
  opacity: 1;
}

.nav .right {
  display: grid;
  gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right > * {
  margin: auto;
}
</style>
