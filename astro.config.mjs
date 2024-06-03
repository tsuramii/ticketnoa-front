import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://tsuramii.github.io",
  base: "/ticketnoa-front",
  integrations: [tailwind()],
});
