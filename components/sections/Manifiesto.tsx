'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PARRAFOS = [
  {
    texto: 'Hay una conversación que no ocurrió en el último evento al que fuiste.',
    peso:  'ligero',
  },
  {
    texto: 'Una persona que hubiera cambiado algo. Un proyecto que no arrancó porque dos personas nunca se encontraron.',
    peso:  'ligero',
  },
  {
    texto: 'Eso es lo que estamos resolviendo.',
    peso:  'fuerte',
  },
  {
    texto: 'No con un feed. No con un algoritmo. Con intención.',
    peso:  'ligero',
  },
]

function WordReveal({ texto, peso }: { texto: string; peso: string }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-15%' })
  const palabras = texto.split(' ')

  return (
    <p ref={ref} style={{
      fontSize:       peso === 'fuerte' ? 'clamp(1.4rem, 2.5vw, 2rem)' : 'clamp(1rem, 1.8vw, 1.3rem)',
      fontFamily:     'Plus Jakarta Sans',
      fontWeight:     peso === 'fuerte' ? 700 : 400,
      color:          peso === 'fuerte' ? '#E2E8F0' : '#475569',
      lineHeight:     1.6,
      textAlign:      'center',
      margin:         '0 0 40px',
      display:        'flex',
      flexWrap:       'wrap',
      justifyContent: 'center',
      gap:            '0.3em',
    }}>
      {palabras.map((palabra, i) => (
        <motion.span key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
        >
          {palabra}
        </motion.span>
      ))}
    </p>
  )
}

export default function Manifiesto() {
  return (
    <section style={{
      padding:    '160px 5vw',
      background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.04) 0%, transparent 65%)',
    }}>
      <div style={{ maxWidth: '560px', margin: '0 auto' }}>

        {PARRAFOS.map((p, i) => (
          <WordReveal key={i} texto={p.texto} peso={p.peso} />
        ))}

        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <p style={{
            fontFamily:    'Plus Jakarta Sans',
            fontWeight:    800,
            fontSize:      'clamp(1.6rem, 3vw, 2.4rem)',
            color:         '#E2E8F0',
            lineHeight:    1.2,
            letterSpacing: '-0.02em',
            margin:        '0 0 16px',
          }}>
            "Es como devolverse un poco<br />
            en el tiempo para poder<br />
            vivir más."
          </p>
          <p style={{
            fontSize:   '0.8rem',
            color:      '#1E293B',
            fontFamily: 'Inter',
            fontStyle:  'italic',
            margin:     0,
          }}>
            — Conferencista, Tec de Monterrey
          </p>
        </div>

      </div>
    </section>
  )
}
