/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./modals/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { min: "1600px" },
      xl: { max: "1599px" },
      lg: { max: "1280px" },
      md: { max: "1024px" },
      sm: { max: "768px" },
      "2xs": { max: "640px" },
      xs: { max: "400px" },
    },
    extend: {
      colors: {
        white: "var(--white)",
        "faint-black": "var(--faint-black)",
        "light-gray": "var(--light-gray)",
        "lighter-gray": "var(--lighter-gray)",
        "lightest-gray": "var(--lightest-gray)",
        "input-gray": "var(--input-gray)",
        "primary-red": "var(--primary-red)",
        "primary-green": "var(--primary-green)",
        "dashboard-active-bg": "var(--dashboard-active-bg)",
        "primary-btn-disabled": "var(--primary-btn-disabled)",
        "usage-bg": "var(--usage-bg)",
        "exchange-rate-text": "var(--exchange-rate-text)",
        "gray-btn": "var(--gray-btn)",
        "gray-text": "var(--gray-text)",
        "light-btn": "var(--light-btn)",
        "light-btn-border": "var(--light-btn-border)",
        "view-blue": "var(--view-blue)",
      },
      fontFamily: {
        jakarta: "jakarta",
        "jakarta-bold": "jakarta-bold",
      },
    },
  },
  plugins: [],
};
