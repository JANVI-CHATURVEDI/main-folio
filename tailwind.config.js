// tailwind.config.js
export default {
  darkMode: 'class', // VERY IMPORTANT
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'grid-move': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100px 100px' },
        },
        'float': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(20px, -30px)' },
        },
      },
      animation: {
        'grid-move': 'grid-move 50s linear infinite',
        'float': 'float 15s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
