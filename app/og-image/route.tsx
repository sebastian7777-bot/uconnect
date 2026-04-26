import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width:          '1200px',
          height:         '630px',
          background:     '#05050F',
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'center',
          justifyContent: 'center',
          gap:            '24px',
        }}
      >
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
          <circle cx="33" cy="50" r="28" stroke="white" strokeWidth="7" fill="none"/>
          <circle cx="67" cy="50" r="28" stroke="white" strokeWidth="7" fill="none"/>
        </svg>
        <div style={{ fontSize: '52px', fontWeight: '700', color: '#E2E8F0', letterSpacing: '-0.03em' }}>
          UConnect
        </div>
        <div style={{ fontSize: '26px', color: '#475569', textAlign: 'center', maxWidth: '700px', lineHeight: '1.4' }}>
          Conectamos personas reales en el mundo real
        </div>
        <div style={{ fontSize: '18px', color: '#1E293B', marginTop: '8px' }}>
          30 cupos · Prelanzamiento · Medellín
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
