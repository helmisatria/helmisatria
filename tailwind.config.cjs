/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        mini: "484px",
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
        120: "120%",
        140: "140%",
        150: "150%",
      },
      colors: {
        blog: {
          dark: "#080B12",
          5: "#080B12",
          40: "hsla(222, 38%, 40%, 1)",
          50: "hsla(222, 38%, 50%, 1)",
          60: "#748ABE",
          80: "#BAC5DE",
          95: "#EDF0F7",
        },
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
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio")],
};
