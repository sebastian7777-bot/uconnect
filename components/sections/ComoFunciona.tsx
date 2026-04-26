'use client'

import { motion } from 'framer-motion'

const STEPS = [
  {
    num:  '01',
    head: 'Llegas al evento',
    text: 'Escaneas el QR del evento.\nSolo asistentes reales entran.\nTú decides si eres visible.',
  },
  {
    num:  '02',
    head: 'Ves quién está',
    text: 'Ves quién está y qué le interesa.\nYa sabes de qué hablarle\nantes de acercarte.',
  },
  {
    num:  '03',
    head: 'Nudge mantiene la conexión',
    text: 'Nudge mantiene vivo lo que empezó.\nPorque la conexión no puede\nmorir con el evento.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
}

const StepIndicator = ({ number }: { number: string }) => (
  <div style={{ position: 'relative', width: '40px', height: '24px', flexShrink: 0 }}>
    <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
      <circle cx="13" cy="12" r="11" stroke="#1A1A35" strokeWidth="1.5" fill="#05050F"/>
      <circle cx="27" cy="12" r="11" stroke="#1A1A35" strokeWidth="1.5" fill="#05050F"/>
      <circle cx="13" cy="12" r="11" stroke="#3B82F6" strokeWidth="1.5" fill="none" opacity="0.4"/>
    </svg>
    <span style={{
      position:    'absolute',
      top:         '50%',
      left:        '50%',
      transform:   'translate(-50%, -50%)',
      fontSize:    '10px',
      fontWeight:  '700',
      color:       '#3B82F6',
      fontFamily:  'Plus Jakarta Sans',
      letterSpacing: '0.05em',
    }}>
      {number}
    </span>
  </div>
)

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
            viewport={{ once: false, margin: '-8%' }}
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
            viewport={{ once: false, margin: '-8%' }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display"
            style={{ fontWeight: 900, color: '#FFF', lineHeight: 1.1, fontSize: 'clamp(2.2rem, 3.2vw, 3.6rem)', margin: 0 }}
          >
            Tres momentos.<br />
            Una sola intención.
          </motion.h2>

          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '0' }}>
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: false, margin: '-8%' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              style={{
                position:        'absolute',
                left:            '7px',
                top:             '14px',
                bottom:          '14px',
                width:           '1px',
                background:      '#1E1E1E',
                transformOrigin: 'top',
              }}
            />

            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: '-8%' }}
                transition={{ duration: 0.75, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', paddingBottom: i < 2 ? '28px' : '0' }}
              >
                <div style={{ position: 'relative', zIndex: 1, marginTop: '0px' }}>
                  <StepIndicator number={step.num} />
                </div>

                <div>
                  <span style={{ display: 'block', marginBottom: '6px' }} />
                  <p
                    className="font-body"
                    style={{ color: '#CCC', fontSize: '0.95rem', lineHeight: 1.3, fontWeight: 600, margin: '0 0 4px' }}
                  >
                    {step.head}
                  </p>
                  {step.text.split('\n').map((line, j) => (
                    <p
                      key={j}
                      className="font-body"
                      style={{ color: '#666', fontSize: '0.88rem', lineHeight: 1.65, margin: '0 0 2px' }}
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
            viewport={{ once: false, margin: '-8%' }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="font-body"
            style={{ color: '#333', fontSize: '0.8rem', fontStyle: 'italic', margin: 0 }}
          >
            El antes del evento es opcional y siempre controlado por ti.
          </motion.p>
        </div>

        {/* Right: visual (45%) */}
        <div
          className="w-full md:w-[45%]"
          style={{ padding: '40px 4vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: '-8%' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{
              width:        '100%',
              maxWidth:     '360px',
              background:   'var(--bg-2)',
              border:       '1px solid #1A1A1A',
              borderRadius: '20px',
              padding:      '32px',
              display:      'flex',
              flexDirection:'column',
              gap:          '16px',
            }}
          >
            <p className="font-body" style={{ color: '#333', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, margin: 0 }}>
              En el evento · ahora
            </p>
            {[
              { name: 'Valentina M.', tag: 'Diseño de producto · EIA', online: true },
              { name: 'Mateo C.',     tag: 'Startups · EAFIT',         online: true },
              { name: 'Sara L.',      tag: 'Venture capital · UPB',    online: false },
            ].map((person, i) => (
              <div
                key={i}
                style={{
                  display:      'flex',
                  alignItems:   'center',
                  gap:          '12px',
                  background:   i === 0 ? 'rgba(59,130,246,0.06)' : 'transparent',
                  border:       `1px solid ${i === 0 ? 'rgba(59,130,246,0.15)' : '#111'}`,
                  borderRadius: '10px',
                  padding:      '12px 14px',
                }}
              >
                <div style={{
                  width:        '36px',
                  height:       '36px',
                  borderRadius: '50%',
                  background:   i === 0 ? 'rgba(59,130,246,0.15)' : '#111',
                  flexShrink:   0,
                  display:      'flex',
                  alignItems:   'center',
                  justifyContent: 'center',
                }}>
                  <span className="font-display" style={{ fontWeight: 700, fontSize: '0.9rem', color: i === 0 ? '#3B82F6' : '#333' }}>
                    {person.name[0]}
                  </span>
                </div>
                <div style={{ flex: 1 }}>
                  <p className="font-body" style={{ color: '#CCC', fontSize: '0.85rem', fontWeight: 500, margin: 0 }}>{person.name}</p>
                  <p className="font-body" style={{ color: '#444', fontSize: '0.75rem', margin: 0 }}>{person.tag}</p>
                </div>
                <div style={{
                  width:        '7px',
                  height:       '7px',
                  borderRadius: '50%',
                  background:   person.online ? '#3B82F6' : '#222',
                  flexShrink:   0,
                }} />
              </div>
            ))}
            <p className="font-body" style={{ color: '#222', fontSize: '0.72rem', textAlign: 'center', margin: 0, fontStyle: 'italic' }}>
              Datos ilustrativos
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
