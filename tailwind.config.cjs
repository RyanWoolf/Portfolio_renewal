/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      'tablet': { 'min': '768px', 'max': '991px'},
      'desktop': {'min': '992px'}
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      heading: ['Poppins', 'sans-serif']
    },
    extend: {
      dropShadow: {
        'sub1': '0 0 7px #6a77fa',
        'sub2': '0 0 7px #BCA087',
      },
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
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
}
