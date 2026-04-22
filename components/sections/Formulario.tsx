'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { FormData, FormState } from '@/types'

const MAX = 200

const inputStyle: React.CSSProperties = {
  width:           '100%',
  background:      '#050505',
  border:          '1px solid #1E1E1E',
  color:           '#FFF',
  borderRadius:    '10px',
  padding:         '14px 16px',
  fontSize:        '0.95rem',
  fontFamily:      'var(--font-body, sans-serif)',
  outline:         'none',
  transition:      'border-color 150ms, box-shadow 150ms',
  boxSizing:       'border-box',
}

const labelStyle: React.CSSProperties = {
  display:     'block',
  fontFamily:  'var(--font-body, sans-serif)',
  fontWeight:  500,
  color:       '#777',
  fontSize:    '0.82rem',
  marginBottom:'8px',
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

export default function Formulario() {
  const [form,  setForm]  = useState<FormData>({ nombre: '', email: '', organizacion: '', razon: '', perfil: '' })
  const [state, setState] = useState<FormState>({ status: 'idle' })
  const [chars, setChars] = useState(0)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (name === 'razon') setChars(value.length)
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setState({ status: 'loading' })
    const id = process.env.NEXT_PUBLIC_FORMSPREE_ID
    try {
      const res = await fetch(`https://formspree.io/f/${id}`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify(form),
      })
      setState(res.ok ? { status: 'success' } : { status: 'error', error: 'Algo salió mal. Intenta de nuevo.' })
    } catch {
      setState({ status: 'error', error: 'Algo salió mal. Intenta de nuevo.' })
    }
  }

  const nearLimit = chars >= MAX - 20
  const loading   = state.status === 'loading'

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
            viewport={{ once: true, margin: '-12%' }}
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
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display"
            style={{ fontWeight: 700, color: '#FFF', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.25, margin: 0 }}
          >
            30 cupos. Estamos construyendo<br />
            algo desde cero con las<br />
            personas correctas.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body"
            style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '420px', margin: '0 auto' }}
          >
            Cuéntanos quién eres. Revisamos cada perfil
            manualmente y te contactamos si quedas seleccionado.
          </motion.p>
        </div>

        {/* Form card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-12%' }}
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
            {state.status === 'success' ? (
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
                {/* Nombre */}
                <div>
                  <label style={labelStyle}>Nombre completo</label>
                  <input
                    type="text" name="nombre" required
                    placeholder="Tu nombre completo"
                    value={form.nombre} onChange={handleChange}
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
                    value={form.email} onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => focusStyle(e.currentTarget)}
                    onBlur={e  => blurStyle(e.currentTarget)}
                  />
                </div>

                {/* Organización */}
                <div>
                  <label style={labelStyle}>Universidad, empresa u organización</label>
                  <input
                    type="text" name="organizacion" required
                    placeholder="EIA, EAFIT, tu empresa..."
                    value={form.organizacion} onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => focusStyle(e.currentTarget)}
                    onBlur={e  => blurStyle(e.currentTarget)}
                  />
                </div>

                {/* Razón */}
                <div>
                  <label style={labelStyle}>¿Por qué quieres ser parte del prelanzamiento?</label>
                  <div style={{ position: 'relative' }}>
                    <textarea
                      name="razon" required maxLength={MAX} rows={4}
                      placeholder="Cuéntanos qué te trajo aquí."
                      value={form.razon} onChange={handleChange}
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={e => focusStyle(e.currentTarget)}
                      onBlur={e  => blurStyle(e.currentTarget)}
                    />
                    <span
                      className="font-body"
                      style={{
                        position:   'absolute',
                        bottom:     '12px',
                        right:      '14px',
                        fontSize:   '0.75rem',
                        transition: 'color 200ms',
                        color:      nearLimit ? '#3B82F6' : '#333',
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
                    value={form.perfil} onChange={handleChange}
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

                {state.status === 'error' && (
                  <p className="font-body" style={{ color: '#EF4444', fontSize: '0.85rem', margin: 0 }}>
                    {state.error}
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
                  {loading ? <><Spinner /> Enviando...</> : 'Solicitar mi cupo'}
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
