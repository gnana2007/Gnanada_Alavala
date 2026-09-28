/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lagoon: {
          bg: "#F5FAFA",
          surface: "#FFFFFF",
          primary: "#0B7285",
          secondary: "#14919B",
          accent: "#39B8B0",
          deep: "#102A2E",
          muted: "#557174",
          border: "rgba(11, 114, 133, 0.12)",
          glass: "rgba(255, 255, 255, 0.60)",
          glassBorder: "rgba(255, 255, 255, 0.75)",
          glow: "rgba(57, 184, 176, 0.14)",
          glowSoft: "rgba(11, 114, 133, 0.08)",
        },
      },
      fontFamily: {
        heading: ["'Poppins'", "sans-serif"],
        display: ["'Poppins'", "sans-serif"],
        body: ["'Karla'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        signature: ["'Shamson Signature'", "'Alex Brush'", "'Allura'", "'Caveat'", "cursive"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(11, 114, 133, 0.06)",
        "glass-sm": "0 4px 16px 0 rgba(11, 114, 133, 0.04)",
        "glass-lg": "0 20px 50px -10px rgba(11, 114, 133, 0.12)",
        glow: "0 0 35px rgba(57, 184, 176, 0.18)",
      },
    },
  },
  plugins: [],
}
