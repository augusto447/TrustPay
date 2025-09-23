/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#F3F4F6",
        accent: "#F59E0B",
        success: "#10B981",
        warning: "#FBBF24",
        danger: "#EF4444",
        info: "#3B82F6",
        gray50: "#F9FAFB",
        gray100: "#F3F4F6",
        gray200: "#E5E7EB",
        gray300: "#D1D5DB",
        gray500: "#6B7280",
        gray700: "#374151",
        gray900: "#111827",
      },
      
    },
  },
  plugins: [],
};
