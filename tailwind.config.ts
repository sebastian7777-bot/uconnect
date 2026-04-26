import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Plus Jakarta Sans', 'sans-serif'],
        body:    ['var(--font-body)',    'Inter',             'sans-serif'],
      },
      colors: {
        bg:        'var(--bg)',
        'bg-2':    'var(--bg-2)',
        'bg-3':    'var(--bg-3)',
        border:    'var(--border)',
        'border-2':'var(--border-2)',
        blue:      'var(--blue)',
        'blue-b':  'var(--blue-bright)',
        'blue-d':  'var(--blue-dim)',
        'gray-1':  'var(--gray-1)',
        'gray-2':  'var(--gray-2)',
        'gray-3':  'var(--gray-3)',
        'gray-4':  'var(--gray-4)',
      },
    },
  },
  plugins: [],
}

export default config
