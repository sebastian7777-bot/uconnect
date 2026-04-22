'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      style={{
        position:       'fixed',
        top:            0,
        left:           0,
        right:          0,
        zIndex:         1000,
        height:         '60px',
        padding:        '0 5vw',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
        transition:     'all 0.4s ease',
        background:     scrolled ? 'rgba(0,0,0,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom:   scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <span
        className="font-display font-bold text-white"
        style={{ fontSize: '1rem', letterSpacing: '-0.02em' }}
      >
        UConnect
      </span>

      <a
        href="#formulario"
        className="font-body"
        style={{
          border:         '1px solid rgba(255,255,255,0.2)',
          color:          '#FFF',
          background:     'transparent',
          borderRadius:   '8px',
          padding:        '8px 18px',
          fontSize:       '0.85rem',
          fontWeight:     500,
          textDecoration: 'none',
          transition:     'all 0.2s ease',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget
          el.style.background = '#FFF'
          el.style.color = '#000'
          el.style.borderColor = '#FFF'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget
          el.style.background = 'transparent'
          el.style.color = '#FFF'
          el.style.borderColor = 'rgba(255,255,255,0.2)'
        }}
      >
        Quiero ser de los primeros
      </a>
    </nav>
  )
}
