'use client'

import { motion } from 'framer-motion'

const profiles = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17v-1a6 6 0 0112 0v1"/><circle cx="9" cy="6" r="3.5"/></svg>,
    title: 'Estudiante con impacto',
    desc: 'Vas a eventos a hacer algo.\nNo solo a estar.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="16" height="12" rx="2"/><path d="M6 6V4a2 2 0 014 0v2M10 6V4a2 2 0 014 0v2"/></svg>,
    title: 'Empresario / profesional',
    desc: 'Buscas conexiones que abran\npuertas reales.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="8"/><path d="M10 5v5l3 2"/></svg>,
    title: 'Inversor o angel',
    desc: 'Ver proyectos y fundadores\nantes que nadie.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="4" cy="10" r="2"/><circle cx="16" cy="4" r="2"/><circle cx="16" cy="16" r="2"/><path d="M6 10h4M12 5l-4 5M12 15l-4-5"/></svg>,
    title: 'Creador de comunidad',
    desc: 'Tu valor está en conectar personas.\nUConnect te da la estructura.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2L2 6l8 4 8-4-8-4z"/><path d="M2 14l8 4 8-4M2 10l8 4 8-4"/></svg>,
    title: 'Persona con un proyecto',
    desc: 'Necesitas al cofundador correcto.\nEstá en el próximo evento.',
  },
]

export default function Panel5Diferenciacion() {
  return (
    <section className="w-screen h-screen flex-shrink-0 flex items-center overflow-y-auto md:overflow-hidden">
      <div className="w-full md:w-[58%] flex flex-col gap-7 px-8 md:px-16 lg:px-24 py-12 md:py-0">

        <motion.h2
          className="font-display font-bold text-white leading-[1.2]"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          No es lo que crees.
        </motion.h2>

        <motion.p
          className="font-body text-[#999] text-[1rem] leading-[1.7] max-w-[500px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Las apps para citas conectan fotos.
          LinkedIn conecta CVs.
          UConnect conecta personas que ya están
          en el mismo lugar, con los mismos intereses,
          en ese momento específico.
        </motion.p>

        <div className="w-full h-px bg-[#1E1E1E]" />

        <div>
          <motion.h3
            className="font-display font-bold text-white text-[1.4rem] mb-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            UConnect es para quien va en serio.
          </motion.h3>
          <motion.p
            className="font-body italic text-[#555] text-[0.9rem]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            No para quien colecciona tarjetas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {profiles.map((p, i) => (
            <motion.div
              key={i}
              className="group relative flex gap-4 p-4 rounded-xl border border-[#1A1A1A] bg-transparent transition-all duration-200 hover:bg-[rgba(59,130,246,0.03)] overflow-hidden cursor-default"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute left-0 top-3 bottom-3 w-0 group-hover:w-[3px] bg-[#3B82F6] rounded-r-full transition-all duration-200" />
              <div className="text-white/50 group-hover:text-white transition-colors duration-200 mt-0.5 shrink-0">
                {p.icon}
              </div>
              <div>
                <p className="font-display font-bold text-[#E8E8E8] text-[0.85rem] mb-0.5">{p.title}</p>
                <p className="font-body text-[#555] text-[0.8rem] leading-[1.6] group-hover:text-[#888] transition-colors duration-200 whitespace-pre-line">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
