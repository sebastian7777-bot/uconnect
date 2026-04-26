'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
}

const benefitVariant = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0 },
}

const ATTENDEE_BENEFITS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
        <polyline points="16 11 18 13 22 9"/>
      </svg>
    ),
    title: 'Sabes con quién hablar',
    text:  'Antes de llegar ves quién va y qué le interesa. La conversación ya tiene contexto.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Conectas con intención',
    text:  'No es suerte. Es afinidad real. Solicitas un Connect y los dos saben por qué se están conociendo.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="10" r="3"/>
        <polyline points="12 9 12 10 13 10"/>
      </svg>
    ),
    title: 'La conexión no muere con el evento',
    text:  'Nudge te recuerda con quién quedaste pendiente y te sugiere el primer paso.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Tú controlas tu visibilidad',
    text:  'Decides si eres visible para otros asistentes. Siempre en tus términos.',
  },
]

const ORGANIZER_BENEFITS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6"  y1="20" x2="6"  y2="14"/>
      </svg>
    ),
    title: 'Conoces a tu audiencia de verdad',
    text:  'Qué intereses dominan, qué perfiles asisten, qué busca tu comunidad. No suposiciones.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="5"  r="2"/>
        <circle cx="5"  cy="19" r="2"/>
        <circle cx="19" cy="19" r="2"/>
        <line x1="12" y1="7"  x2="5"  y2="17"/>
        <line x1="12" y1="7"  x2="19" y2="17"/>
        <line x1="7"  y1="19" x2="17" y2="19"/>
      </svg>
    ),
    title: 'Mides el impacto real',
    text:  'Cuántas conexiones generó tu evento. No solo cuántos asistentes llegaron.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: 'Mejoras el próximo evento',
    text:  'Con datos reales de comportamiento social de tu audiencia, cada evento es mejor que el anterior.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Tu comunidad te lo agradece',
    text:  'Cuando los asistentes se van con conexiones reales, vuelven. Y traen a otros.',
  },
]

function BenefitItem({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <motion.div variants={benefitVariant} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
      <div style={{
        width: '32px', height: '32px', flexShrink: 0,
        border: '1px solid #1A1A35', borderRadius: '8px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#0A0A1A',
      }}>
        {icon}
      </div>
      <div>
        <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#E2E8F0', fontFamily: 'Plus Jakarta Sans', margin: '0 0 4px' }}>
          {title}
        </p>
        <p style={{ fontSize: '0.85rem', color: '#475569', fontFamily: 'Inter', lineHeight: 1.6, margin: 0 }}>
          {text}
        </p>
      </div>
    </motion.div>
  )
}

