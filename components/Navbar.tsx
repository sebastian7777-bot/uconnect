'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-black/92 backdrop-blur-[24px] border-b border-[#111]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-display font-bold text-[1.1rem] text-white tracking-tight">
          UConnect
        </span>
        <a
          href="#formulario"
          className="px-5 py-2 border border-[#333] text-white font-body font-medium text-[0.9rem] rounded-[10px] transition-all duration-200 hover:bg-white hover:text-black hover:border-white"
        >
          Quiero ser de los primeros
        </a>
      </div>
    </motion.nav>
  )
}
