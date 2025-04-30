import { defineConfig } from "astro/config";
import mkcert from "vite-plugin-mkcert";
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";

export default defineConfig({
  site: "https://pakui.dmostovyi.com",
  vite: {
    plugins: [mkcert(), tailwindcss()],
  },
  integrations: [svelte()],
});
