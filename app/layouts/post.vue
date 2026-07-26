<template>
  <div class="site-app">
    <a
      class="skip-link"
      href="#main-content"
    >
      Skip to content
    </a>
    <Navbar />
    <main
      id="main-content"
      class="site-main"
    >
      <slot />
    </main>
    <Footer />
  </div>
</template>
