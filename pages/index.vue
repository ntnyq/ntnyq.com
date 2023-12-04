<template>
  <div class="h-screen w-screen flex flex-col gap-3 justify-center items-center">
    <h1 class="text-3xl font-normal text-primary">Hello world</h1>

    <button class="btn-base">Base</button>

    <button class="btn-solid">Solid</button>

    <button class="btn-outline">Outline</button>

    <button class="btn-text">text</button>

    <button class="btn-action-icon">
      <div class="i-ep-user"></div>
    </button>

    <button class="btn-danger">Danger</button>

    <div class="w-100px h-100px border border-primary"></div>

    <a
      class="text-link-rounded"
      href="https://ntnyq.com"
      target="_blank"
    >
      Hello world
    </a>

    <input
      class="input-base w-300px"
      type="text"
      placeholder="Please fill..."
    />

    <h1 class="h1"></h1>

    <select class="w-300px input-base select-setting">
      <option value="Banana">Banana</option>
      <option value="Apple">Apple</option>
    </select>
  </div>
</template>
