/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],

  theme: {
    extend: {
      gridTemplateColumns: {
        // 1 / 4 column
        "1-4": "1fr 4fr",
        custom: "7fr 3fr",
      },
      gridTemplateRows: {
        // 1/4 row
        "1-4": "1fr 4fr",
      },
      boxShadow: {
        header: "0px 2px 3px rgb(175, 175, 175, 0.5)",
      },
      backgroundColor: {
        "custom-blue": "rgba(226, 232, 240, 1)",
      },
      maxWidth: {
        65: "65%",
      },
    },
  },
  plugins: [],
};
