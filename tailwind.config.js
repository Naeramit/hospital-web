/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#3439c1",

          "secondary": "#123891",

          "accent": "#bf352d",

          "neutral": "#222430",

          "base-100": "#f1f1f4",

          "info": "#3ca8e7",

          "success": "#136340",

          "warning": "#a65703",

          "error": "#ee1b53",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

