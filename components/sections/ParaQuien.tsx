'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TABS = [
  {
    label: 'Si vas al evento',
    descripcion: 'Medellín tiene 400.000 universitarios. Miles de eventos al año. Las conexiones correctas están ahí — solo faltan las condiciones para que ocurran.',
    items: [
      { titulo: 'Sabes con quién hablar',
        texto:  'Antes de llegar ves quién va y qué le interesa. La conversación ya tiene contexto.' },
      { titulo: 'Conectas con intención',
        texto:  'No es suerte. Es afinidad real. Solicitas un Connect y los dos saben por qué se están conociendo.' },
      { titulo: 'La conexión no muere con el evento',
        texto:  'Nudge te recuerda con quién quedaste pendiente y te sugiere el primer paso.' },
      { titulo: 'Tú controlas tu visibilidad',
        texto:  'Decides si eres visible para otros asistentes. Siempre en tus términos.' },
    ],
  },
  {
    label: 'Si organizas el evento',
    descripcion: 'Hoy terminas un evento sin saber qué ocurrió realmente. UConnect te da los datos que siempre faltaron.',
    items: [
      { titulo: 'Conoces a tu audiencia de verdad',
        texto:  'Qué intereses dominan, qué perfiles asisten, qué busca tu comunidad. No suposiciones.' },
      { titulo: 'Mides el impacto real',
        texto:  'Cuántas conexiones generó tu evento. No solo cuántos asistentes llegaron.' },
      { titulo: 'Mejoras el próximo evento',
        texto:  'Con datos reales de comportamiento social de tu audiencia, cada evento es mejor que el anterior.' },
      { titulo: 'Tu comunidad te lo agradece',
        texto:  'Cuando los asistentes se van con conexiones reales, vuelven. Y traen a otros.' },
    ],
  },
]

export default function ParaQuien() {
  const [active, setActive] = useState(0)

  return (
    <section style={{ padding: '120px 5vw', background: '#05050F' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        <p style={{
          fontSize: '11px', fontWeight: 500, color: '#3B82F6',
          fontFamily: 'Inter', textTransform: 'uppercase',
          letterSpacing: '0.1em', marginBottom: '16px',
          textAlign: 'center',
        }}>
          Para quién
        </p>

        <h2 style={{
          fontFamily: 'Plus Jakarta Sans', fontWeight: 700,
          fontSize: 'clamp(2rem, 3.5vw, 3rem)',
          color: '#E2E8F0', letterSpacing: '-0.02em',
          marginBottom: '48px', lineHeight: 1.1,
          textAlign: 'center',
        }}>
          UConnect funciona para<br />los dos lados del evento.
        </h2>

        {/* Tabs */}
        <div style={{
          display: 'flex', gap: '6px', justifyContent: 'center',
          background: '#0A0A1A', border: '1px solid #1A1A35',
          borderRadius: '12px', padding: '5px',
          width: 'fit-content', margin: '0 auto 56px',
          flexWrap: 'wrap',
        }}>
          {TABS.map((tab, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              padding: '10px 28px', borderRadius: '8px',
              border: 'none', cursor: 'pointer',
              fontSize: '0.875rem', fontWeight: 500,
              fontFamily: 'Inter', transition: 'all 250ms ease',
              background: active === i ? '#3B82F6' : 'transparent',
              color:      active === i ? '#fff' : '#475569',
            }}>
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{
              fontSize: '1rem', color: '#475569',
              fontFamily: 'Inter', lineHeight: 1.7,
              textAlign: 'center', maxWidth: '520px',
              margin: '0 auto 48px',
            }}>
              {TABS[active].descripcion}
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '14px',
            }}>
              {TABS[active].items.map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  style={{
                    background:   '#0A0A1A',
                    border:       '1px solid #1A1A35',
                    borderRadius: '14px',
                    padding:      '24px',
                    cursor:       'default',
                    transition:   'border-color 250ms',
                  }}
                >
                  <p style={{
                    fontSize: '0.9rem', fontWeight: 600,
                    color: '#E2E8F0', fontFamily: 'Plus Jakarta Sans',
                    margin: '0 0 8px',
                  }}>
                    {item.titulo}
                  </p>
                  <p style={{
                    fontSize: '0.83rem', color: '#475569',
                    fontFamily: 'Inter', lineHeight: 1.65, margin: 0,
                  }}>
                    {item.texto}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
