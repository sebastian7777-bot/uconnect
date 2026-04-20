'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Suspense } from 'react'

const UConnectScene = dynamic(() => import('@/components/three/UConnectScene'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
    </div>
  ),
})

function BlinkingDot() {
  return (
    <motion.span
      className="inline-block w-1.5 h-1.5 rounded-full bg-white mr-2"
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center flex-1 py-12 md:py-0 gap-0 md:gap-8">

        {/* Left: text */}
        <div className="w-full md:w-[55%] flex flex-col gap-7 z-10">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#2A2A2A] bg-[#0F0F0F] label-text text-[#AAAAAA]">
              <BlinkingDot />
              Acceso cerrado — prelanzamiento
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display font-black text-[2.4rem] md:text-[4.5rem] leading-[1.1] text-white"
          >
            Conoce a las personas correctas.{' '}
            <span className="text-[#AAAAAA]">Antes de que llegues al evento.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[#999999] text-base md:text-lg leading-[1.7] max-w-xl font-body"
          >
            UConnect organiza las conexiones que ocurren en eventos para que dejen de ser
            accidentales y se vuelvan intencionales.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#formulario"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-black font-body font-bold text-sm rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(255,255,255,0.15)]"
            >
              Quiero ser uno de los primeros 30
            </a>
            <a
              href="#que-es"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-[#2A2A2A] text-white font-body font-medium text-sm rounded-lg transition-all duration-200 hover:border-white/60 hover:-translate-y-0.5"
            >
              Conoce más sobre UConnect
            </a>
          </motion.div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-[#555555] text-xs font-body"
          >
            Solo 30 personas en esta primera fase.
          </motion.p>
        </div>

        {/* Right: 3D scene — desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden md:block w-[45%] h-[520px]"
        >
          <Suspense fallback={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          }>
            <UConnectScene />
          </Suspense>
        </motion.div>
      </div>

      {/* 3D scene — mobile, below text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="md:hidden w-full h-[280px]"
      >
        <Suspense fallback={
          <div className="flex items-center justify-center w-full h-full">
            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        }>
          <UConnectScene />
        </Suspense>
      </motion.div>

      {/* Gradient fade at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
