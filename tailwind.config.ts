import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        arcadia: {
          primary: "#C70039",
          dark: "#191f42",
          secondary: "#FF696A",
          light: "#FFF5E1",
          white: "#FFFFFF",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        testimonial: {
          bg: "#1a1f42",
          card: "#dc143c",
          center: "rgba(84, 81, 112, 0.5)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-slow": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-1": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(10px, -10px)" },
          "50%": { transform: "translate(0, -20px)" },
          "75%": { transform: "translate(-10px, -10px)" },
        },
        "float-2": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-15px, 10px)" },
          "50%": { transform: "translate(0, 20px)" },
          "75%": { transform: "translate(15px, 10px)" },
        },
        "float-3": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(12px, 15px)" },
          "50%": { transform: "translate(0, 30px)" },
          "75%": { transform: "translate(-12px, 15px)" },
        },
        orbit: {
          "0%": {
            transform: "rotate(0deg) translateX(225px) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(225px) rotate(-360deg)",
          },
        },
        "orbit-mobile": {
          "0%": {
            transform: "rotate(0deg) translateX(150px) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(150px) rotate(-360deg)",
          },
        },
        "scale-in": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-slow": "fade-in-slow 0.8s ease-out",
        "float-1": "float-1 8s ease-in-out infinite",
        "float-2": "float-2 12s ease-in-out infinite",
        "float-3": "float-3 10s ease-in-out infinite",
        orbit1: "orbit 30s linear infinite",
        orbit2: "orbit 30s linear infinite",
        orbit3: "orbit 30s linear infinite",
        orbit4: "orbit 30s linear infinite",
        orbit5: "orbit 30s linear infinite",
        orbit6: "orbit 30s linear infinite",
        orbit7: "orbit 30s linear infinite",
        orbit8: "orbit 30s linear infinite",
        "orbit-mobile1": "orbit-mobile 30s linear infinite",
        "orbit-mobile2": "orbit-mobile 30s linear infinite",
        "orbit-mobile3": "orbit-mobile 30s linear infinite",
        "orbit-mobile4": "orbit-mobile 30s linear infinite",
        "orbit-mobile5": "orbit-mobile 30s linear infinite",
        "orbit-mobile6": "orbit-mobile 30s linear infinite",
        "orbit-mobile7": "orbit-mobile 30s linear infinite",
        "orbit-mobile8": "orbit-mobile 30s linear infinite",
        "scale-in": "scale-in 0.3s ease-out forwards",
      },
    },
  },
  // plugins: [require("tailwindcss-animate")],
} satisfies Config;