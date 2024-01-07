/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        neuton: ['Neuton', 'sans-serif'],
        cinzel: ['Cinzel', 'sans-serif'],
      },
    },
    fontFamily: {
      // sans: 'Optima, sans-serif',
    },
    plugins: [],
  },
}
