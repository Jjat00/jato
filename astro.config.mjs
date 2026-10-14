import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://jato.run",
  devToolbar: { enabled: false },
  output: "static",
  i18n: { locales: ["es", "en"], defaultLocale: "es", routing: { prefixDefaultLocale: false } },
  integrations: [sitemap({ filter: (page) => !page.includes("/ideas"), i18n: { defaultLocale: "es", locales: { es: "es", en: "en" } } })],
  vite: { plugins: [tailwindcss()] },
});
