/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './assets/js/app.js', './resources/js/**/*.{js, jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://besnik-space.fra1.cdn.digitaloceanspaces.com/random/nCUSSzHA8wNqvtDXTPFz1670487153.svg')",
      }
    },
  },
  plugins: [],
}
