/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': { 'min': '768px', 'max': '991px'},
      'desktop': {'min': '992px'}
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      heading: ['Oswald', 'sans-serif']
    },
    extend: {
      colors: {
        main: {
          100: '#2C2D31',
          200: '#1E1E21'
        },
        sub: {
          1: '#5160F9',
          2: '#B39377'
        },
      }
    },
  },
  plugins: [],
}
