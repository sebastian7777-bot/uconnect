'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function ProgressCircles() {
  const [animated, setAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-12%' })

  useEffect(() => {
    if (!inView) return
    const timer = setTimeout(() => setAnimated(true), 400)
    return () => clearTimeout(timer)
  }, [inView])

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        gap:             '0px',
        margin:          '24px auto',
      }}>
        <svg width="160" height="80" viewBox="0 0 160 80" fill="none">
          <defs>
            <clipPath id="leftClip">
              <rect x="0" y="0" width={animated ? 65 : 0} height="80">
                <animate
                  attributeName="width"
                  from="0" to="65"
                  dur="1.5s"
                  calcMode="spline"
                  keySplines="0.16 1 0.3 1"
                  begin={animated ? '0s' : 'indefinite'}
                  fill="freeze"
                />
              </rect>
            </clipPath>
            <clipPath id="rightClip">
              <rect x="65" y="0" width={animated ? 95 : 0} height="80">
                <animate
                  attributeName="width"
                  from="0" to="95"
                  dur="1.5s"
                  calcMode="spline"
                  keySplines="0.16 1 0.3 1"
                  begin={animated ? '0.2s' : 'indefinite'}
                  fill="freeze"
                />
              </rect>
            </clipPath>
          </defs>

          <circle cx="55"  cy="40" r="34" stroke="#1A1A35" strokeWidth="2" fill="none"/>
          <circle cx="105" cy="40" r="34" stroke="#1A1A35" strokeWidth="2" fill="none"/>

          <circle cx="55"  cy="40" r="34" stroke="#3B82F6" strokeWidth="2" fill="rgba(59,130,246,0.08)" clipPath="url(#leftClip)"/>
          <circle cx="105" cy="40" r="34" stroke="#1A1A35" strokeWidth="2" fill="rgba(59,130,246,0.03)" clipPath="url(#rightClip)"/>

          <text x="48"  y="36" textAnchor="middle" fontSize="11" fill="#3B82F6" fontFamily="Plus Jakarta Sans" fontWeight="700">5</text>
          <text x="48"  y="50" textAnchor="middle" fontSize="9"  fill="#475569" fontFamily="Inter">tomados</text>
          <text x="105" y="36" textAnchor="middle" fontSize="11" fill="#1E293B" fontFamily="Plus Jakarta Sans" fontWeight="700">25</text>
          <text x="105" y="50" textAnchor="middle" fontSize="9"  fill="#1E293B" fontFamily="Inter">libres</text>
        </svg>
      </div>
      <p style={{ fontSize: '0.75rem', color: '#1E293B', fontFamily: 'Inter', fontStyle: 'italic', textAlign: 'center' }}>
        Primera fase · 30 cupos en total
      </p>
    </div>
  )
}

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

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-12%' }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ProgressCircles />
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
