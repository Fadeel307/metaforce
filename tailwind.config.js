/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f3ff',
        'neon-purple': '#9d00ff',
        'neon-pink': '#ff00f5',
        'cyber-yellow': '#f9f002',
        'dark-800': '#0a0a0f',
        'dark-900': '#050507',
        'dark-950': '#030304',
      },
      fontFamily: {
        cyber: ['var(--font-orbitron)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      keyframes: {
        glow: {
          '0%, 100%': { 
            textShadow: '0 0 10px #00f3ff, 0 0 20px #00f3ff, 0 0 30px #00f3ff, 0 0 40px #00f3ff' 
          },
          '50%': { 
            textShadow: '0 0 20px #9d00ff, 0 0 30px #9d00ff, 0 0 40px #9d00ff, 0 0 50px #9d00ff'
          },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite',
        scanline: 'scanline 8s linear infinite',
        float: 'float 5s ease-in-out infinite',
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(to right, #0a0a0f 1px, transparent 1px), linear-gradient(to bottom, #0a0a0f 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}; 