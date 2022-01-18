const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
