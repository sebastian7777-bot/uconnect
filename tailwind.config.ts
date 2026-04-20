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
        bg: {
          primary: '#000000',
          surface: '#0F0F0F',
          card: '#141414',
          elevated: '#1A1A1A',
        },
        border: {
          subtle: '#222222',
          DEFAULT: '#2A2A2A',
        },
        txt: {
          primary: '#FFFFFF',
          secondary: '#999999',
          muted: '#555555',
          accent: '#E8E8E8',
          mid: '#AAAAAA',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Plus Jakarta Sans', 'sans-serif'],
        body: ['var(--font-body)', 'Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
