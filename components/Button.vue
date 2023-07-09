<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    text: string;
    type?: "submit" | "reset" | "button";
    full?: boolean;
    cta?: boolean;
    icon?: string;
  }>(),
  {
    type: "button",
    cta: false,
  }
);
</script>

<template>
  <button
    class="py-3 px-4 flex justify-between gap-x-2 rounded-md items-center bg-white shadow-button text-dark-green font-bold"
    :class="[
      { 'w-full': full },
      { 'bg-gradient-to-r from-dark-green to-green text-white': cta },
    ]"
    :type="type"
  >
    {{ text }}

    <Icon v-if="icon" :name="icon" />
  </button>
</template>
