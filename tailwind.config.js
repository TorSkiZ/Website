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
        'first-dark': '#18230F',
        'second-dark': '#27391C',
        'third-dark': '#255F38',
        'fourth-dark': '#1F7D53',
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
          '--tw-first-dark': theme('colors.first-dark'),
          '--tw-second-dark': theme('colors.second-dark'),
          '--tw-third-dark': theme('colors.third-dark'),
          '--tw-fourth-dark': theme('colors.fourth-dark'),
        },
      })
    },
  ],
}
