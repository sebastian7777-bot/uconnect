'use client'

import { motion } from 'framer-motion'
import CitaCard from '@/components/ui/CitaCard'

const h2Lines = ['Viste la oportunidad.', 'Tu mente se quedó', 'en blanco.']

const citas = [
  {
    quote: 'Vi la oportunidad, pero mi mente se quedó en blanco buscando qué decir.',
    author: '— María Paula, 17 — Medicina, EIA',
  },
  {
    quote: 'Sobrepensar todo: qué decir, cómo hacerlo sin verme raro. Al final decidí esperar un mejor momento. Ese momento nunca llegó.',
    author: '— Jerónimo, 17 — Ingeniería de Sistemas, EIA',
  },
  {
    quote: 'Conecté bien con la persona pero no logramos mantenernos en contacto después del evento. Cada quien siguió por su camino.',
    author: '— Samuel, 18 — Ingeniería de Sistemas, EIA',
  },
  {
    quote: 'Pensaba que más tarde podríamos hablar, pero se fue antes. Me quedé sin saber ni siquiera su nombre.',
    author: '— David, 18 — Ingeniería de Sistemas, EIA',
  },
]

export default function Panel2Dolor() {
  return (
    <section className="w-screen h-screen flex-shrink-0 flex items-center overflow-y-auto md:overflow-hidden">
      <div className="w-full md:w-[58%] flex flex-col gap-7 px-8 md:px-16 lg:px-24 py-12 md:py-0">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6 }}
          className="font-body font-semibold text-[#666] text-[1rem] uppercase tracking-[0.15em]"
        >
          Esto te ha pasado
        </motion.p>

        <div>
          {h2Lines.map((line, i) => (
            <motion.h2
              key={i}
              className="block font-display font-bold text-white leading-[1.15]"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {line}
            </motion.h2>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-[#777] text-[1rem]"
        >
          128 personas. El mismo patrón.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {citas.map((c, i) => (
            <CitaCard key={i} quote={c.quote} author={c.author} delay={0.1 + i * 0.12} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-body italic text-[#444] text-[0.8rem] text-center"
        >
          128 personas encuestadas. EIA, EAFIT, Uniandes, Sabana, Javeriana, Valle, Nacional.
        </motion.p>
      </div>
    </section>
  )
}
