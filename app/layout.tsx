import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://uconnect.co'),
  title: 'UConnect — Conoce a las personas correctas',
  description: 'Infraestructura social para eventos. Solo 30 cupos en Medellín.',
  openGraph: {
    title: 'UConnect — Conoce a las personas correctas',
    description: 'Infraestructura social para eventos. Solo 30 cupos en Medellín.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UConnect — Conoce a las personas correctas',
    description: 'Infraestructura social para eventos. Solo 30 cupos en Medellín.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${plusJakarta.variable} ${spaceGrotesk.variable}`}>
      <body
        className="antialiased bg-black text-white"
        style={{ fontFamily: 'var(--font-body, Space Grotesk, sans-serif)' }}
      >
        {children}
      </body>
    </html>
  )
}
