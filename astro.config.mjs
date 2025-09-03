import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), sitemap({ i18n: { defaultLocale: 'en' } })],
  output: 'static',
  site: 'https://misty-light-media.github.io/vitaledge-site/',
  base: '/vitaledge-site/',
  trailingSlash: 'ignore',
});
