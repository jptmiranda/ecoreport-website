<script setup lang="ts">
const routes = [
  { to: "/", icon: "fe:home" },
  { to: "/reports/new?openCamera=true", icon: "fe:camera" },
  { to: "/profile", icon: "fe:user" },
];
</script>

<template>
  <div class="sticky bottom-0 bg-white w-full py-3">
    <div class="container mx-auto flex justify-center items-center gap-x-12">
      <NuxtLink
        v-for="route in routes"
        :to="route.to"
        class="text-gray-400 p-2 rounded-full text-3xl grid content-center"
        active-class="bg-light-green !text-dark-green"
      >
        <Icon :name="route.icon" />
      </NuxtLink>
    </div>
  </div>
</template>
