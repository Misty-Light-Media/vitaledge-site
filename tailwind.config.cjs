/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./node_modules/swiper/**/*.{js,css}" // ✅ Add this to scan Swiper files
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
