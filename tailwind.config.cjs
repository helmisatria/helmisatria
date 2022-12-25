/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        mob: "420px",
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "0",
        wide: "0.05em",
      },
      lineHeight: {
        100: "100%",
        140: "140%",
        150: "150%",
      },
      colors: {
        dark: "#051C29",
        cyan: {
          dark: "#093853",
        },
        green: {
          light: "#40F4B2",
        },
      },
    },
  },
  plugins: [],
};
