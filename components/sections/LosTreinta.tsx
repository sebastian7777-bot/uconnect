'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function CountUp({ target }: { target: number }) {
  const ref    = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const dur   = 1200
    const tick  = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target])

  return <span ref={ref}>{count}</span>
}

function ProgressBar({ pct }: { pct: number }) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className="w-full max-w-[400px] mx-auto flex flex-col gap-3">
      <div className="flex justify-between text-[0.8rem] font-body text-[#555]">
        <span>Primera fase</span>
        <span>30 cupos</span>
      </div>
      <div className="w-full h-1.5 bg-[#141414] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#3B82F6] rounded-full"
          initial={{ width: '0%' }}
          animate={inView ? { width: `${pct}%` } : { width: '0%' }}
          transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1], delay: 0.3 }}
        />
      </div>
    </div>
  )
}

export default function LosTreinta() {
  return (
    <section className="py-28 px-6 bg-[#080808]">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="font-display font-black text-white leading-none"
            style={{ fontSize: 'clamp(5rem, 12vw, 9rem)' }}
          >
            <CountUp target={30} />.
          </h2>
          <p className="font-body text-[#555] text-[1.2rem] mt-2">No más.</p>
        </motion.div>

        <div className="flex flex-col gap-4 max-w-[500px]">
          {[
            'Estamos construyendo algo desde cero — con integridad, con datos reales y con las personas correctas.',
            'Treinta personas en Medellín que van a crear la primera red de conexiones intencionales de Colombia.',
          ].map((text, i) => (
            <motion.p
              key={i}
              className="font-body text-[#888] text-[1rem] leading-[1.9]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.75, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {text}
            </motion.p>
          ))}

          <motion.p
            className="font-body italic text-[#444] text-[0.8rem] mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            ¿Por qué 30 y no miles?
            En una red, todo empieza desde un punto.
            Si entras, UConnect empieza desde ti.
          </motion.p>
        </div>

        <div className="w-full h-px bg-[#1A1A1A]" />

        <motion.p
          className="font-display font-bold text-white text-[1.3rem] leading-[1.4] max-w-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          Si entras, no eres un usuario.
          Eres parte de lo que UConnect es.
        </motion.p>

        <ProgressBar pct={18} />

        <motion.a
          href="#formulario"
          className="inline-flex items-center justify-center px-10 py-4 bg-white text-black font-body font-bold text-[1rem] rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Solicitar mi cupo
        </motion.a>
      </div>
    </section>
  )
}
