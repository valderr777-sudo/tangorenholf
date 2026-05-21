// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://tangorenholf.com",
  output: "server",
  security: {
    checkOrigin: false,
  },
  adapter: node({
    mode: "standalone",
  }),
  devToolbar: {
    enabled: false
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
