/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        // permukaan section selang-seling (pengganti slate-50)
        surface: "hsl(var(--surface-muted) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        // Elevated panel token for compact product surfaces.
        panel: {
          DEFAULT: "hsl(var(--panel) / <alpha-value>)",
          foreground: "hsl(var(--panel-foreground) / <alpha-value>)",
          muted: "hsl(var(--panel-muted) / <alpha-value>)",
        },
        // aksen sekunder emerald
        emerald: {
          DEFAULT: "hsl(var(--emerald) / <alpha-value>)",
          soft: "hsl(var(--emerald-soft) / <alpha-value>)",
        },
        // Brand Zona Kasir: biru logo #1987D1 + turunannya.
        brand: {
          50: "#eef7fc",
          100: "#d5eaf7",
          200: "#aed6ef",
          300: "#79bce6",
          400: "#3f9fda",
          500: "#1b8ace",
          600: "#1987d1",
          700: "#0f6cab",
          800: "#11588a",
          900: "#134a71",
          950: "#0c2d46",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        soft: "0 6px 18px -12px rgba(15, 23, 42, 0.20)",
        card: "0 18px 44px -30px rgba(15, 23, 42, 0.24)",
      },
      fontFamily: {
        // Body dan heading menggunakan Plus Jakarta Sans untuk karakter brand yang konsisten.
        sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "Plus Jakarta Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(25,135,209,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(25,135,209,0.035) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
