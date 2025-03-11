/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        first: '#3D8D7A',
        second: '#B3D8A8',
        third: '#FBFFE4',
        fourth: '#A3D1C6',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--tw-first': theme('colors.first'),
          '--tw-second': theme('colors.second'),
          '--tw-third': theme('colors.third'),
          '--tw-fourth': theme('colors.fourth'),
        },
      })
    },
  ],
}
