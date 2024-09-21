/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        white: {
          almost: '#FFFDFA'
        },
        blue: {
          'dark-space': '#00001A',
        },
        gunmetal: '#5E607A',
        vermillion: {
          light: '#F15D51',
        },
        silver: '#C5C6CE',
        yellow: '#E9AA52'
      }
    },
  },
  plugins: [],
}