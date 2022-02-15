const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      ...defaultTheme.screens,
      xs: '320px'
    },
    colors: {
      ...colors,
      'primary': '#FF1A59',
      'text-default': '#38405F',
      'text-secondary': '#666B81'
    },
    extend: {
      fontFamily: {
        sans: ["Rubik"],
      },
    },
  },
  plugins: [],
};
