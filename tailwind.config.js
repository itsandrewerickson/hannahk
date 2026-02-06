/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050B14',
          900: '#0A1628',
          800: '#0F2140',
          700: '#162D54',
          600: '#1E3A68',
        },
        champagne: {
          50: '#FDF9F3',
          100: '#F9F0E3',
          200: '#F0DFC4',
          300: '#E5C99A',
          400: '#D4B06A',
          500: '#C9A961',
          600: '#B8944A',
          700: '#9A7A3D',
        },
        cream: {
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F5F1EB',
          300: '#EBE5DB',
        },
        slate: {
          blue: '#64748B',
        }
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'Georgia', 'serif'],
        'body': ['DM Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
      },
    },
  },
  plugins: [],
}
