/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#fff',
          200: '#F0F5F9',
          400: '#DEEEF6',
        },
        secondary: {
          100: '#EADED7',
          200: '#E5D1B8',
          300: '#C4A490',
          400: '#AA7B5F',
          500: '#443327',
        },
        text: '#112A43',
        textLight: '#6E89A0',
        textDark: '#222323',
      },
    },
  },
  plugins: [],
}
