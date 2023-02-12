/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brightPurple": "#7B1FA2",
        "darkPurple": "#431C60",
        "lightBlue": "#AAB5E0",
        "royalBlue": "#4527A0",
        "vividGreen": "#8BC34A",
        "Black": "#272727",
        "Black-rgba": "rgba(39, 39, 39, 0.9)",
        "black-rgba": "rgba(0, 0, 0, 0.8)",
        "backgroundColor": "rgb(38, 5, 60)"
      }
    },
  },
  plugins: [],
}
