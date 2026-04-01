
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        bgDark: '#0b1a2b',
        accentCyan: '#00c8e8',
        textMuted: '#8b9bb4',
      },
      fontFamily: {
        heading: ['"DM Serif Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      }
    },
  },
  plugins: [],
}
