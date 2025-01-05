/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        //cards-section grid
        "max-content-6": "repeat(6, minmax(0, max-content))",
        "max-content-3": "repeat(3, minmax(0, max-content))",
        "max-content-2": "repeat(2, minmax(0, max-content))",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom, #F2C94C, #F2994A)",
      },
    },
  },
  plugins: [],
};
