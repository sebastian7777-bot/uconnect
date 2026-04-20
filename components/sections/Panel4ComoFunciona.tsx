'use client'

import { motion } from 'framer-motion'
import StepCard from '@/components/ui/StepCard'

const steps = [
  {
    num: '01',
    title: 'Escaneas el QR del evento.',
    desc: 'Solo asistentes reales entran. Tú decides si eres visible para otros.',
  },
  {
    num: '02',
    title: 'Ves quién está y qué le interesa.',
    desc: 'Ya sabes de qué hablarle antes de acercarte.',
  },
  {
    num: '03',
    title: 'Nudge lo mantiene vivo.',
    desc: 'Después del evento, el sistema de IA de UConnect te ayuda a que la conexión no muera al día siguiente.',
  },
]

export default function Panel4ComoFunciona() {
  return (
    <section id="panel-como" className="w-screen h-screen flex-shrink-0 flex items-center">
      <div className="w-full md:w-[58%] flex flex-col gap-10 px-8 md:px-16 lg:px-24">

        <div>
          {['Tres momentos.', 'Una sola intención.'].map((line, i) => (
            <motion.h2
              key={i}
              className="block font-display font-bold text-white leading-[1.2]"
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

        <div className="flex flex-col gap-7">
          {steps.map((s, i) => (
            <StepCard key={i} {...s} delay={0.2 + i * 0.12} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-body italic text-[#444] text-[0.8rem]"
        >
          El antes del evento es opcional y siempre controlado por ti.
        </motion.p>
      </div>
    </section>
  )
}
