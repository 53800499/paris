/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      "8xl": [
        "120px",
        { lineHeight: "120px", letterSpacing: "-6px", fontWeight: "500" }
      ],
      "7xl": [
        "72px",
        { lineHeight: "80px", letterSpacing: "-4.5px", fontWeight: "600" }
      ],
      "6xl": [
        "55px",
        { lineHeight: "60px", letterSpacing: "-2.5px", fontWeight: "500" }
      ],
      "5xl": [
        "48px",
        { lineHeight: "54px", letterSpacing: "-1.6px", fontWeight: "500" }
      ],
      "4xl": [
        "36px",
        { lineHeight: "44px", letterSpacing: "-1.2px", fontWeight: "500" }
      ],
      "3xl": [
        "28px",
        { lineHeight: "34px", letterSpacing: "-0.8px", fontWeight: "500" }
      ],
      "2xl": [
        "24px",
        { lineHeight: "30px", letterSpacing: "-1px", fontWeight: "500" }
      ],
      xl: [
        "24px",
        { lineHeight: "30px", letterSpacing: "-1px", fontWeight: "400" }
      ],
      lg: [
        "21px",
        { lineHeight: "30px", letterSpacing: "-0.8px", fontWeight: "400" }
      ],
      sm: [
        "21px",
        { lineHeight: "23px", letterSpacing: "-0.6px", fontWeight: "400" }
      ],
      caption1: [
        "20px",
        { lineHeight: "24px", letterSpacing: "-0.6px", fontWeight: "400" }
      ],
      caption2: [
        "18px",
        { lineHeight: "20px", letterSpacing: "-0.3px", fontWeight: "400" }
      ],
      caption3: [
        "16px",
        { lineHeight: "18px", letterSpacing: "-0.5px", fontWeight: "400" }
      ],
      caption4: [
        "13px",
        { lineHeight: "15px", letterSpacing: "-0.2px", fontWeight: "400" }
      ]
    },
    colors: {
      white: "#ffffff",
      primary: {
        200: "#efeffc",
        300: "#cfd0f6",
        400: "#7f81e8",
        DEFAULT: "#5F62E2",
        600: "#5658C8"
      },
      secondary: {
        200: "#eaf8f4",
        300: "#bfe9de",
        400: "#56c4a7",
        DEFAULT: "#2AB691",
        600: "#26a482"
      },
      grad: "#b2b2b2",
      gray: {
        400: "#f2f2f22",
        500: "#cfde5e5e50f6",
        600: "#b2b2b2",
        700: "#808080",
        800: "#333333",
        900: "#EFEDEDFF",
        DEFAULT: "#000000"
      }
    },
    borderRadius: {
      DEFAULT: "10px",
      full: "9999px"
    },
    
    screens: {
      mb: "439px",
      sm: "700px",
      md: "768px",
      custom: "900px", // Nouveau breakpoint
      lg: "1146px",
      xl: "1280px",
      "2xl": "1536px"
    },
    extend: {}
  },
  plugins: []
};

