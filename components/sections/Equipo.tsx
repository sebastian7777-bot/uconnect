'use client'

import { motion } from 'framer-motion'

const TEAM = [
  {
    initial: 'S',
    name:    'Sebastián',
    role:    'CEO · Estrategia y producto',
    career:  'Ingeniería Administrativa',
    bio:     'Cree que las conexiones correctas cambian trayectorias.',
  },
  {
    initial: 'A',
    name:    'Abraham',
    role:    'CTO · Tecnología y arquitectura',
    career:  'Ingeniería en Sistemas',
    bio:     'Construye la infraestructura que hace que todo esto funcione.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
}

export default function Equipo() {
  return (
    <section
      style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      className="py-24 px-6"
    >
      <div style={{ maxWidth: '700px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '48px' }}>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-12%' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="font-display"
          style={{ fontWeight: 700, color: '#FFF', fontSize: '1.8rem', lineHeight: 1.3, maxWidth: '520px', textAlign: 'center', margin: 0 }}
        >
          Dos estudiantes de Medellín que se hartaron
          de ir a eventos y salir con las mismas
          personas de siempre.
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', width: '100%' }}>
          {TEAM.map((m, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-12%' }}
              transition={{ duration: 0.75, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background:   '#0A0A0A',
                border:       '1px solid #1A1A1A',
                borderRadius: '16px',
                padding:      '36px',
                display:      'flex',
                flexDirection:'column',
                gap:          '16px',
                transition:   'border-color 300ms, transform 300ms',
                cursor:       'default',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = '#333'
                el.style.transform   = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = '#1A1A1A'
                el.style.transform   = 'translateY(0)'
              }}
            >
              {/* Avatar — replace with <img src="/sebastian.jpg"> or "/abraham.jpg" */}
              <div style={{
                width:        '80px',
                height:       '80px',
                borderRadius: '50%',
                background:   'linear-gradient(135deg, #000, #1A1A1A)',
                border:       '1px solid #222',
                display:      'flex',
                alignItems:   'center',
                justifyContent: 'center',
                overflow:     'hidden',
              }}>
                <span className="font-display" style={{ fontWeight: 700, fontSize: '1.8rem', color: '#555' }}>
                  {m.initial}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <h3 className="font-display" style={{ fontWeight: 700, color: '#FFF', fontSize: '1.1rem', margin: 0 }}>
                  {m.name}
                </h3>
                <p className="font-body" style={{ color: '#3B82F6', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600, margin: 0 }}>
                  {m.role}
                </p>
                <p className="font-body" style={{ color: '#444', fontSize: '0.85rem', margin: 0 }}>
                  {m.career}
                </p>
              </div>

              <p className="font-body" style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6, marginTop: '4px', margin: 0 }}>
                {m.bio}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
