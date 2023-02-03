/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        colors: {
          "ill": "#F5DF4D",
          "ultimate": "#939597",
          "ginger": "#7c4c53",
          "nights": "#363b48",
          "crystal": "#c2bfb5",
          "placid": "#83b5dd",
          "oil": "#808a73",
          "lav":"#AFA4CE",
          "lem":"#ee6d8a",
          "readingred":"#f95738",
          "readingblue":"#0d3b66",
          "readingcream":"#faf0ca",
        }
      },
    },  
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
