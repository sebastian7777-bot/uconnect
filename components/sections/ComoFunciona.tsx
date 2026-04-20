'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'

const steps = [
  {
    num: '01',
    title: 'Crea tu perfil de intereses',
    desc: 'En menos de 3 minutos. Sin CV, sin historial laboral.',
    highlight: false,
  },
  {
    num: '02',
    title: 'Ve quién más va',
    desc: 'Antes del evento ves personas con intereses compatibles.',
    highlight: false,
  },
  {
    num: '03',
    title: 'Conecta con intención',
    desc: 'Solicitud de Connect con contexto — saben por qué se conectaron.',
    highlight: false,
  },
  {
    num: '04',
    title: 'Nudge mantiene la conexión',
    desc: 'No muere con el evento.',
    highlight: true,
  },
]

function ConnectorLine() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} className="absolute left-[19px] top-10 bottom-10 w-px overflow-hidden">
      <motion.div
        className="w-full bg-gradient-to-b from-white/60 to-white/10"
        initial={{ height: '0%' }}
        animate={inView ? { height: '100%' } : { height: '0%' }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        style={{ originY: 0 }}
      />
    </div>
  )
}

export default function ComoFunciona() {
  return (
    <section className="py-24 px-6 bg-[#080808]">
      <div className="max-w-3xl mx-auto flex flex-col gap-16">

        <ScrollReveal>
          <div className="flex flex-col gap-4">
            <span className="label-text text-[#555555]">Cómo funciona</span>
            <h2 className="font-display font-black text-[1.8rem] md:text-[3rem] leading-[1.2] text-white">
              Simple. Intencional. Real.
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative pl-12">
          <ConnectorLine />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-6 items-start group">
                  {/* Dot */}
                  <div className={`absolute left-0 w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200 ${
                    step.highlight
                      ? 'border-white bg-white/10 text-white'
                      : 'border-[#2A2A2A] bg-[#0F0F0F] text-[#555555]'
                  }`}>
                    <span className={`font-display font-bold text-xs ${step.highlight ? 'text-white' : 'text-[#555555]'}`}>
                      {step.num}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <h3 className={`font-display font-bold text-base md:text-lg ${step.highlight ? 'text-white' : 'text-[#E8E8E8]'}`}>
                      {step.title}
                    </h3>
                    <p className="text-[#999999] text-sm md:text-base leading-[1.7] font-body">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
