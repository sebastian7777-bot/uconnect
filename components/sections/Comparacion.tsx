'use client'

import { motion } from 'framer-motion'

const CARDS = [
  {
    antes:     'Conectan fotos',
    uconnect:  'Conecta personas con intereses reales',
  },
  {
    antes:     'Conectan CVs',
    uconnect:  'Conecta presencia física + contexto',
  },
  {
    antes:     'Grupos de WhatsApp',
    uconnect:  'Continuidad con propósito — Nudge',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
}

export default function Comparacion() {
  return (
    <section style={{ padding: '100px 5vw', background: '#070710' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-8%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <p style={{
            fontSize: '11px', fontWeight: 500, color: '#3B82F6',
            fontFamily: 'Inter', textTransform: 'uppercase',
            letterSpacing: '0.1em', marginBottom: '20px',
          }}>
            No es lo que crees
          </p>
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans', fontWeight: 700,
            color: '#E2E8F0', letterSpacing: '-0.02em',
            lineHeight: 1.1, margin: '0 0 12px',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
          }}>
            No es una app de citas.<br />
            No es LinkedIn.
          </h2>
          <p style={{
            fontFamily: 'Plus Jakarta Sans', fontWeight: 800,
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            color: '#3B82F6', margin: 0,
          }}>
            Es algo que no existía.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, margin: '-8%' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display:             'grid',
                gridTemplateColumns: '1fr auto 1fr',
                border:              '1px solid #1A1A35',
                borderRadius:        '12px',
                overflow:            'hidden',
              }}
            >
              {/* Antes */}
              <div style={{ padding: '20px 28px', background: '#070710' }}>
                <p style={{
                  fontSize: '10px', fontWeight: 500, color: '#1E293B',
                  fontFamily: 'Inter', textTransform: 'uppercase',
                  letterSpacing: '0.1em', margin: '0 0 8px',
                }}>
                  Antes
                </p>
                <p style={{
                  fontSize: '0.9rem', color: '#252545',
                  fontFamily: 'Inter',
                  textDecoration: 'line-through',
                  textDecorationColor: '#1A1A35',
                  margin: 0,
                }}>
                  {card.antes}
                </p>
              </div>

              {/* Separador */}
              <div style={{ width: '1px', background: '#1A1A35' }} />

              {/* UConnect */}
              <div style={{
                padding:    '20px 28px',
                background: '#0A0A1A',
                display:    'flex',
                alignItems: 'center',
                gap:        '10px',
              }}>
                <div style={{
                  width: '6px', height: '6px',
                  borderRadius: '50%', background: '#3B82F6',
                  flexShrink: 0,
                }} />
                <p style={{
                  fontSize: '0.9rem', color: '#E2E8F0',
                  fontFamily: 'Inter', margin: 0,
                }}>
                  {card.uconnect}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Párrafo de cierre */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-8%' }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: '1rem', color: '#475569',
            fontFamily: 'Inter', fontStyle: 'italic',
            lineHeight: 1.7, maxWidth: '500px',
            margin: '40px auto 0', textAlign: 'center',
          }}
        >
          Las apps para citas conectan fotos.
          LinkedIn conecta CVs. UConnect conecta personas
          que ya están en el mismo lugar, con los mismos
          intereses, en ese momento específico.
        </motion.p>

      </div>
    </section>
  )
}
