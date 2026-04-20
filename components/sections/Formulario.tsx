'use client'

import { useState, useRef, ChangeEvent, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { FormData, FormState } from '@/types'

const MAX = 200

const inputCls =
  'w-full bg-[#050505] border border-[#222] text-white placeholder-[#333] rounded-[10px] px-4 py-[14px] text-[0.95rem] font-body outline-none transition-all duration-150 focus:border-[#3B82F6] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]'

const labelCls = 'block font-body font-medium text-[#999] text-[0.85rem] mb-2'

function CheckIcon() {
  return (
    <div className="w-12 h-12 rounded-full border border-[#3B82F6]/40 flex items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 12 10 18 20 6" />
      </svg>
    </div>
  )
}

function Spinner() {
  return <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
}

export default function Formulario() {
  const [form, setForm] = useState<FormData>({
    nombre: '', email: '', organizacion: '', razon: '', perfil: '',
  })
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
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _replyto: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
        }),
      })
      setState(res.ok
        ? { status: 'success' }
        : { status: 'error', message: 'Algo salió mal. Intenta de nuevo.' }
      )
    } catch {
      setState({ status: 'error', message: 'Algo salió mal. Intenta de nuevo.' })
    }
  }

  const nearLimit = chars >= MAX - 20

  return (
    <section id="formulario" className="py-28 px-6 bg-black">
      <div className="max-w-[560px] mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <motion.p
            className="font-body italic text-[#555] text-[1rem]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            No hay algoritmo que decida.
            Dos personas van a leer lo que escribas.
          </motion.p>
          <motion.h2
            className="font-display font-bold text-white leading-[1.2]"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            30 cupos.
            Estamos construyendo algo desde cero
            con las personas correctas.
          </motion.h2>
          <motion.p
            className="font-body text-[#777] text-[0.95rem] leading-[1.7] max-w-[440px] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cuéntanos quién eres.
            Revisamos cada perfil manualmente
            y te contactamos si quedas seleccionado.
          </motion.p>
        </div>

        {/* Form card */}
        <motion.div
          className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-2xl p-8 md:p-10"
          style={{ boxShadow: '0 0 80px rgba(0,0,0,0.9)' }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatePresence mode="wait">
            {state.status === 'success' ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-5 py-8 text-center"
              >
                <CheckIcon />
                <h3 className="font-display font-bold text-white text-[1.3rem]">Solicitud recibida.</h3>
                <p className="font-body text-[#777] text-[0.95rem] leading-[1.8] max-w-sm">
                  Te contactaremos si quedas seleccionado.
                  Los cupos son limitados —
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
                className="flex flex-col gap-5"
              >
                {/* Nombre */}
                <div>
                  <label className={labelCls}>Nombre completo</label>
                  <input type="text" name="nombre" required placeholder="Tu nombre completo"
                    value={form.nombre} onChange={handleChange} className={inputCls} />
                </div>

                {/* Email */}
                <div>
                  <label className={labelCls}>Correo electrónico</label>
                  <input type="email" name="email" required placeholder="tu@correo.com"
                    value={form.email} onChange={handleChange} className={inputCls} />
                </div>

                {/* Organización */}
                <div>
                  <label className={labelCls}>Universidad, empresa u organización</label>
                  <input type="text" name="organizacion" required placeholder="EIA, EAFIT, tu empresa..."
                    value={form.organizacion} onChange={handleChange} className={inputCls} />
                </div>

                {/* Razón */}
                <div>
                  <label className={labelCls}>¿Por qué quieres ser parte del prelanzamiento?</label>
                  <div className="relative">
                    <textarea name="razon" required maxLength={MAX} rows={4}
                      placeholder="Cuéntanos qué te trajo aquí."
                      value={form.razon} onChange={handleChange}
                      className={`${inputCls} resize-none`}
                    />
                    <span
                      className="absolute bottom-3 right-4 text-xs font-body transition-colors duration-200"
                      style={{ color: nearLimit ? '#3B82F6' : '#333' }}
                    >
                      {chars} / {MAX}
                    </span>
                  </div>
                </div>

                {/* Perfil */}
                <div>
                  <label className={labelCls}>¿Cómo describes tu perfil?</label>
                  <select name="perfil" required value={form.perfil} onChange={handleChange}
                    className={`${inputCls} appearance-none cursor-pointer`}>
                    <option value="" disabled>Selecciona tu perfil</option>
                    <option value="estudiante">Estudiante universitario</option>
                    <option value="organizador">Organizador de eventos</option>
                    <option value="inversor">Inversor o empresario</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                {state.status === 'error' && (
                  <p className="font-body text-[#EF4444] text-[0.85rem]">{state.message}</p>
                )}

                <button
                  type="submit"
                  disabled={state.status === 'loading'}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-body font-bold text-[1rem] rounded-xl transition-all duration-200 hover:bg-[#E8E8E8] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(255,255,255,0.08)] disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 mt-2"
                >
                  {state.status === 'loading' ? <><Spinner /> Enviando...</> : 'Solicitar mi cupo'}
                </button>

                <p className="font-body text-[#333] text-[0.75rem] text-center mt-2">
                  Tus datos no se comparten con terceros.
                  Solo los usamos para revisar tu solicitud.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
