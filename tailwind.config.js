const { fontFamily } = require('tailwindcss/defaultTheme');


module.exports = {
  mode: 'jit',
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./content/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Fira'],
      },
      colors: {
        dark: ' #1e272e',
      },

    },
  },
  variants: {

    },
  plugins: [ require('@tailwindcss/typography')],
};