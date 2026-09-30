/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          burgundy: '#6B0C28',
          darkBurgundy: '#4A081B',
          gold: '#D4AF37',
          cream: '#FAF6F0',
        },
      },
    },
  },
  plugins: [],
}