/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        circuit: {
          bg: '#0a0a0a',
          dark: '#111111',
          trace: '#1a1a1a',
          glow: '#00ff88',
          node: '#333333',
          hover: '#00ffaa',
          text: '#e0e0e0',
          muted: '#999999',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'circuit-flow': 'circuit-flow 3s linear infinite',
        'node-pulse': 'node-pulse 1.5s ease-in-out infinite',
        'boot-up': 'boot-up 2s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '0.4',
            boxShadow: '0 0 5px theme(colors.circuit.glow)',
          },
          '50%': { 
            opacity: '1',
            boxShadow: '0 0 20px theme(colors.circuit.glow), 0 0 40px theme(colors.circuit.glow)',
          },
        },
        'circuit-flow': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'node-pulse': {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '0.8',
          },
          '50%': { 
            transform: 'scale(1.05)',
            opacity: '1',
          },
        },
        'boot-up': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.8)',
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
} 