import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets:  ['latin'],
  weight:   ['400', '600', '700', '800'],
  variable: '--font-display',
  display:  'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets:  ['latin'],
  weight:   ['400', '500', '600'],
  variable: '--font-body',
  display:  'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://uconnect.co'),
  title:       'UConnect — Conectamos personas reales en el mundo real',
  description: '30 cupos. Prelanzamiento cerrado. La infraestructura de conexión presencial que Colombia no tenía todavía.',
  openGraph: {
    title:       'UConnect — Conectamos personas reales en el mundo real',
    description: '30 cupos. Prelanzamiento cerrado. La infraestructura de conexión presencial que Colombia no tenía todavía.',
    locale:      'es_CO',
    type:        'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${plusJakarta.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased bg-black text-white font-body">
        {children}
      </body>
    </html>
  )
}
