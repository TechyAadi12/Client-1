/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          saffron: '#d97706',
          red: '#b91c1c',
          cream: '#fff7ed',
          brown: '#78350f'
        }
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(120, 53, 15, 0.25)'
      }
    }
  },
  plugins: []
};
