const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./**/*.js', './**/*.vue'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors,
        orange: colors.orange,
        gray: colors.blueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
