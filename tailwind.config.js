/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1D232A', // Light background color
        accent1: '#FE5860', // Primary accent color
        accent2: '#3BC14A', // Secondary accent color
        'nav-heading': 'white', // Navigation heading color
        'text': 'white', // Normal text color
        'normal-text': 'white', // Less emphasized text color
        'section-title': '#FE5860', // Section title color
      },
      fontSize: {
        'heading': ['2rem', { lineHeight: '2.5rem' }], // Heading font size
        'normal': ['2rem', { lineHeight: '1.5rem' }], // Normal font size
        'nav-heading': ['1rem', { lineHeight: '1.5rem' }], // Navigation heading font size
        'section-title': ['1.5rem', { lineHeight: '2rem' }], // Section title font size
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Ensure you're using a modern sans-serif font
      },
    },
  },
  plugins: [],
}
