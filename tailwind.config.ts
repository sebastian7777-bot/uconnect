import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        uc: {
          black:   '#000000',
          surface: '#0F0F0F',
          card:    '#141414',
          border:  '#1E1E1E',
          white:   '#FFFFFF',
          sec:     '#999999',
          muted:   '#555555',
          blue:    '#3B82F6',
          'blue-glow': 'rgba(59,130,246,0.12)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Plus Jakarta Sans', 'sans-serif'],
        body:    ['var(--font-body)',    'Space Grotesk',    'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
