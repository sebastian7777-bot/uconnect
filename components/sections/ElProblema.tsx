'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
}

export default function ElProblema() {
  return (
    <section style={{ padding: '120px 5vw', background: '#05050F' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-8%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: '11px', fontWeight: 500, color: '#3B82F6',
            fontFamily: 'Inter', textTransform: 'uppercase',
            letterSpacing: '0.1em', marginBottom: '24px',
          }}
        >
          El problema
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-8%' }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'Plus Jakarta Sans', fontWeight: 900,
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            color: '#E2E8F0', letterSpacing: '-0.02em',
            lineHeight: 1.1, margin: '0 0 48px',
          }}
        >
          La barrera no es la timidez.<br />
          Es no saber de qué hablarle.
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-8%' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            background:   'rgba(59,130,246,0.04)',
            border:       '1px solid rgba(59,130,246,0.12)',
            borderRadius: '20px',
            padding:      '48px 64px',
            textAlign:    'center',
            display:      'inline-block',
          }}>
            <p style={{
              fontFamily:  'Plus Jakarta Sans',
              fontWeight:  900,
              fontSize:    'clamp(5rem, 10vw, 8rem)',
              color:       '#3B82F6',
              lineHeight:  1,
              margin:      '0 0 16px',
            }}>
              67%
            </p>
            <p style={{
              fontFamily: 'Inter',
              fontSize:   '0.9rem',
              color:      '#475569',
              lineHeight: 1.6,
              maxWidth:   '360px',
              margin:     0,
            }}>
              de los empleos en Colombia<br />
              se consiguen por referidos.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
