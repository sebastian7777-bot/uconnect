'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PASOS = [
  {
    numero: '01',
    titulo: 'Llegas al evento',
    descripcion: 'Escaneas el QR del evento.\nSolo asistentes reales entran.\nTú decides si eres visible.',
    icono: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
           stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <path d="M14 14h3v3M17 17h3v3M14 20h3"/>
      </svg>
    ),
  },
  {
    numero: '02',
    titulo: 'Ves quién está',
    descripcion: 'Ves quién está y qué le interesa.\nYa sabes de qué hablarle\nantes de acercarte.',
    icono: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
           stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    numero: '03',
    titulo: 'Nudge mantiene la conexión',
    descripcion: 'Nudge mantiene vivo lo que empezó.\nPorque la conexión no puede\nmorir con el evento.',
    icono: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
           stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <circle cx="8"  cy="10" r="1" fill="#3B82F6"/>
        <circle cx="12" cy="10" r="1" fill="#3B82F6"/>
        <circle cx="16" cy="10" r="1" fill="#3B82F6"/>
      </svg>
    ),
  },
]

export default function ComoFunciona() {
  const [active, setActive] = useState(0)

  return (
    <section id="como-funciona" style={{ padding: '120px 5vw', background: '#08080F' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        <p style={{
          fontSize: '11px', fontWeight: 500, color: '#3B82F6',
          fontFamily: 'Inter', textTransform: 'uppercase',
          letterSpacing: '0.1em', marginBottom: '16px',
        }}>
          Cómo funciona
        </p>
        <h2 style={{
          fontFamily: 'Plus Jakarta Sans', fontWeight: 700,
          fontSize: 'clamp(2rem, 3.5vw, 3rem)',
          color: '#E2E8F0', letterSpacing: '-0.02em',
          marginBottom: '64px', lineHeight: 1.1,
        }}>
          Tres momentos.<br />Una sola intención.
        </h2>

        <div style={{ display: 'flex', gap: '48px', alignItems: 'stretch', flexWrap: 'wrap' }}>

          {/* Lista izquierda */}
          <div style={{
            display: 'flex', flexDirection: 'column',
            gap: '6px', width: '42%', minWidth: '280px', flexShrink: 0,
          }}>
            {PASOS.map((paso, i) => (
              <button key={i} onClick={() => setActive(i)}
                style={{
                  display: 'flex', alignItems: 'center',
                  gap: '16px', padding: '18px 20px',
                  background:  active === i ? 'rgba(59,130,246,0.06)' : 'transparent',
                  border:      '1px solid',
                  borderColor: active === i ? '#3B82F6' : 'transparent',
                  borderRadius: '12px', cursor: 'pointer',
                  textAlign: 'left', transition: 'all 250ms ease',
                  width: '100%',
                }}
                onMouseEnter={e => {
                  if (active !== i) e.currentTarget.style.borderColor = '#1A1A35'
                }}
                onMouseLeave={e => {
                  if (active !== i) e.currentTarget.style.borderColor = 'transparent'
                }}
              >
                <span style={{
                  fontSize: '11px', fontWeight: 700,
                  color: active === i ? '#3B82F6' : '#1E293B',
                  fontFamily: 'Plus Jakarta Sans',
                  letterSpacing: '0.05em', minWidth: '20px',
                }}>
                  {paso.numero}
                </span>
                <span style={{
                  fontSize: '0.95rem', fontWeight: 600,
                  color: active === i ? '#E2E8F0' : '#475569',
                  fontFamily: 'Plus Jakarta Sans',
                  transition: 'color 250ms',
                }}>
                  {paso.titulo}
                </span>
                {active === i && (
                  <svg width="14" height="14" viewBox="0 0 24 24"
                       fill="none" stroke="#3B82F6" strokeWidth="2"
                       strokeLinecap="round"
                       style={{ marginLeft: 'auto', flexShrink: 0 }}>
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                )}
              </button>
            ))}

            <p style={{
              fontSize: '0.75rem', color: '#1E293B',
              fontFamily: 'Inter', fontStyle: 'italic',
              marginTop: '16px', paddingLeft: '20px',
            }}>
              El antes del evento es opcional y siempre controlado por ti.
            </p>
          </div>

          {/* Panel derecho */}
          <div style={{
            flex: 1, minWidth: '260px',
            border: '1px solid #1A1A35',
            borderRadius: '20px', background: '#0A0A1A',
            padding: '48px', display: 'flex',
            alignItems: 'center', minHeight: '260px',
          }}>
            <AnimatePresence mode="wait">
              <motion.div key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {PASOS[active].icono}
                <h3 style={{
                  fontSize: '1.5rem', fontWeight: 700,
                  color: '#E2E8F0', fontFamily: 'Plus Jakarta Sans',
                  margin: '20px 0 14px', letterSpacing: '-0.01em',
                }}>
                  {PASOS[active].titulo}
                </h3>
                <p style={{
                  fontSize: '1rem', color: '#475569',
                  fontFamily: 'Inter', lineHeight: 1.85,
                  whiteSpace: 'pre-line', margin: 0,
                }}>
                  {PASOS[active].descripcion}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
