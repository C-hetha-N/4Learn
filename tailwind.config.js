/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto" : ['roboto', 'sans-serif'],
      },
      colors: {
      "rd" : "#f0f5f9",  
      },
      height : {
        "567" : "567px"
      }
    },
  },
  plugins: [],
}