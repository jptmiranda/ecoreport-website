<script setup lang="ts">
const route = useRoute();
const images = ref<File[]>([]);
const imageURLs = computed(() => {
  return images.value.map((image) => URL.createObjectURL(image));
});
const cameraInput = ref<HTMLInputElement>();

onMounted(async () => {
  const openCamera = Boolean(route.query?.openCamera);
  let isMobile = false;
  let hasCamera = false;

  // check for mobile
  const userAgent = navigator.userAgent || navigator.vendor;
  if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent)) {
    isMobile = true;
  }

  // check for camera
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    console.log("enumerateDevices() not supported.");
    return;
  }

  // list cameras and microphones.
  const devices = await navigator.mediaDevices.enumerateDevices();

  devices.forEach((device) => {
    if (device.kind === "videoinput") {
      hasCamera = true;
    }
  });

  if (openCamera && isMobile && hasCamera) {
    cameraInput.value?.click();
  }
});

const handleFiles = () => {
  if (cameraInput.value) {
    if (cameraInput.value.files) {
      images.value.push(...Array.from(cameraInput.value.files));
    }
    // reset the input field
    cameraInput.value.value = "";
  }
};

const removeImage = (index: number) => {
  images.value.splice(index, 1);
};
</script>

<template>
  <div
    class="sticky top-0 left-0 bg-white w-full text-dark-green text-2xl font-bold py-4 shadow-sm"
  >
    <h1 class="text-center">New report</h1>
  </div>

  <div class="container mx-auto px-6 sm:px-8">
    <h2 class="mt-4 font-bold text-center text-2xl">Confirm report evidence</h2>

    <p class="text-sm mt-4 text-center">
      Choose the photos and vídeos you want to add as visual evidence of the
      report
    </p>

    <input
      class="hidden"
      ref="cameraInput"
      @change="handleFiles"
      type="file"
      accept="image/*"
      id="cameraInput"
      name="cameraInput"
      capture
      multiple
    />

    <button @click="cameraInput?.click()">Take/Upload Photo</button>

    <ul class="flex flex-col gap-y-2">
      <li class="relative" v-for="(url, index) in imageURLs">
        <img
          class="rounded-lg object-fit w-full"
          :src="url"
          :alt="`Image ${index + 1}`"
        />

        <button
          @click="removeImage(index)"
          class="absolute bottom-4 right-4 text-dark-green text-4xl p-1 grid content-center"
          type="button"
        >
          <div
            class="bg-light-green w-full h-full absolute opacity-80 rounded-[4px]"
          ></div>
          <Icon name="fe:trash" class="z-10" />
        </button>
      </li>
    </ul>
  </div>
</template>
