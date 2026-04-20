'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-[20px] border-b border-[#1A1A1A]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-display font-bold text-lg tracking-tight">
          <span className="text-white">U</span>
          <span className="text-[#AAAAAA]">Connect</span>
        </a>

        <a
          href="#formulario"
          className="px-5 py-2 border border-white/80 text-white text-sm font-body font-medium rounded-md transition-all duration-200 hover:bg-white hover:text-black"
        >
          Unirme
        </a>
      </div>
    </motion.nav>
  )
}
