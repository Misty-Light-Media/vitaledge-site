import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://misty-light-media.github.io/vitaledge-site/',
  base: '/vitaledge-site/',
});
