'use client'

import { motion } from 'framer-motion'

const team = [
  {
    initial: 'S',
    name: 'Sebastián',
    role: 'CEO — Estrategia y producto',
    career: 'Ingeniería Administrativa',
    quote: 'Cree que las conexiones correctas cambian trayectorias.',
    // Reemplazar con <img src="/sebastian.jpg" alt="Sebastián" className="w-full h-full object-cover" />
  },
  {
    initial: 'A',
    name: 'Abraham',
    role: 'CTO — Tecnología y arquitectura',
    career: 'Ingeniería en Sistemas',
    quote: 'Construye la infraestructura que hace que todo esto funcione.',
    // Reemplazar con <img src="/abraham.jpg" alt="Abraham" className="w-full h-full object-cover" />
  },
]

export default function Equipo() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto flex flex-col gap-14">

        <motion.h2
          className="font-display font-bold text-white leading-[1.25] max-w-[520px]"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 1.8rem)' }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          Dos estudiantes de Medellín
          que se hartaron de ir a eventos
          y salir con las mismas personas
          de siempre.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={i}
              className="bg-[#0F0F0F] border border-[#1E1E1E] rounded-xl p-8 flex flex-col gap-5"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.75, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Avatar — reemplazar con <img> cuando haya foto */}
              <div className="w-20 h-20 rounded-full border border-[#333] bg-black flex items-center justify-center overflow-hidden">
                <span className="font-display font-black text-3xl text-white">{m.initial}</span>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-display font-bold text-white text-[1.1rem]">{m.name}</h3>
                <p
                  className="font-body font-semibold uppercase tracking-[0.1em] text-[#3B82F6]"
                  style={{ fontSize: '0.7rem' }}
                >
                  {m.role}
                </p>
                <p className="font-body text-[#555] text-[0.85rem]">{m.career}</p>
              </div>

              <p className="font-body text-[#888] text-[0.9rem] leading-[1.7] border-t border-[#1E1E1E] pt-4">
                {m.quote}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
