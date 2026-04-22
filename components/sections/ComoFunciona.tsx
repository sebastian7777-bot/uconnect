'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const NodeNetwork = dynamic(() => import('../three/NodeNetwork'), { ssr: false })

const STEPS = [
  {
    num:  '01',
    text: 'Escaneas el QR del evento.\nSolo asistentes reales entran.\nTú decides si eres visible.',
  },
  {
    num:  '02',
    text: 'Ves quién está y qué le interesa.\nYa sabes de qué hablarle\nantes de acercarte.',
  },
  {
    num:  '03',
    text: 'Nudge mantiene vivo lo que empezó.\nPorque la conexión no puede\nmorir con el evento.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
}

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', alignItems: 'center' }}
      className="py-24 md:py-0"
    >
      <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>

        {/* Left: steps (55%) */}
        <div
          className="w-full md:w-[55%]"
          style={{ padding: '40px 4vw 40px 6vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '28px' }}
        >
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="font-body"
            style={{ color: '#333', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}
          >
            Cómo funciona
          </motion.span>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display"
            style={{ fontWeight: 900, color: '#FFF', lineHeight: 1.1, fontSize: 'clamp(2.2rem, 3.2vw, 3.6rem)', margin: 0 }}
          >
            Tres momentos.<br />
            Una sola intención.
          </motion.h2>

          {/* Steps with animated vertical line */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '0' }}>
            {/* Animated vertical connector */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-12%' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              style={{
                position:      'absolute',
                left:          '7px',
                top:           '14px',
                bottom:        '14px',
                width:         '1px',
                background:    '#1E1E1E',
                transformOrigin: 'top',
              }}
            />

            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-12%' }}
                transition={{ duration: 0.75, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', paddingBottom: i < 2 ? '28px' : '0' }}
              >
                {/* Blue dot */}
                <div style={{
                  width:        '15px',
                  height:       '15px',
                  borderRadius: '50%',
                  background:   '#3B82F6',
                  flexShrink:   0,
                  marginTop:    '3px',
                  position:     'relative',
                  zIndex:       1,
                }} />

                <div>
                  <span
                    className="font-display"
                    style={{ color: '#3B82F6', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.06em', display: 'block', marginBottom: '6px' }}
                  >
                    {step.num}
                  </span>
                  {step.text.split('\n').map((line, j) => (
                    <p
                      key={j}
                      className="font-body"
                      style={{ color: j === 0 ? '#CCC' : '#666', fontSize: '0.95rem', lineHeight: 1.65, margin: '0 0 2px' }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="font-body"
            style={{ color: '#333', fontSize: '0.8rem', fontStyle: 'italic', margin: 0 }}
          >
            El antes del evento es opcional y siempre controlado por ti.
          </motion.p>
        </div>

        {/* Right: node network (45%) */}
        <div
          className="w-full md:w-[45%]"
          style={{ position: 'relative', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px 4vw 20px 2vw' }}
        >
          <div style={{ flex: 1, minHeight: '360px', position: 'relative' }}>
            <Suspense fallback={null}>
              <NodeNetwork />
            </Suspense>
          </div>
          <p
            className="font-body"
            style={{ color: '#333', fontSize: '0.75rem', textAlign: 'center', marginTop: '8px' }}
          >
            Toca un nodo para ver quién podría estar ahí
          </p>
        </div>

      </div>
    </section>
  )
}
