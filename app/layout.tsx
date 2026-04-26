import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets:  ['latin'],
  weight:   ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display:  'swap',
})

const inter = Inter({
  subsets:  ['latin'],
  weight:   ['400', '500', '600'],
  variable: '--font-body',
  display:  'swap',
})

export const metadata: Metadata = {
  title: 'UConnect — Conectamos personas reales en el mundo real',
  description:
    'Infraestructura social para eventos universitarios. ' +
    '30 cupos. Prelanzamiento cerrado. Medellín, Colombia.',
  metadataBase: new URL('https://uconnect.co'),
  openGraph: {
    title: 'UConnect — Conectamos personas reales en el mundo real',
    description:
      '30 cupos. Prelanzamiento cerrado. ' +
      'La infraestructura de conexión presencial ' +
      'que Colombia no tenía todavía.',
    url: 'https://uconnect.co',
    siteName: 'UConnect',
    images: [
      {
        url: '/og-image',
        width: 1200,
        height: 630,
        alt: 'UConnect — Conectamos personas reales en el mundo real',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UConnect — Conectamos personas reales en el mundo real',
    description: '30 cupos. Prelanzamiento cerrado. Medellín.',
    images: ['/og-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body style={{ fontFamily: 'var(--font-body)' }}>
        {children}
      </body>
    </html>
  )
}
