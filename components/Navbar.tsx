'use client'

import { useEffect, useState } from 'react'
import { Mode } from '@/app/page'

function Logo({ size = 32, fill = '#05050F' }: { size?: number; fill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="26" stroke="white" strokeWidth="5" fill="none" />
      <rect x="27" y="27" width="46" height="46" rx="13" stroke="white" strokeWidth="5" fill="none" />
      <rect x="27" y="50" width="46" height="24" rx="0" fill={fill} />
      <path d="M 27 62 L 27 63 Q 27 73 40 73 L 60 73 Q 73 73 73 62 L 73 50" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" />
      <rect x="27" y="27" width="46" height="24" rx="0" fill={fill} />
      <path d="M 24 50 A 26 26 0 0 1 76 50" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M 27 50 L 27 40 Q 27 27 40 27 L 60 27 Q 73 27 73 40 L 73 50" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export default function Navbar({ mode, setMode }: { mode: Mode; setMode: (m: Mode) => void }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
  const logoFill = scrolled ? 'rgba(5,5,15,0.85)' : '#05050F'
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      height: '60px', padding: '0 5vw',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'all 0.4s ease',
      background: scrolled ? 'rgba(5,5,15,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Logo size={34} fill={logoFill} />
        <span className="font-display font-bold text-white" style={{ fontSize: '1rem', letterSpacing: '-0.02em' }}>UConnect</span>
      </div>
      <div style={{
        display: 'flex', alignItems: 'center',
        background: 'rgba(255,255,255,0.06)', borderRadius: '10px',
        padding: '3px', gap: '2px', border: '1px solid rgba(255,255,255,0.1)',
      }}>
        {(['asistente', 'organizador'] as Mode[]).map(m => (
          <button key={m} onClick={() => setMode(m)} className="font-body" style={{
            background: mode === m ? '#fff' : 'transparent',
            color: mode === m ? '#000' : 'rgba(255,255,255,0.5)',
            border: 'none', borderRadius: '7px', padding: '6px 16px',
            fontSize: '0.82rem', fontWeight: mode === m ? 700 : 400,
            cursor: 'pointer', transition: 'all 0.22s ease', letterSpacing: '0.01em',
          }}>
            {m === 'asistente' ? 'Soy asistente' : 'Soy organizador'}
          </button>
        ))}
      </div>
      <a href="#formulario" className="font-body" style={{
        border: '1px solid rgba(255,255,255,0.2)', color: '#FFF',
        background: 'transparent', borderRadius: '8px', padding: '8px 18px',
        fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none', transition: 'all 0.2s ease',
      }}
        onMouseEnter={e => { const el = e.currentTarget; el.style.background = '#FFF'; el.style.color = '#000'; el.style.borderColor = '#FFF' }}
        onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'transparent'; el.style.color = '#FFF'; el.style.borderColor = 'rgba(255,255,255,0.2)' }}
      >
        {mode === 'organizador' ? 'Quiero activar UConnect' : 'Quiero ser de los primeros'}
      </a>
    </nav>
  )
}
