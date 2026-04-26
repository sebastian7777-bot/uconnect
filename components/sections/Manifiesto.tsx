'use client'

import { motion } from 'framer-motion'

const GROUPS = [
  {
    lines: [
      { text: 'Hay una conversación que no ocurrió',   size: '1.3rem', weight: '400', color: '#333' },
      { text: 'en el último evento al que fuiste.',    size: '1.3rem', weight: '400', color: '#333' },
    ],
    delay: 0,
  },
  {
    lines: [
      { text: 'Una persona que hubiera cambiado algo.',           size: '1.1rem', weight: '400', color: '#555' },
      { text: 'Un proyecto que no arrancó',                       size: '1.1rem', weight: '400', color: '#555' },
      { text: 'porque dos personas nunca se encontraron.',        size: '1.1rem', weight: '400', color: '#555' },
    ],
    delay: 0.6,
  },
  {
    lines: [
      { text: 'Eso es lo que estamos resolviendo.',  size: '1.2rem', weight: '700', color: '#FFF' },
    ],
    delay: 1.4,
  },
  {
    lines: [
      { text: 'No con un feed.',       size: '1rem', weight: '400', color: '#444' },
      { text: 'No con un algoritmo.',  size: '1rem', weight: '400', color: '#444' },
      { text: 'Con intención.',        size: '1rem', weight: '700', color: '#FFF' },
    ],
    delay: 2.1,
  },
]

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]
const lineVariant = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export default function Manifiesto() {
  return (
    <section
      style={{ position: 'relative', zIndex: 1, minHeight: '100vh', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      className="py-24 px-6"
    >
      <div style={{ maxWidth: '600px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '28px' }}>

        {GROUPS.map((group, gi) => (
          <motion.div
            key={gi}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: '-8%' }}
            transition={{ staggerChildren: 0.09, delayChildren: group.delay }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}
          >
            {group.lines.map((line, li) => (
              <motion.p
                key={li}
                variants={lineVariant}
                className="font-display"
                style={{
                  fontWeight: line.weight,
                  color:      line.color,
                  fontSize:   line.size,
                  lineHeight: 1.45,
                  margin:     0,
                  fontStyle:  gi === 0 ? 'italic' : 'normal',
                }}
              >
                {line.text}
              </motion.p>
            ))}
          </motion.div>
        ))}

        {/* Final quote */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-8%' }}
          transition={{ staggerChildren: 0.09, delayChildren: 3.0 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', marginTop: '8px' }}
        >
          <motion.p
            variants={lineVariant}
            className="font-display"
            style={{ fontWeight: 900, color: '#FFF', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', lineHeight: 1.2, margin: 0 }}
          >
            Es como devolverse un poco
          </motion.p>
          <motion.p
            variants={lineVariant}
            className="font-display"
            style={{ fontWeight: 900, color: '#FFF', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', lineHeight: 1.2, margin: 0 }}
          >
            en el tiempo para poder
          </motion.p>
          <motion.p
            variants={lineVariant}
            className="font-display"
            style={{ fontWeight: 900, color: '#FFF', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', lineHeight: 1.2, margin: 0 }}
          >
            vivir más.
          </motion.p>
          <motion.p
            variants={lineVariant}
            className="font-body"
            style={{ color: '#333', fontSize: '0.8rem', fontStyle: 'italic', marginTop: '12px', marginBottom: 0 }}
          >
            — Conferencista, Tec de Monterrey
          </motion.p>
        </motion.div>

      </div>
    </section>
  )
}
