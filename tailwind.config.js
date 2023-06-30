/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Purple: "hsl(259, 100%, 65%)",
        lightRed: "hsl(0, 100%, 67%)",
        offWhite: "hsl(0, 0%,94%)",
        lightGray: "hsl(0, 0%, 86%)",
        SmokeyGrey: "hsl(0, 1%, 44%)",
        OffBlack: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
