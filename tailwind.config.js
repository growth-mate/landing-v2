/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
        dark: "#080908",
        light: "#eceeec",
        primary: "#c2f0c2",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities, theme }) {
      const newUtilities = {
        // Mobile font scaling
        '.mobile-scale': {
          '@media (max-width: 767px)': {
            // Scale text sizes
            '& .text-4xl, & .text-6xl': { fontSize: '2rem', lineHeight: '2.25rem' },
            '& .text-3xl': { fontSize: '1.5rem', lineHeight: '2rem' },
            '& .text-2xl': { fontSize: '1.25rem', lineHeight: '1.75rem' },
            '& .text-xl': { fontSize: '1.125rem', lineHeight: '1.75rem' },
            '& .text-lg': { fontSize: '1rem', lineHeight: '1.5rem' },
            
            // Scale padding and margins
            '& .py-20': { paddingTop: '3rem', paddingBottom: '3rem' },
            '& .py-12': { paddingTop: '2rem', paddingBottom: '2rem' },
            '& .py-8': { paddingTop: '1.5rem', paddingBottom: '1.5rem' },
            '& .py-6': { paddingTop: '1rem', paddingBottom: '1rem' },
            '& .py-4': { paddingTop: '0.75rem', paddingBottom: '0.75rem' },
            '& .py-3': { paddingTop: '0.5rem', paddingBottom: '0.5rem' },
            
            '& .px-8': { paddingLeft: '1.5rem', paddingRight: '1.5rem' },
            '& .px-6': { paddingLeft: '1rem', paddingRight: '1rem' },
            
            '& .p-8': { padding: '1.5rem' },
            '& .p-12': { padding: '2rem' },
            
            '& .mb-12': { marginBottom: '2rem' },
            '& .mb-8': { marginBottom: '1.5rem' },
            '& .mb-6': { marginBottom: '1rem' },
            '& .mb-4': { marginBottom: '0.75rem' },
            '& .mb-3': { marginBottom: '0.5rem' },
            
            '& .gap-8': { gap: '1.5rem' },
            '& .gap-6': { gap: '1rem' },
            '& .gap-4': { gap: '0.75rem' },
            
            // Scale rounded corners
            '& .rounded-3xl': { borderRadius: '1rem' },
            '& .rounded-2xl': { borderRadius: '0.75rem' },
            
            // Scale container padding
            '& .container': { paddingLeft: '1rem', paddingRight: '1rem' },
          }
        }
      }
      addUtilities(newUtilities)
    }
  ],
}
