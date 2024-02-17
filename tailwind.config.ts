import type { Config } from 'tailwindcss'

const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        ['infinite-slider']: 'infiniteSlider 30s linear infinite',
      },
      keyframes: {
        infiniteSlider: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { 
            transform: 'translateX(calc(-60rem * 10))' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
}

export default config
