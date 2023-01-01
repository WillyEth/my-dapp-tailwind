/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        poly1: '#FAF7FE',
        poly2: '#EAE0FB',
        poly3: '#D0BAF5',
        poly4: '#AA84ED',
        poly5: '#7B3FE4',
        poly6: '#6433B9',
        poly7: '#4E2892',
        poly8: '#3C1F70',
        poly9: '#2C1752',
        polyO1: '#FFFBF7',
        polyO2: '#FEEEDF',
        polyO3: '#FDD9B8',
        polyO4: '#FABA81',
        polyO5: '#C9782F',
        polyO6: '#9E5E25',
        polyO7: '#7A491D',
        polyO8: '#593515',
        polyR1: '#FEF8F8',
        polyR2: '#FBE1E1',
        polyR3: '#F7BCBC',
        polyR4: '#F18888',
        polyG5: '#3CBEAE',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      // corePlugins: {
      //   aspectRatio: false,
      // },
      plugins: [
        // ...
        require('@tailwindcss/forms'),
        // require('@tailwindcss/aspect-ratio'),
        // require('@tailwindcss/line-clamp'),
      ],
    },
  },
  plugins: [],
}
