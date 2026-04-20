'use client'

import { motion } from 'framer-motion'

// delay acumulado: líneas a 90ms, pausas de 1000ms entre párrafos
const lines: { text: string; delay: number; weight: string; color: string; size?: string }[] = [
  { text: 'Hay una conversación que no ocurrió',        delay: 0,    weight: '400', color: '#ffffff' },
  { text: 'en el último evento al que fuiste.',         delay: 0.09, weight: '400', color: '#ffffff' },
  { text: 'Una persona que hubiera cambiado algo.',     delay: 1.18, weight: '400', color: '#444444' },
  { text: 'Un proyecto que no arrancó',                 delay: 1.27, weight: '400', color: '#444444' },
  { text: 'porque dos personas nunca se encontraron.', delay: 1.36, weight: '400', color: '#444444' },
  { text: 'Eso es lo que estamos resolviendo.',         delay: 2.54, weight: '700', color: '#ffffff' },
  { text: 'No con un feed.',                            delay: 3.62, weight: '400', color: '#ffffff' },
  { text: 'No con un algoritmo.',                       delay: 3.71, weight: '400', color: '#ffffff' },
  { text: 'Con intención.',                             delay: 3.80, weight: '700', color: '#ffffff' },
  { text: 'Es como devolverse un poco en el tiempo',   delay: 5.0,  weight: '900', color: '#ffffff', size: '2rem' },
  { text: 'para poder vivir más.',                      delay: 5.09, weight: '900', color: '#ffffff', size: '2rem' },
]

export default function Manifiesto() {
  return (
    <section className="py-28 px-6 bg-black">
      <div className="max-w-2xl mx-auto flex flex-col gap-3 text-center">
        {lines.map((l, i) => (
          <motion.p
            key={i}
            className="font-display leading-[1.35]"
            style={{
              fontWeight: l.weight,
              color: l.color,
              fontSize: l.size ?? '1.15rem',
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-5%' }}
            transition={{ duration: 0.6, delay: l.delay, ease: [0.16, 1, 0.3, 1] }}
          >
            {l.text}
          </motion.p>
        ))}

        <motion.p
          className="font-body italic text-[#444] text-[0.8rem] mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-5%' }}
          transition={{ duration: 0.6, delay: 5.5 }}
        >
          — Conferencista, Tec de Monterrey
        </motion.p>
      </div>
    </section>
  )
}
