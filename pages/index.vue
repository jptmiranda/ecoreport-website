<script setup lang="ts">
definePageMeta({ layout: "homepage" });
</script>

<template>
  <h1
    class="mt-4 text-transparent bg-gradient-to-r from-[#17742F] to-[#E0E482] text-[40px] bg-clip-text leading-normal font-bold inline-block"
  >
    <span class="text-[#17742f] font-normal">Eco</span>Report
  </h1>

  <h2 class="mt-3 text-xl font-bold text-[#17742f]">
    Faça a diferença, report a poluição
  </h2>

  <img
    width="342"
    height="382"
    class="mx-auto w-full h-auto"
    src="/logo.png"
    alt="Ecoreport"
  />

  <div class="flex flex-col gap-y-3">
    <Button
      text="New Report"
      full
      cta
      icon="fe:arrow-right"
      @click="navigateTo('/reports/new')"
    />

    <Button
      text="View Reports"
      full
      icon="fe:arrow-right"
      @click="navigateTo('/reports')"
    />

    <Button
      text="About Us"
      full
      icon="fe:arrow-right"
      @click="navigateTo('/about')"
    />

    <Button
      text="Support Us"
      full
      icon="fe:arrow-right"
      @click="navigateTo('/support')"
    />
  </div>
</template>
