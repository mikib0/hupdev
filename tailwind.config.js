/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './constants/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#FF5C00',
        'orange-light': '#ffcbae',
        gray: '#151515',
        'gray-light': '#252525',
      },
      padding: {
        dx: '170px',
      },
      margin: {
        dx: '170px',
      },
      fontSize: {
        cxl: ['1.2rem', { lineHeight: '1.8rem' }],
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
    },
  },
};
