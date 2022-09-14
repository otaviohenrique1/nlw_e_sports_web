/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('./background_galaxy.png')"
      }
    },
  },
  plugins: [],
}
