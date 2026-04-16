/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ea580c', // orange-600
          dark: '#c2410c',
        },
        secondary: {
          DEFAULT: '#b91c1c', // red-700
          dark: '#991b1b',
        },
        cream: {
          DEFAULT: '#fefce8', // yellow-50
          dark: '#fef08a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
