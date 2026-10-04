/** @type {import('tailwindcss').Config} */
// Palette derived from the IIT (ISM) "Patent Granted" creative:
// a deep institutional maroon (#7A172B) paired with warm beige / sand
// neutrals. Gold/yellow has been retired in favour of a muted sand accent.
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#FBF2F4',
          100: '#F5E0E5',
          200: '#EBBFC9',
          300: '#D9909F',
          400: '#BE5A6F',
          500: '#9E2F46',
          600: '#7A172B', // brand primary (sampled from creative)
          700: '#661324',
          800: '#520F1D',
          900: '#3D0B16',
          950: '#26060D',
        },
        sand: {
          50: '#FDFAF5',
          100: '#F8F1E6',
          200: '#F1E5D3',
          300: '#E5D3B8',
          400: '#D5BC98',
          500: '#C2A077',
          600: '#A6845B',
          700: '#836747',
        },
        ink: {
          DEFAULT: '#2B1A1D',
          soft: '#5C4A4D',
          muted: '#8A7A7C',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(61,11,22,0.04), 0 8px 24px -12px rgba(61,11,22,0.18)',
        lift: '0 2px 4px rgba(61,11,22,0.06), 0 24px 48px -20px rgba(61,11,22,0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'modal-in': {
          '0%': { opacity: '0', transform: 'translateY(16px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'backdrop-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        tick: {
          '0%': { transform: 'translateY(-40%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both',
        'spin-slow': 'spin-slow 60s linear infinite',
        float: 'float 7s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        'modal-in': 'modal-in 0.35s cubic-bezier(0.22,1,0.36,1) both',
        'backdrop-in': 'backdrop-in 0.25s ease-out both',
        tick: 'tick 0.4s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};
