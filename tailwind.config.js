/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],

  theme: {
    extend: {
      gridTemplateColumns: {
        // 1 / 4 column
        '1-4': "1fr 4fr"
      },
      gridTemplateRows: {
        // 1/4 row
        '1-4': "1fr 4fr"
      }
    },
  },
  plugins: [],
};
