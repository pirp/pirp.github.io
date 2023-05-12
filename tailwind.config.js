/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
      'fira-sans':['Fira Sans','sans-serif'],
        'architects-daughter':['Architects Daughter', 'cursive']
      }},
  },
  plugins: [],
}

