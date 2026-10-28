import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Project site: https://karthikvepuriphoto-gif.github.io/karthik-vepuri-photography/
export default defineConfig({
  site: "https://karthikvepuriphoto-gif.github.io",
  base: "/karthik-vepuri-photography",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
  ],
});