export default function DosLados() {
  return (
    <section style={{ position: 'relative', zIndex: 1, padding: '120px 5vw' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <span style={{
              fontSize: '11px', fontWeight: 500, color: '#3B82F6',
              fontFamily: 'Inter', textTransform: 'uppercase', letterSpacing: '0.1em',
            }}>
              Para todos
            </span>
          </div>

          <h2 style={{
            fontFamily:    'Plus Jakarta Sans',
            fontWeight:    700,
            fontSize:      'clamp(2rem, 3.5vw, 3rem)',
            color:         '#E2E8F0',
            letterSpacing: '-0.02em',
            textAlign:     'center',
            maxWidth:      '600px',
            margin:        '0 auto 64px',
            lineHeight:    1.2,
          }}>
            UConnect funciona<br />
            para los dos lados del evento.
          </h2>
        </motion.div>

        {/* Two columns */}
        <div style={{
          display:       'flex',
          flexDirection: 'row',
          flexWrap:      'wrap',
        }}>

          {/* LEFT — Asistentes */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10%' }}
            style={{ flex: 1, minWidth: '280px', padding: '48px 40px 48px 0' }}
          >
            <motion.span
              variants={fadeUp}
              style={{
                fontSize: '11px', fontWeight: 500, color: '#475569',
                fontFamily: 'Inter', textTransform: 'uppercase',
                letterSpacing: '0.1em', display: 'block', marginBottom: '20px',
              }}
            >
              Si vas al evento
            </motion.span>

            <motion.h3
              variants={fadeUp}
              style={{
                fontFamily: 'Plus Jakarta Sans', fontWeight: 600,
                fontSize: '1.4rem', color: '#E2E8F0',
                lineHeight: 1.3, margin: '0 0 28px',
              }}
            >
              Llegas sabiendo.<br />
              Te vas conectado.
            </motion.h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {ATTENDEE_BENEFITS.map((b, i) => (
                <BenefitItem key={i} {...b} />
              ))}
            </div>
          </motion.div>

          {/* CENTER divider */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display:        'flex',
              flexDirection:  'column',
              alignItems:     'center',
              justifyContent: 'center',
              padding:        '0 32px',
              gap:            '16px',
              flexShrink:     0,
            }}
            className="hidden md:flex"
          >
            <div style={{
              width: '1px', flex: 1,
              background: 'linear-gradient(to bottom, transparent, #1A1A35)',
              minHeight: '60px',
            }}/>
            <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
              <circle cx="33" cy="50" r="28" stroke="#1A1A35" strokeWidth="6" fill="none"/>
              <circle cx="67" cy="50" r="28" stroke="#1A1A35" strokeWidth="6" fill="none"/>
            </svg>
            <div style={{
              width: '1px', flex: 1,
              background: 'linear-gradient(to top, transparent, #1A1A35)',
              minHeight: '60px',
            }}/>
          </motion.div>

          {/* Mobile horizontal divider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6 }}
            style={{
              width:          '100%',
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              gap:            '16px',
              padding:        '16px 0',
            }}
            className="flex md:hidden"
          >
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, #1A1A35)' }}/>
            <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
              <circle cx="33" cy="50" r="28" stroke="#1A1A35" strokeWidth="6" fill="none"/>
              <circle cx="67" cy="50" r="28" stroke="#1A1A35" strokeWidth="6" fill="none"/>
            </svg>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, #1A1A35)' }}/>
          </motion.div>

          {/* RIGHT — Organizadores */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10%' }}
            style={{ flex: 1, minWidth: '280px', padding: '48px 0 48px 40px' }}
          >
            <motion.span
              variants={fadeUp}
              style={{
                fontSize: '11px', fontWeight: 500, color: '#3B82F6',
                fontFamily: 'Inter', textTransform: 'uppercase',
                letterSpacing: '0.1em', display: 'block', marginBottom: '20px',
              }}
            >
              Si organizas el evento
            </motion.span>

            <motion.h3
              variants={fadeUp}
              style={{
                fontFamily: 'Plus Jakarta Sans', fontWeight: 600,
                fontSize: '1.4rem', color: '#E2E8F0',
                lineHeight: 1.3, margin: '0 0 28px',
              }}
            >
              Por primera vez,<br />
              datos reales de tu audiencia.
            </motion.h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {ORGANIZER_BENEFITS.map((b, i) => (
                <BenefitItem key={i} {...b} />
              ))}
            </div>
          </motion.div>

        </div>

        {/* Closing quote */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            textAlign:    'center',
            marginTop:    '64px',
            padding:      '32px',
            border:       '1px solid #1A1A35',
            borderRadius: '16px',
            background:   'rgba(10,10,26,0.5)',
            maxWidth:     '600px',
            margin:       '64px auto 0',
          }}
        >
          <p style={{
            fontSize:   '1.1rem',
            color:      '#94A3B8',
            fontFamily: 'Inter',
            lineHeight: 1.8,
            margin:     '0 0 16px',
            fontStyle:  'italic',
          }}>
            "Los mejores eventos no son los más grandes.<br />
            Son los que generan las conexiones<br />
            que la gente recuerda años después."
          </p>
          <p style={{ fontSize: '0.8rem', color: '#1E293B', fontFamily: 'Inter', margin: 0 }}>
            UConnect · Para organizadores y asistentes
          </p>
        </motion.div>

      </div>
    </section>
  )
}
