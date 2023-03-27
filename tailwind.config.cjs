/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFE0B3",

          secondary: "#13d102",

          accent: "#a3ffbd",

          neutral: "#221B2C",

          "base-100": "#E9E7E9",

          info: "#68B0F3",

          success: "#105638",

          warning: "#F7C26E",

          error: "#F8444D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
