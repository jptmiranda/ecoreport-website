<script setup lang="ts">
const routes = [
  { to: "routes.home", text: "navbar.home" },
  { to: "routes.analytics", text: "navbar.analytics" },
  { to: "routes.partners", text: "navbar.partners" },
  { to: "routes.sponsors", text: "navbar.sponsors" },
  { to: "routes.app", text: "navbar.app" },
];
</script>

<template>
  <div class="w-full shadow-md sticky bg-white">
    <div
      class="container mx-auto px-2 md:px-4 flex justify-between items-center h-16"
    >
      <NuxtLink
        to="/"
        class="text-transparent bg-gradient-to-r from-[#17742F] to-[#E0E482] text-2xl bg-clip-text leading-normal font-bold inline-block"
      >
        <span class="text-[#17742f] font-normal">Eco</span>Report
      </NuxtLink>

      <div class="flex gap-x-12 justify-center items-center">
        <NuxtLink
          v-for="route in routes"
          :to="$t(route.to)"
          class="text-sm font-medium after:block after:content-[attr(data-text)] after:content-[attr(data-text) / ''] after:h-[1px] after:invisible after:overflow-hidden after:select-none after:pointer-events-none after:font-bold after:text-transparent"
          active-class="text-dark-green !font-bold"
          :data-text="$t(route.text)"
        >
          {{ $t(route.text) }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
