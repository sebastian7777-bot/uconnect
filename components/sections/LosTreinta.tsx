'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function CountUp({ target }: { target: number }) {
  const ref      = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)
  const animated = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !animated.current) {
        animated.current = true
        const start = Date.now()
        const dur   = 1500
        const tick  = () => {
          const p  = Math.min((Date.now() - start) / dur, 1)
          const v  = 1 - Math.pow(1 - p, 3)
          setCount(Math.floor(v * target))
          if (p < 1) requestAnimationFrame(tick)
          else setCount(target)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return <span ref={ref}>{count}</span>
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
}

export default function LosTreinta() {
  const progressRef = useRef<HTMLDivElement>(null)
  const inView      = useInView(progressRef, { once: true, margin: '-12%' })

  return (
    <section
      style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      className="py-24 px-6"
    >
      <div style={{ maxWidth: '700px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0', textAlign: 'center' }}>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-12%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display" style={{ fontWeight: 900, color: '#FFF', lineHeight: 1, fontSize: 'clamp(6rem, 12vw, 10rem)', margin: 0 }}>
            <CountUp target={30} />
          </p>
          <p className="font-body" style={{ color: '#333', fontSize: '1rem', marginTop: '4px', marginBottom: 0 }}>
            cupos. No más.
          </p>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-12%' }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-body"
          style={{ color: '#777', fontSize: '1rem', lineHeight: 1.9, maxWidth: '480px', marginTop: '32px', marginBottom: 0 }}
        >
          Estamos construyendo algo desde cero —<br />
          con integridad, con datos reales<br />
          y con las personas correctas.<br />
          <br />
          Treinta personas en Medellín que van a crear
          la primera red de conexiones intencionales
          de Colombia.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-12%' }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-body"
          style={{ color: '#333', fontSize: '0.8rem', fontStyle: 'italic', marginTop: '16px', marginBottom: 0 }}
        >
          ¿Por qué 30 y no miles?<br />
          En una red, todo empieza desde un punto.<br />
          Si entras, UConnect empieza desde ti.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-12%' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ width: '200px', height: '1px', background: '#1A1A1A', margin: '32px 0' }}
        />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-12%' }}
          transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display"
          style={{ fontWeight: 700, color: '#FFF', fontSize: '1.4rem', lineHeight: 1.4, margin: 0 }}
        >
          Si entras, no eres un usuario.<br />
          Eres parte de lo que UConnect es.
        </motion.p>

        {/* Progress bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-12%' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ width: '100%', maxWidth: '360px', marginTop: '32px' }}
          ref={progressRef}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span className="font-body" style={{ color: '#333', fontSize: '0.75rem' }}>Primera fase</span>
            <span className="font-body" style={{ color: '#333', fontSize: '0.75rem' }}>30 cupos</span>
          </div>
          <div style={{ background: '#141414', borderRadius: '100px', height: '3px', overflow: 'hidden' }}>
            <motion.div
              style={{ height: '100%', background: '#3B82F6', borderRadius: '100px' }}
              initial={{ width: '0%' }}
              animate={inView ? { width: '18%' } : { width: '0%' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-12%' }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ marginTop: '32px' }}
        >
          <a
            href="#formulario"
            className="font-body"
            style={{
              display:        'inline-flex',
              alignItems:     'center',
              justifyContent: 'center',
              padding:        '14px 32px',
              background:     '#FFF',
              color:          '#000',
              fontWeight:     700,
              fontSize:       '0.95rem',
              borderRadius:   '10px',
              textDecoration: 'none',
              transition:     'all 0.2s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.background = '#E8E8E8'
              el.style.transform  = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.background = '#FFF'
              el.style.transform  = 'translateY(0)'
            }}
          >
            Solicitar mi cupo
          </a>
        </motion.div>

      </div>
    </section>
  )
}
