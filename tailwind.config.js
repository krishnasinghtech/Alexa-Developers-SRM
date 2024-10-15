/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1D232A', // Dark background
        heading: '#A7ADBA',     // Light gray for headings
        text: '#FFFFFF',        // Main text color #8A919F
        accent1: '#FE5860',     // Bright red-orange accent
        accent2: '#00A86F',     // Bright green accent
      },
      fontSize: {
        title: ['3rem'],  // Title size { lineHeight: '2.5rem' }
        text: ['1.5rem'],    // Normal text size { lineHeight: '1.5rem' }
        highlight: ['1.125rem'], // Highlighted text size { lineHeight: '1.75rem' }
      },
    },
  },
  plugins: [],
}
