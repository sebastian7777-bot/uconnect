'use client'

import { useState, useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const HeroSphere = dynamic(() => import('../three/HeroSphere'), { ssr: false })

const h1Lines = [
  'Conectamos personas reales',
  'en el mundo real.',
  'Y hacemos que esas',
  'conexiones duren.',
]

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const [ready,    setReady]    = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    setReady(true)
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section
      id="hero"
      style={{
        position:   'relative',
        minHeight:  '100vh',
        display:    'flex',
        alignItems: 'center',
        zIndex:     1,
      }}
    >
      {/* Desktop: two columns */}
      {!isMobile ? (
        <div style={{ display: 'flex', width: '100%', minHeight: '100vh', alignItems: 'center' }}>
          {/* Left: text (55%) */}
          <div style={{ width: '55%', paddingLeft: '6vw', paddingRight: '2vw', paddingTop: '80px', paddingBottom: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <TextContent />
          </div>

          {/* Right: sphere (45%) */}
          <div style={{ width: '45%', height: '100vh', position: 'relative', flexShrink: 0 }}>
            {ready && (
              <Suspense fallback={null}>
                <HeroSphere count={300} />
              </Suspense>
            )}
          </div>
        </div>
      ) : (
        /* Mobile: stacked */
        <div style={{ width: '100%', paddingTop: '80px', paddingBottom: '40px', display: 'flex', flexDirection: 'column', gap: '0' }}>
          <div style={{ padding: '0 24px 32px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <TextContent />
          </div>
          <div style={{ width: '100%', height: '280px', position: 'relative' }}>
            {ready && (
              <Suspense fallback={null}>
                <HeroSphere count={150} />
              </Suspense>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

function TextContent() {
  return (
    <>
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
      >
        <motion.span
          style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', display: 'inline-block' }}
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span
          className="font-body"
          style={{ color: '#555', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
        >
          Acceso cerrado · Prelanzamiento
        </span>
      </motion.div>

      {/* Pre-título */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="font-body"
        style={{ color: '#444', fontStyle: 'italic', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '420px' }}
      >
        Hay personas en Medellín que van a cambiar lo que construyes.
        Algunas van al mismo evento que tú este mes.
        Nunca las vas a conocer.
      </motion.p>

      {/* H1 */}
      <motion.h1
        className="font-display"
        style={{ fontWeight: 900, color: '#FFF', lineHeight: 1.05, fontSize: 'clamp(2.8rem, 4.5vw, 5.5rem)', margin: 0 }}
      >
        {h1Lines.map((line, i) => (
          <motion.span
            key={i}
            className="block"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {line}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.28, ease: [0.16, 1, 0.3, 1] }}
        className="font-body"
        style={{ color: '#666', fontSize: '1rem', lineHeight: 1.7, maxWidth: '420px', margin: 0 }}
      >
        ¿Siempre terminas con las mismas personas en los eventos?
        UConnect te muestra quién más comparte tus intereses —
        ahí, en ese evento, en ese momento.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '4px' }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <a
            href="#formulario"
            className="font-body"
            style={{
              display:        'inline-flex',
              alignItems:     'center',
              justifyContent: 'center',
              padding:        '14px 28px',
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
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = '0 8px 24px rgba(255,255,255,0.12)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.background = '#FFF'
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = 'none'
            }}
          >
            Quiero ser de los primeros 30
          </a>

          <a
            href="#como-funciona"
            className="font-body"
            style={{
              display:        'inline-flex',
              alignItems:     'center',
              color:          '#555',
              fontSize:       '0.95rem',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              transition:     'color 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#FFF' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#555' }}
          >
            Ver cómo funciona →
          </a>
        </div>

        <p className="font-body" style={{ color: '#333', fontSize: '0.75rem', fontStyle: 'italic', margin: 0 }}>
          30 cupos. Prelanzamiento cerrado.
        </p>
      </motion.div>
    </>
  )
}
