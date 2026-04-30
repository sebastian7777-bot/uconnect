'use client'

import { useState, useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import { Mode } from '@/app/page'

const GlobeComponent = dynamic(
  () => import('@/components/globe/GlobeComponent'),
  { ssr: false, loading: () => (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 40, height: 40, border: '2px solid #1a1a1a', borderTop: '2px solid #3B82F6', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
    </div>
  )}
)

const rotatingWords = ['estudiantes', 'emprendedores', 'inversores', 'creativos', 'personas con ideas']
const question = '¿Cuántas veces fuiste a un evento y te fuiste sin conocer a quien debías?'

export default function Hero({ mode }: { mode: Mode }) {
  const [isMobile, setIsMobile] = useState(false)
  const [ready,    setReady]    = useState(false)
  const [wordIdx,  setWordIdx]  = useState(0)
  const [answered, setAnswered] = useState(false)
  const [hovered,  setHovered]  = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check(); setReady(true)
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setWordIdx(prev => (prev + 1) % rotatingWords.length), 2200)
    return () => clearInterval(interval)
  }, [])

  const textContent = (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
        <motion.span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', display: 'inline-block' }}
          animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
        <span className="font-body" style={{ color: '#555', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Acceso cerrado · Prelanzamiento
        </span>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} style={{ maxWidth: '460px' }}>
        <p className="font-body" style={{ color: answered ? '#3B82F6' : '#555', fontStyle: 'italic', fontSize: '1rem', lineHeight: 1.65, margin: 0, transition: 'color 0.4s ease' }}>
          {question}
        </p>
        <AnimatePresence mode="wait">
          {!answered ? (
            <motion.div key="buttons" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}
              style={{ display: 'flex', gap: '10px', marginTop: '14px', flexWrap: 'wrap' }}>
              {['Siempre', 'Casi siempre', 'A veces'].map(opt => (
                <button key={opt} onClick={() => setAnswered(true)} className="font-body" style={{
                  background: 'transparent', border: '1px solid rgba(255,255,255,0.15)',
                  color: '#888', borderRadius: '8px', padding: '7px 16px',
                  fontSize: '0.82rem', cursor: 'pointer', transition: 'all 0.2s ease',
                }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = '#3B82F6'; el.style.color = '#3B82F6'; el.style.background = 'rgba(59,130,246,0.06)' }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(255,255,255,0.15)'; el.style.color = '#888'; el.style.background = 'transparent' }}
                >{opt}</button>
              ))}
            </motion.div>
          ) : (
            <motion.p key="answer" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="font-body" style={{ color: '#3B82F6', fontSize: '0.9rem', marginTop: '12px', lineHeight: 1.6 }}>
              Eso es exactamente lo que UConnect resuelve.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.h1 className="font-display" style={{ fontWeight: 900, color: '#FFF', lineHeight: 1.05, fontSize: 'clamp(2.8rem, 4.5vw, 5.5rem)', margin: 0 }}>
        <motion.span className="block" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          Conectamos{' '}
          <span style={{ position: 'relative', display: 'inline-block', minHeight: '1.1em', minWidth: '220px' }}
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <AnimatePresence mode="wait">
              <motion.span key={wordIdx}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                style={{ color: '#3B82F6', display: 'inline-block', borderBottom: hovered ? '3px solid #3B82F6' : '3px solid transparent', paddingBottom: '2px', cursor: 'default' }}>
                {rotatingWords[wordIdx]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.span>
        {['en el mundo real.', 'Y hacemos que esas', 'conexiones duren.'].map((line, i) => (
          <motion.span key={i} className="block" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.82 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}>
            {line}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.28, ease: [0.16, 1, 0.3, 1] }}
        className="font-body" style={{ color: '#666', fontSize: '1rem', lineHeight: 1.7, maxWidth: '420px', margin: 0 }}>
        {mode === 'organizador'
          ? 'UConnect activa el networking en tu evento. Tus asistentes conectan con quienes comparten sus intereses — ahí, en ese momento.'
          : 'UConnect te muestra quién más comparte tus intereses — ahí, en ese evento, en ese momento.'}
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '4px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <a href="#formulario" className="font-body" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            padding: '14px 28px', background: '#FFF', color: '#000',
            fontWeight: 700, fontSize: '0.95rem', borderRadius: '10px', textDecoration: 'none', transition: 'all 0.2s ease',
          }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.background = '#E8E8E8'; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 8px 24px rgba(255,255,255,0.12)' }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.background = '#FFF'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none' }}
          >
            {mode === 'organizador' ? 'Quiero activar UConnect' : 'Quiero ser de los primeros 30'}
          </a>
          <a href="#como-funciona" className="font-body" style={{
            display: 'inline-flex', alignItems: 'center', color: '#555',
            fontSize: '0.95rem', textDecoration: 'underline', textUnderlineOffset: '4px', transition: 'color 0.2s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = '#FFF' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#555' }}
          >Ver cómo funciona →</a>
        </div>
        <p className="font-body" style={{ color: '#333', fontSize: '0.75rem', fontStyle: 'italic', margin: 0 }}>
          {mode === 'organizador' ? 'Primer piloto sin costo para el organizador.' : '30 cupos. Prelanzamiento cerrado.'}
        </p>
      </motion.div>
    </>
  )

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', zIndex: 1 }}>
      {!isMobile ? (
        <div style={{ display: 'flex', width: '100%', minHeight: '100vh', alignItems: 'center' }}>
          <div style={{ width: '55%', paddingLeft: '6vw', paddingRight: '2vw', paddingTop: '80px', paddingBottom: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {textContent}
          </div>
          <div style={{ width: '45%', height: '100vh', position: 'relative', flexShrink: 0 }}>
            {ready && <Suspense fallback={null}><GlobeComponent /></Suspense>}
          </div>
        </div>
      ) : (
        <div style={{ width: '100%', paddingTop: '80px', paddingBottom: '40px', display: 'flex', flexDirection: 'column', gap: '0' }}>
          <div style={{ padding: '0 24px 32px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {textContent}
          </div>
          <div style={{ width: '100%', height: '280px', position: 'relative' }}>
            {ready && <Suspense fallback={null}><GlobeComponent /></Suspense>}
          </div>
        </div>
      )}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}
