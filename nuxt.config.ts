// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  css: ["~/assets/css/main.css"],
  i18n: {
    locales: [
      {
        code: "en",
        file: "en.yaml",
      },
      {
        code: "pt",
        file: "pt.yaml",
      },
    ],
    langDir: "lang",
    defaultLocale: "pt",
  },
});
