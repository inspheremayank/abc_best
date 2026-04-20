/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          brand: '#00A0B0',
          light: '#00b8cc',
          dark: '#007f8c',
        },
        navy: {
          brand: '#1a3c5e',
          light: '#234f7a',
          dark: '#112840',
        },
      },
    },
  },
  plugins: [],
};
