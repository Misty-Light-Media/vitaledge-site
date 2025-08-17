// tailwind.config.mjs

import { defineConfig } from "tailwindcss";
import typography from '@tailwindcss/typography';

export default defineConfig({
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend:{},
  },
  plugins: [
    typography(),
  ],
});