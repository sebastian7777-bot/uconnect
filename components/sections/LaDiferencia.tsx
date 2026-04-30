'use client'

import { motion } from 'framer-motion'

const AFIRMACIONES = [
  {
    titulo: 'Conecta personas con intereses reales',
    desc: 'No ves perfiles al azar. Ves a las personas que comparten lo que te importa — en ese evento, en ese momento.',
  },
  {
    titulo: 'Presencia física + contexto',
    desc: 'La conversación ya tiene un punto de partida antes de que digas la primera palabra.',
  },
  {
    titulo: 'Continuidad con propósito — Nudge',
    desc: 'La conexión que nació en el evento no muere en la primera semana. Nudge la mantiene viva.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
}

export default function LaDiferencia() {
  return (
    <section
      style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', alignItems: 'center' }}
      className="py-24 md:py-0"
    >
      <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>

        {/* Left: afirmaciones (45%) */}
        <div
          className="w-full md:w-[45%]"
          style={{ padding: '40px 3vw 40px 6vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}
        >
          {AFIRMACIONES.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, margin: '-8%' }}
              transition={{ duration: 0.75, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background:   '#0A0A0A',
                border:       '1px solid #1A1A1A',
                borderRadius: '12px',
                padding:      '24px',
              }}
            >
              <p className="font-display" style={{ color: '#FFF', fontSize: '1rem', fontWeight: 700, lineHeight: 1.35, margin: '0 0 10px' }}>
                {item.titulo}
              </p>
              <p className="font-body" style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>
                {item.desc}
              </p>
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
            Por qué existe
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
            UConnect conecta personas que ya están
            en el mismo lugar, con los mismos intereses,
            en ese momento específico.
            Eso no existía antes.
          </motion.p>
        </div>

      </div>
    </section>
  )
}
