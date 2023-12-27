/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    // tambahkan path sesuai kebutuhan proyek Anda
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Roboto Mono', 'monospace'], 
      },
    },
  },
  plugins: [],
};

