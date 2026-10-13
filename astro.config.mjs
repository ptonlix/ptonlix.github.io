import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ptonlix.github.io',
  integrations: [sitemap()],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
