/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"]
      },
      colors: {
        background: "#050505",
        foreground: "#f5f5f5",
        accent: "#8c8cff"
      },
      boxShadow: {
        glass: "0 25px 80px rgba(0,0,0,0.35)"
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at top, rgba(140,140,255,0.3), rgba(5,5,5,0.9))"
      }
    }
  },
  plugins: []
};
