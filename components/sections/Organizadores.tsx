'use client'

import { motion } from 'framer-motion'

const cards = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
    title: 'Qué intereses dominan en tu audiencia real.',
    desc: 'No suposiciones — datos.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="3"/><circle cx="15" cy="8" r="3"/><circle cx="15" cy="16" r="3"/><path d="M12 12l3-4M12 12l3 4"/></svg>,
    title: 'Cuántas conexiones reales generó tu evento.',
    desc: 'No solo cuántos asistieron.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20M6 20V10l6-6 6 6v10"/><path d="M10 20v-5h4v5"/></svg>,
    title: 'Cómo mejorar el próximo evento.',
    desc: 'Con datos reales de comportamiento social de tu audiencia.',
  },
]

export default function Organizadores() {
  return (
    <section id="como-funciona" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-body font-semibold text-[#555] tracking-[0.1em] uppercase text-[0.7rem]">
            Para organizadores
          </span>
          <h2 className="font-display font-bold text-white text-[1.8rem] md:text-[2rem] leading-[1.25] max-w-lg">
            Organizas eventos.
            Nosotros te damos los datos
            que nunca tuviste.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              className="bg-[#0F0F0F] border border-[#1E1E1E] rounded-xl p-7 flex flex-col gap-4"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.75, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {c.icon}
              <h3 className="font-display font-bold text-white text-[0.95rem] leading-snug">{c.title}</h3>
              <p className="font-body text-[#777] text-[0.9rem] leading-[1.7]">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="font-body italic text-[#444] text-[0.8rem] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Los datos son siempre agregados y anónimos.
          Nunca datos individuales de personas.
        </motion.p>
      </div>
    </section>
  )
}
