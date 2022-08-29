/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        DarkBlue: "#1B264F",
        Blue: "#506BCA",
        Charcoal: "#353844",
        TanAcccent: "#D2AD81",
        backgroundColor: "#F5F5F8",
      },
    },
  },
  plugins: [],
};
