import { ImageResponse } from 'next/og'

export const runtime     = 'edge'
export const alt         = 'UConnect — Conectamos personas reales en el mundo real'
export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          fontFamily: 'sans-serif',
          padding: '0 80px',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
          <span style={{ color: '#FFFFFF', fontSize: 80, fontWeight: 900, letterSpacing: '-2px' }}>
            U
          </span>
          <span style={{ color: '#AAAAAA', fontSize: 80, fontWeight: 700, letterSpacing: '-2px' }}>
            Connect
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            color: '#666666',
            fontSize: 28,
            fontWeight: 400,
            textAlign: 'center',
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          Conectamos personas reales en el mundo real.
        </div>

        {/* Badge */}
        <div
          style={{
            marginTop: 16,
            border: '1px solid #222222',
            borderRadius: 100,
            padding: '10px 28px',
            color: '#555555',
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          30 cupos · Prelanzamiento cerrado · Medellín
        </div>

        {/* Bottom border accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            background: 'linear-gradient(90deg, transparent, #3B82F6, transparent)',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
