'use client'

import { useState, useRef, ChangeEvent, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import type { FormData, FormState } from '@/types'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/[TU_ENDPOINT_FORMSPREE]'
const MAX_CHARS = 200

const inputBase =
  'w-full bg-[#0F0F0F] border border-[#2A2A2A] text-white placeholder-[#555555] rounded-[10px] px-4 py-3.5 text-sm font-body outline-none transition-all duration-150 focus:border-white focus:ring-0'

function CheckIcon() {
  return (
    <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="5 14 11 20 23 8" />
      </svg>
    </div>
  )
}

function Spinner() {
  return (
    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
  )
}

export default function Formulario() {
  const [form, setForm] = useState<FormData>({
    nombre: '',
    email: '',
    perfil: '',
    por_que: '',
    como_nos_encontraste: '',
  })
  const [state, setState] = useState<FormState>({ status: 'idle' })
  const [charCount, setCharCount] = useState(0)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (name === 'por_que') setCharCount(value.length)
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setState({ status: 'loading' })

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setState({ status: 'success' })
      } else {
        setState({ status: 'error', message: 'Algo falló. Intenta de nuevo o escríbenos directamente.' })
      }
    } catch {
      setState({ status: 'error', message: 'No se pudo enviar. Verifica tu conexión e intenta de nuevo.' })
    }
  }

  const nearLimit = charCount >= MAX_CHARS - 20

  return (
    <section id="formulario" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-xl mx-auto flex flex-col gap-12">

        <ScrollReveal>
          <div className="flex flex-col gap-4">
            <span className="label-text text-[#555555]">Prelanzamiento</span>
            <h2 className="font-display font-black text-[1.8rem] md:text-[3rem] leading-[1.2] text-white">
              Quiero ser uno de los primeros 30
            </h2>
            <p className="text-[#999999] text-base leading-[1.7] font-body">
              Cuéntanos quién eres. Revisaremos cada solicitud personalmente
              y te contactamos si eres un buen fit para esta primera fase.
            </p>
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          {state.status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-6 py-12 text-center"
            >
              <CheckIcon />
              <h3 className="font-display font-black text-white text-2xl">Solicitud recibida.</h3>
              <p className="text-[#999999] text-base leading-[1.7] font-body max-w-sm">
                La revisamos personalmente y te contactamos en los próximos días.
                Si eres un buen fit, serás parte de los primeros 30 que construirán
                UConnect desde adentro.
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
              <div className="flex flex-col gap-2">
                <label className="text-xs font-body text-[#AAAAAA]">Nombre completo *</label>
                <input
                  type="text"
                  name="nombre"
                  required
                  placeholder="Tu nombre completo"
                  value={form.nombre}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-body text-[#AAAAAA]">Correo electrónico *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="tu@correo.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>

              {/* Perfil */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-body text-[#AAAAAA]">¿Cómo te describes? *</label>
                <select
                  name="perfil"
                  required
                  value={form.perfil}
                  onChange={handleChange}
                  className={`${inputBase} appearance-none cursor-pointer`}
                >
                  <option value="" disabled>Selecciona tu perfil</option>
                  <option value="estudiante">Estudiante universitario</option>
                  <option value="empresario">Empresario o profesional</option>
                  <option value="inversor">Inversor o angel</option>
                  <option value="comunidad">Creador de comunidad</option>
                  <option value="proyecto">Tengo un proyecto — busco equipo</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              {/* Por qué */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-body text-[#AAAAAA]">¿Por qué quieres ser parte de UConnect? *</label>
                <div className="relative">
                  <textarea
                    name="por_que"
                    required
                    maxLength={MAX_CHARS}
                    placeholder="Cuéntanos en tus propias palabras..."
                    value={form.por_que}
                    onChange={handleChange}
                    rows={4}
                    className={`${inputBase} resize-none`}
                  />
                  <span className={`absolute bottom-3 right-4 text-xs font-body transition-colors duration-200 ${
                    nearLimit ? 'text-white' : 'text-[#555555]'
                  }`}>
                    {charCount} / {MAX_CHARS}
                  </span>
                </div>
              </div>

              {/* Cómo nos encontraste */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-body text-[#AAAAAA]">¿Cómo nos encontraste? <span className="text-[#555555]">(opcional)</span></label>
                <select
                  name="como_nos_encontraste"
                  value={form.como_nos_encontraste}
                  onChange={handleChange}
                  className={`${inputBase} appearance-none cursor-pointer`}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="redes">Redes sociales</option>
                  <option value="referido">Alguien me lo comentó</option>
                  <option value="evento">Evento</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              {/* Error */}
              {state.status === 'error' && (
                <p className="text-[#999999] text-xs font-body bg-[#141414] border border-[#222222] rounded-lg px-4 py-3">
                  {state.message}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={state.status === 'loading'}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-body font-bold text-base rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_32px_rgba(255,255,255,0.12)] disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0 mt-2"
              >
                {state.status === 'loading' ? (
                  <>
                    <Spinner />
                    Enviando...
                  </>
                ) : (
                  'Quiero ser parte — enviar solicitud'
                )}
              </button>

              <p className="text-center text-[#555555] text-xs font-body">
                Tus datos son solo para contactarte. Nunca los vendemos ni compartimos.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
