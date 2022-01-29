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
      'primary': '#FF1A59'
    },
    extend: {
      fontFamily: {
        sans: ["Rubik"],
      },
    },
  },
  plugins: [],
};
