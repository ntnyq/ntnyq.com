<template>
  <div class="min-h-screen flex flex-col">
    <a
      class="skip-link"
      href="#main-content"
    >
      Skip to content
    </a>
    <Navbar />
    <main
      id="main-content"
      class="flex-1"
    >
      <slot />
    </main>
    <Footer />
  </div>
</template>
