'use client'

import { motion } from 'framer-motion'

const h1Lines = [
  'Conectamos personas reales',
  'en el mundo real.',
  'Y hacemos que esas conexiones',
  'duren.',
]

export default function Panel1Apertura() {
  return (
    <section className="w-screen h-screen flex-shrink-0 flex items-center">
      <div className="w-full md:w-[58%] flex flex-col gap-6 px-8 md:px-16 lg:px-24">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2"
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] inline-block"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="font-body font-semibold text-[#555] tracking-[0.1em] uppercase text-[0.7rem]">
            Acceso cerrado — prelanzamiento
          </span>
        </motion.div>

        {/* Pre-título */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body italic text-[#555] text-[0.9rem] leading-[1.8] max-w-md"
        >
          Hay personas en Medellín que van a cambiar lo que construyes.
          Algunas van al mismo evento que tú este mes.
          Nunca las vas a conocer.
        </motion.p>

        {/* H1 stagger por línea */}
        <motion.h1
          className="font-display font-black text-white leading-[1.08]"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 5rem)' }}
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
          className="font-body text-[#888] text-[1.05rem] leading-[1.7] max-w-[480px]"
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
          className="flex flex-col sm:flex-row gap-3 mt-1"
        >
          <a
            href="#formulario"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-body font-bold text-[0.95rem] rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)]"
          >
            Quiero ser de los primeros 30
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-body font-medium text-[0.95rem] rounded-xl transition-all duration-200 hover:border-white/60 hover:-translate-y-0.5"
          >
            Ver cómo funciona
          </a>
        </motion.div>

        {/* Nota */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.75 }}
          className="font-body italic text-[#444] text-[0.75rem]"
        >
          30 cupos. Prelanzamiento cerrado.
        </motion.p>

        {/* Scroll hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0] }}
          transition={{ duration: 2, delay: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="font-body text-[#333] text-[0.8rem] tracking-widest hidden md:block"
        >
          scroll →
        </motion.p>
      </div>
    </section>
  )
}
