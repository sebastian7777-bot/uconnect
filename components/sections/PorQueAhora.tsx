'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'

const CUPOS_RESTANTES = 30
const FILLED_PCT = 0 // Ajustar cuando haya datos reales

function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1200
    const startTime = performance.now()

    function tick(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target])

  return <span ref={ref}>{count}</span>
}

function ProgressBar({ pct }: { pct: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <div className="flex justify-between text-xs font-body text-[#555555]">
        <span>Cupos disponibles</span>
        <span>{CUPOS_RESTANTES}</span>
      </div>
      <div className="w-full h-1.5 bg-[#1A1A1A] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white rounded-full"
          initial={{ width: '0%' }}
          animate={inView ? { width: `${pct}%` } : { width: '0%' }}
          transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1], delay: 0.3 }}
        />
      </div>
    </div>
  )
}

export default function PorQueAhora() {
  return (
    <section className="py-24 px-6 bg-[#080808]">
      <div className="max-w-3xl mx-auto flex flex-col gap-12">

        <ScrollReveal>
          <div className="flex flex-col gap-4">
            <span className="label-text text-[#555555]">Por qué ahora</span>
            <h2 className="font-display font-black text-[4rem] md:text-[6rem] leading-none text-white">
              <CountUp target={30} />. No más.
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-6">
          <ScrollReveal delay={0.1}>
            <p className="text-[#999999] text-base md:text-lg leading-[1.7] font-body">
              UConnect no es una app masiva todavía. Estamos construyendo algo desde cero —
              con integridad, con datos reales y con las personas correctas.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-[#999999] text-base md:text-lg leading-[1.7] font-body">
              En esta primera fase, solo vamos a trabajar con 30 personas. Las primeras 30
              desde las que crece toda la red en Medellín.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-[#AAAAAA] text-sm leading-[1.7] font-body italic">
              ¿Por qué los llamamos los primeros 30 y no usuarios? Porque en una red,
              todo empieza desde un punto. Si entras, UConnect empieza desde ti.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <h3 className="font-display font-black text-white text-xl md:text-2xl leading-[1.3]">
              Si entras, no eres un usuario. Eres parte de lo que UConnect es.
            </h3>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <ProgressBar pct={FILLED_PCT} />
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <a
            href="#formulario"
            className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-black font-body font-bold text-base rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_32px_rgba(255,255,255,0.15)]"
          >
            Solicitar mi lugar
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
