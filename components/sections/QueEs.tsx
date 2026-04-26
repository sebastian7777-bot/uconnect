'use client'

import { motion } from 'framer-motion'

const CARDS = [
  {
    ellos:    'Conectan fotos',
    uconnect: 'Conecta personas con intereses reales',
  },
  {
    ellos:    'Conectan CVs',
    uconnect: 'Conecta presencia física + contexto',
  },
  {
    ellos:    'Grupos de WhatsApp',
    uconnect: 'Continuidad con propósito — Nudge',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
}

export default function QueEs() {
  return (
    <section
      style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', alignItems: 'center' }}
      className="py-24 md:py-0"
    >
      <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>

        {/* Left: comparison cards (45%) */}
        <div
          className="w-full md:w-[45%]"
          style={{ padding: '40px 3vw 40px 6vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}
        >
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, margin: '-8%' }}
              transition={{ duration: 0.75, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background:   'var(--bg-2)',
                border:       '1px solid #1A1A1A',
                borderRadius: '12px',
                padding:      '24px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span
                  className="font-body"
                  style={{ color: '#333', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}
                >
                  Ellos
                </span>
                <span
                  className="font-body"
                  style={{ color: '#3B82F6', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}
                >
                  UConnect
                </span>
              </div>
              <div style={{ height: '1px', background: '#1A1A1A', marginBottom: '14px' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                <p className="font-body" style={{ color: '#444', fontSize: '0.9rem', lineHeight: 1.5, margin: 0, flex: 1 }}>
                  {card.ellos}
                </p>
                <p className="font-body" style={{ color: '#CCC', fontSize: '0.9rem', lineHeight: 1.5, margin: 0, flex: 1, textAlign: 'right' }}>
                  {card.uconnect}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: editorial text (55%) */}
        <div
          className="w-full md:w-[55%]"
          style={{ padding: '40px 6vw 40px 4vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}
        >
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: '-8%' }}
            className="font-body"
            style={{ color: '#333', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}
          >
            No es lo que crees
          </motion.span>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: '-8%' }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display"
            style={{ fontWeight: 900, color: '#FFF', lineHeight: 1.1, fontSize: 'clamp(2.2rem, 3.2vw, 3.8rem)', margin: 0 }}
          >
            No es una app<br />
            de citas.<br />
            No es LinkedIn.<br />
            Es algo que<br />
            no existía.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: '-8%' }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-body"
            style={{ color: '#666', fontSize: '1rem', lineHeight: 1.8, maxWidth: '400px', margin: 0 }}
          >
            Las apps para citas conectan fotos.
            LinkedIn conecta CVs.
            UConnect conecta personas que ya están
            en el mismo lugar, con los mismos intereses,
            en ese momento específico.
          </motion.p>
        </div>

      </div>
    </section>
  )
}
