/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,css}', './index.html'],
  theme: {
    extend: {
      colors: {
        orange: '#FF5C00',
        'orange-light': '#ffcbae',
        gray: '#151515',
        'gray-light': '#252525',
      },
    },
  },
};