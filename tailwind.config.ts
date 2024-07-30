import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        primary: '#E04B6D',
        'primary-light': '#F1668D',
        neutral: '#E6E7E2',
        'neutral-dark': '#0F1D26',
        secondary: '#1465EC',
        'accent-cold': '#4dc7f9',
        'accent-warm': '#F9bd22',
      },
    },
  },
  plugins: [],
}
export default config
