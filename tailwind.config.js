/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#fff',
          200: '#DEEEF6',
        },
        secondary: {
          100: '#EADED7',
          200: '#E5D1B8',
          300: '#E0B59A',
          400: '#AA7B5F',
          500: '#443327',
        },
        text: '#112A43',
      },
    },
  },
  plugins: [],
}
