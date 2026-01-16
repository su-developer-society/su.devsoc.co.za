/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: ['text-4xl', 'p-8', 'flex', 'items-center'], // temporary test
  theme: {
    extend: {},
  },
  plugins: [],
}

