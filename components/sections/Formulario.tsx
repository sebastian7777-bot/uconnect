'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Mode } from '@/app/page'

const MAX = 200

const inputStyle: React.CSSProperties = {
  width:        '100%',
  background:   '#050505',
  border:       '1px solid #1E1E1E',
  color:        '#FFF',
  borderRadius: '10px',
  padding:      '14px 16px',
  fontSize:     '0.95rem',
  fontFamily:   'var(--font-body, sans-serif)',
  outline:      'none',
  transition:   'border-color 150ms, box-shadow 150ms',
  boxSizing:    'border-box',
}

const labelStyle: React.CSSProperties = {
  display:      'block',
  fontFamily:   'var(--font-body, sans-serif)',
  fontWeight:   500,
  color:        '#777',
  fontSize:     '0.82rem',
  marginBottom: '8px',
}

function focusStyle(el: HTMLElement) {
  el.style.borderColor = '#3B82F6'
  el.style.boxShadow   = '0 0 0 3px rgba(59,130,246,0.08)'
}
function blurStyle(el: HTMLElement) {
  el.style.borderColor = '#1E1E1E'
  el.style.boxShadow   = 'none'
}

function CheckIcon() {
  return (
    <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(59,130,246,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 12 10 18 20 6" />
      </svg>
    </div>
  )
}

function Spinner() {
  return <div style={{ width: '20px', height: '20px', border: '2px solid rgba(0,0,0,0.25)', borderTopColor: '#000', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
}

export default function Formulario({ mode = 'asistente' }: { mode?: Mode }) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error,   setError]   = useState('')
  const [chars,   setChars]   = useState(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.target as HTMLFormElement
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/xpqknjyn', {
        method:  'POST',
        body:    data,
        headers: { Accept: 'application/json' },
      })

      const json = await res.json()

      if (res.ok) {
        setSuccess(true)
      } else {
        console.error('Formspree error:', json)
        setError(json?.errors?.[0]?.message || 'Algo salió mal. Intenta de nuevo.')
      }
    } catch (err) {
      console.error('Fetch error:', err)
      setError('Algo salió mal. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  const nearLimit = chars >= MAX - 20

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show:   { opacity: 1, y: 0 },
  }

  return (
    <section
      id="formulario"
      style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      className="py-24 px-6"
    >
      <div style={{ maxWidth: '560px', width: '100%', display: 'flex', flexDirection: 'column', gap: '40px' }}>

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center' }}>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: '-8%' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="font-body"
            style={{ color: '#444', fontStyle: 'italic', fontSize: '0.95rem', margin: 0 }}
          >
            No hay algoritmo que decida.<br />
            Dos personas van a leer lo que escribas.
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: '-8%' }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display"
            style={{ fontWeight: 700, color: '#FFF', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.25, margin: 0 }}
          >
            {mode === 'organizador'
              ? 'Activa UConnect en tu evento'
              : <>30 cupos. Estamos construyendo<br />algo desde cero con las<br />personas correctas.</>}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: '-8%' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body"
            style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '420px', margin: '0 auto' }}
          >
            {mode === 'organizador'
              ? 'Cuéntanos sobre tus eventos. Te contactamos en menos de 48 horas.'
              : 'Cuéntanos quién eres. Revisamos cada perfil manualmente y te contactamos si quedas seleccionado.'}
          </motion.p>
        </div>

        {/* Form card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-8%' }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background:   '#080808',
            border:       '1px solid #1A1A1A',
            borderRadius: '16px',
            padding:      'clamp(24px, 5vw, 40px)',
            boxShadow:    '0 0 100px rgba(0,0,0,0.95)',
          }}
        >
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '32px 0', textAlign: 'center' }}
              >
                <CheckIcon />
                <h3 className="font-display" style={{ fontWeight: 700, color: '#FFF', fontSize: '1.3rem', margin: 0 }}>
                  Solicitud recibida.
                </h3>
                <p className="font-body" style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.8, maxWidth: '360px', margin: 0 }}>
                  Te contactaremos si quedas seleccionado.<br />
                  Los cupos son limitados —<br />
                  revisamos cada perfil manualmente.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                <input type="hidden" name="_replyto"  value="amazonono200@gmail.com"/>
                <input type="hidden" name="_subject"  value="Nueva solicitud — UConnect Prelanzamiento"/>

                {/* Nombre */}
                <div>
                  <label style={labelStyle}>Nombre completo</label>
                  <input
                    type="text" name="nombre" required
                    placeholder="Tu nombre completo"
                    style={inputStyle}
                    onFocus={e => focusStyle(e.currentTarget)}
                    onBlur={e  => blurStyle(e.currentTarget)}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle}>Correo electrónico</label>
                  <input
                    type="email" name="email" required
                    placeholder="tu@correo.com"
                    style={inputStyle}
                    onFocus={e => focusStyle(e.currentTarget)}
                    onBlur={e  => blurStyle(e.currentTarget)}
                  />
                </div>

                {/* Organización */}
                <div>
                  <label style={labelStyle}>{mode === 'organizador' ? '¿Qué tipo de eventos organizas?' : 'Universidad, empresa u organización'}</label>
                  <input
                    type="text" name="organizacion" required
                    placeholder={mode === 'organizador' ? 'Hackathones, inmersiones, conferencias...' : 'EIA, EAFIT, tu empresa...'}
                    style={inputStyle}
                    onFocus={e => focusStyle(e.currentTarget)}
                    onBlur={e  => blurStyle(e.currentTarget)}
                  />
                </div>

                {/* Razón */}
                <div>
                  <label style={labelStyle}>{mode === 'organizador' ? '¿Por qué quieres activar UConnect en tu evento?' : '¿Por qué quieres ser parte del prelanzamiento?'}</label>
                  <div style={{ position: 'relative' }}>
                    <textarea
                      name="razon" required maxLength={MAX} rows={4}
                      placeholder="Cuéntanos qué te trajo aquí."
                      onChange={e => setChars(e.target.value.length)}
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={e => focusStyle(e.currentTarget)}
                      onBlur={e  => blurStyle(e.currentTarget)}
                    />
                    <span
                      className="font-body"
                      style={{
                        position:      'absolute',
                        bottom:        '12px',
                        right:         '14px',
                        fontSize:      '0.75rem',
                        transition:    'color 200ms',
                        color:         nearLimit ? '#3B82F6' : '#333',
                        pointerEvents: 'none',
                      }}
                    >
                      {chars} / {MAX}
                    </span>
                  </div>
                </div>

                {/* Perfil */}
                <div>
                  <label style={labelStyle}>¿Cómo describes tu perfil?</label>
                  <select
                    name="perfil" required
                    defaultValue=""
                    style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                    onFocus={e => focusStyle(e.currentTarget)}
                    onBlur={e  => blurStyle(e.currentTarget)}
                  >
                    <option value="" disabled>Selecciona tu perfil</option>
                    <option value="estudiante">Estudiante universitario</option>
                    <option value="organizador">Organizador de eventos</option>
                    <option value="inversor">Inversor o empresario</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                {error && (
                  <p className="font-body" style={{ color: '#EF4444', fontSize: '0.85rem', margin: 0 }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="font-body"
                  style={{
                    width:          '100%',
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    gap:            '10px',
                    padding:        '15px',
                    background:     '#FFF',
                    color:          '#000',
                    fontWeight:     700,
                    fontSize:       '0.95rem',
                    borderRadius:   '10px',
                    border:         'none',
                    cursor:         loading ? 'not-allowed' : 'pointer',
                    opacity:        loading ? 0.6 : 1,
                    transition:     'all 0.2s ease',
                    marginTop:      '4px',
                  }}
                  onMouseEnter={e => {
                    if (loading) return
                    const el = e.currentTarget
                    el.style.background = '#E5E5E5'
                    el.style.transform  = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.background = '#FFF'
                    el.style.transform  = 'translateY(0)'
                  }}
                >
                  {loading ? (
                    <><Spinner /> Enviando...</>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 100 100" fill="none">
                        <circle cx="33" cy="50" r="28" stroke="black" strokeWidth="8" fill="none"/>
                        <circle cx="67" cy="50" r="28" stroke="black" strokeWidth="8" fill="none"/>
                      </svg>
                      {mode === 'organizador' ? 'Explorar la alianza' : 'Solicitar mi cupo'}
                    </>
                  )}
                </button>

                <p className="font-body" style={{ color: '#222', fontSize: '0.72rem', textAlign: 'center', margin: 0 }}>
                  Tus datos no se comparten con terceros.
                  Solo los usamos para revisar tu solicitud.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}
