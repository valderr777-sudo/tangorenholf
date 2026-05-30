// @ts-check
import { defineConfig, sessionDrivers } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://tangorenholf.com",
  output: "server",
  security: {
    checkOrigin: false,
  },
  adapter: cloudflare({
    imageService: "compile",
  }),
  session: {
    driver: sessionDrivers.lruCache(),
  },
  devToolbar: {
    enabled: false
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
