export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'slide-up': 'slide-up 1s ease-out',
        'icon-spin': 'icon-spin 1s linear infinite',
        'vertical-flip': 'vertical-flip 1s linear infinite',
        'robot-walk-sm': 'robot-walk-sm 8s ease-in-out infinite',
        'robot-walk-md': 'robot-walk-md 14s ease-in-out infinite',
        'robot-walk-lg': 'robot-walk-lg 20s ease-in-out infinite',
        'gradient-flow': 'gradient-flow 3s ease infinite',
        twinkle: 'twinkle 2s infinite ease-in-out', // New twinkle animation
        orbit: 'orbit 6s ease-in-out infinite',
        glow: 'glow 1.5s alternate infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'icon-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'vertical-flip': {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        'robot-walk-sm': {
          '0%': { transform: 'translateX(-100%) rotateY(0deg)' },
          '50%': { transform: 'translateX(calc(15vw)) rotateY(0deg)' },
          '51%': { transform: 'translateX(calc(15vw)) rotateY(180deg)' },
          '100%': { transform: 'translateX(-100%) rotateY(180deg)' },
        },
        'robot-walk-md': {
          '0%': { transform: 'translateX(-100%) rotateY(0deg)' },
          '50%': { transform: 'translateX(calc(20vw)) rotateY(0deg)' },
          '51%': { transform: 'translateX(calc(20vw)) rotateY(180deg)' },
          '100%': { transform: 'translateX(-100%) rotateY(180deg)' },
        },
        'robot-walk-lg': {
          '0%': { transform: 'translateX(-100%) rotateY(0deg)' },
          '50%': { transform: 'translateX(calc(30vw)) rotateY(0deg)' },
          '51%': { transform: 'translateX(calc(30vw)) rotateY(180deg)' },
          '100%': { transform: 'translateX(-100%) rotateY(180deg)' },
        },
        'gradient-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(200px) rotate(0deg)' },
          '100%': {
            transform: 'rotate(360deg) translateX(200px) rotate(-360deg)',
          },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 255, 255, 1)' },
        },
      },
      textShadow: {
        neon: '0 0 5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(0, 200, 255, 0.6), 0 0 20px rgba(0, 200, 255, 0.5)',
        'hover-md': '0px 4px 6px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
