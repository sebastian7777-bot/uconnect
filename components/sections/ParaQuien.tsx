'use client'

import { motion } from 'framer-motion'

const PROFILES = [
  {
    label:   'Estudiantes universitarios',
    desc:    'Que quieren salir del círculo de siempre y conocer gente en eventos académicos, hackathons y ferias.',
    accent:  true,
  },
  {
    label:   'Emprendedores y fundadores',
    desc:    'Que van a eventos buscando co-fundadores, primeros clientes o mentores — y se van sin encontrarlos.',
    accent:  false,
  },
  {
    label:   'Profesionales en crecimiento',
    desc:    'Que entienden que la red correcta vale más que diez años de carrera solitaria.',
    accent:  false,
  },
  {
    label:   'Organizadores de eventos',
    desc:    'Que quieren que sus eventos generen conexiones reales, no solo asistentes y fotos para Instagram.',
    accent:  false,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
}

export default function ParaQuien() {
  return (
    <section
      style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', alignItems: 'center' }}
      className="py-24 md:py-0"
    >
      <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>

        {/* Left: heading (40%) */}
        <div
          className="w-full md:w-[40%]"
          style={{ padding: '40px 3vw 40px 6vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}
        >
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-12%' }}
            className="font-body"
            style={{ color: '#333', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}
          >
            ¿Para quién es?
          </motion.span>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display"
            style={{ fontWeight: 900, color: '#FFF', lineHeight: 1.1, fontSize: 'clamp(2.2rem, 3vw, 3.5rem)', margin: 0 }}
          >
            Para quien<br />
            sabe que la<br />
            persona correcta<br />
            existe.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-body"
            style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: '340px', margin: 0 }}
          >
            Medellín tiene 400.000 universitarios.
            Miles de eventos al año.
            Las conexiones correctas están ahí —
            solo faltan las condiciones para que ocurran.
          </motion.p>
        </div>

        {/* Right: profile cards (60%) */}
        <div
          className="w-full md:w-[60%]"
          style={{ padding: '40px 6vw 40px 3vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}
        >
          {PROFILES.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-12%' }}
              transition={{ duration: 0.75, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background:   'var(--bg-2)',
                border:       `1px solid ${p.accent ? 'rgba(59,130,246,0.2)' : '#1A1A1A'}`,
                borderLeft:   p.accent ? '2px solid #3B82F6' : '2px solid #1A1A1A',
                borderRadius: '10px',
                padding:      '20px 24px',
                display:      'flex',
                flexDirection:'column',
                gap:          '6px',
              }}
            >
              <h3
                className="font-display"
                style={{
                  fontWeight:  700,
                  color:       p.accent ? '#FFF' : '#CCC',
                  fontSize:    '1rem',
                  margin:      0,
                }}
              >
                {p.label}
              </h3>
              <p
                className="font-body"
                style={{ color: '#666', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
