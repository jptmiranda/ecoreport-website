import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["node_modules/preline/dist/*.js"],
  plugins: [require("preline/plugin")],
  theme: {
    extend: {
      colors: {
        "dark-green": "#17742f",
        green: "#E0E482",
        "light-green": "#F9FAE6",
      },
    },
  },
};
