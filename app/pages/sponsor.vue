<template>
  <div class="site-shell flex-center flex-1 xl:text-lg">
    <Motion
      :initial="{ opacity: 0, y: 18, scale: 0.98 }"
      :animate="{ opacity: 1, y: 0, scale: 1 }"
      :transition="{ type: 'spring', stiffness: 180, damping: 20 }"
      as="div"
      class="surface-card relative flex flex-col items-center gap-4 p-7"
    >
      <p class="section-kicker">Support</p>
      <h2 class="section-title text-2xl font-semibold">Wechat</h2>
      <img
        class="mx-auto block max-w-300px rounded-lg"
        src="/images/sponsor/wechat.png"
        alt="Wechat Sponsor QRCode"
      />
    </Motion>
  </div>
</template>
