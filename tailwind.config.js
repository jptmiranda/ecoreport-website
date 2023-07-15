/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "storyblok/**/*.{vue,js}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "dark-green": "#17742f",
        green: "#E0E482",
        "light-green": "#F9FAE6",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
