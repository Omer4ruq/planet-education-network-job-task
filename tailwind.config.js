/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        themeColor : "#18191A",
        themeColor2 : "#242526",
        pmColor : "#DC7EEC",
        secColor: "#5846F2"
      },
      fontFamily : {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        'xs': {'max': '320px'},
      },
    },
  },
  plugins: [],
}