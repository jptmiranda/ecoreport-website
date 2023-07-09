// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: "node-server",
  },
  modules: ["@vite-pwa/nuxt", "@nuxtjs/tailwindcss", "nuxt-icon"],
  extends: ["nuxt-seo-kit"],
  app: {
    head: {
      script: [
        {
          src: "/vendor/preline/dist/preline.js",
          body: true,
          defer: true,
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://ecoreport.pt",
      siteName: "EcoReport",
      siteDescription: "Platform to report pollution!",
      language: "en",
    },
  },
});
