/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      primary: "#1298f8",
      secondary: "#99bdd6",
      content: "#0c0e0e",
      background: "#f9fbfb",
      accent: "#69a7d3",
    },
    fontFamily: {
      sans: ["Miriam Libre", "sans-serif"],
      print: ["Arial", "sans-serif"],
    },
  },
  plugins: [],
};
