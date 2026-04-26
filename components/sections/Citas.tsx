'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CITAS = [
  {
    texto: 'Vi la oportunidad, pero mi mente se quedó en blanco buscando qué decir.',
    autor:  'María Paula, 17 · Medicina, EIA',
  },
  {
    texto: 'Sobrepensar todo: qué decir, cómo hacerlo sin verme raro. Al final decidí esperar un mejor momento. Ese momento nunca llegó.',
    autor:  'Jerónimo, 18 · Ing. de Sistemas, EAFIT',
  },
  {
    texto: 'Conecté bien con la persona pero no logramos mantenernos en contacto después del evento. Cada quien siguió por su camino.',
    autor:  'Samuel, 19 · Administración, Uniandes',
  },
  {
    texto: 'Pensaba que más tarde podríamos hablar, pero se fue antes. Me quedé sin saber ni siquiera su nombre.',
    autor:  'David, 18 · Ing. Industrial, Universidad Nacional',
  },
]

export default function Citas() {
  const [current,   setCurrent]   = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused,    setPaused]    = useState(false)
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined)

  const go = (idx: number, dir: number) => {
    setDirection(dir)
    setCurrent(idx)
  }
  const next = () => go((current + 1) % CITAS.length, 1)
  const prev = () => go((current - 1 + CITAS.length) % CITAS.length, -1)

  useEffect(() => {
    if (paused) return
    timer.current = setInterval(next, 5000)
    return () => clearInterval(timer.current)
  }, [current, paused])

  const variants = {
    enter:  (d: number) => ({ opacity: 0, x: d > 0 ? 48 : -48 }),
    center: { opacity: 1, x: 0 },
    exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -48 : 48 }),
  }

  return (
    <section
      style={{ padding: '80px 5vw', background: '#08080F' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>

        <p style={{
          fontSize: '11px', fontWeight: 500, color: '#3B82F6',
          fontFamily: 'Inter', textTransform: 'uppercase',
          letterSpacing: '0.1em', marginBottom: '48px',
        }}>
          Lo que nos dijeron
        </p>

        <div style={{
          position: 'relative', minHeight: '180px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'absolute', width: '100%' }}
            >
              <p style={{
                fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)',
                color: '#94A3B8', fontFamily: 'Inter',
                fontStyle: 'italic', lineHeight: 1.75,
                margin: '0 0 28px',
              }}>
                "{CITAS[current].texto}"
              </p>
              <p style={{
                fontSize: '0.82rem', color: '#475569',
                fontFamily: 'Inter', margin: 0,
              }}>
                — {CITAS[current].autor}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navegación */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: '16px', marginTop: '48px',
        }}>
          <button onClick={prev} style={{
            width: '36px', height: '36px',
            border: '1px solid #1A1A35', borderRadius: '50%',
            background: 'transparent', cursor: 'pointer',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', color: '#475569',
            transition: 'all 200ms',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#3B82F6'
            e.currentTarget.style.color = '#3B82F6'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#1A1A35'
            e.currentTarget.style.color = '#475569'
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {CITAS.map((_, i) => (
              <button key={i}
                onClick={() => go(i, i > current ? 1 : -1)}
                style={{
                  width: i === current ? '24px' : '6px',
                  height: '6px', borderRadius: '100px',
                  background: i === current ? '#3B82F6' : '#1A1A35',
                  border: 'none', cursor: 'pointer',
                  transition: 'all 300ms ease', padding: 0,
                }}
              />
            ))}
          </div>

          <button onClick={next} style={{
            width: '36px', height: '36px',
            border: '1px solid #1A1A35', borderRadius: '50%',
            background: 'transparent', cursor: 'pointer',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', color: '#475569',
            transition: 'all 200ms',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#3B82F6'
            e.currentTarget.style.color = '#3B82F6'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#1A1A35'
            e.currentTarget.style.color = '#475569'
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}
