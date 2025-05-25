// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: 'https://lili.moe',
  base: '/',
  server: {host: true, open: "/"},
  trailingSlash: "ignore",
  compressHTML: true,
  integrations: [sitemap()]
});