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
        'black-rgba': 'rgba(0, 0, 0, 0.6)'
      }
    },
  },
  plugins: [],
}
