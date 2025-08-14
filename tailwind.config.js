/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // semantic tokens driven by CSS variables
        bg: "var(--bg)",
        card: "var(--card)",
        text: "var(--text)",
        muted: "var(--muted)",
        primary: "var(--primary)",
        primaryText: "var(--primary-text)",
        accent: "var(--accent)",
        border: "var(--border)",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0,0,0,0.08)",
        deep: "0 10px 30px rgba(0,0,0,0.25)",
      },
      borderRadius: {
        xl2: "1rem",
      }
    },
  },
  plugins: [],
}
