'use client'

import { motion } from 'framer-motion'

const beneficios = [
  { icon: '📊', titulo: 'Datos que no existen en ningún otro evento', desc: 'Por primera vez sabes cuántas conexiones reales generó tu evento, qué intereses compartían tus asistentes y si esas conexiones duraron. Nadie tiene esto hoy.' },
  { icon: '⚡', titulo: 'Cero fricción para implementar', desc: 'Generas un QR único para tu evento. Tus asistentes lo escanean al llegar. UConnect se encarga de todo lo demás. Sin apps adicionales que instalar.' },
  { icon: '🎯', titulo: 'Diferenciación real de tu evento', desc: 'Un evento con UConnect es un evento con networking estructurado. Es un argumento concreto para comunicar antes, durante y después.' },
  { icon: '🤝', titulo: 'Cero costo en el primer piloto', desc: 'UConnect asume la tecnología y la operación. Tú pones el evento y los asistentes. Riesgo cero. Si funciona, tienes datos únicos de tu audiencia.' },
]

export default function ParaOrganizadores() {
  return (
    <section id="para-organizadores" style={{ padding: '100px 6vw', maxWidth: '1100px', margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <p className="font-body" style={{ color: '#3B82F6', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>Para organizadores</p>
        <h2 className="font-display" style={{ color: '#fff', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px' }}>
          Tus asistentes quieren conectar.<br />UConnect hace que eso pase.
        </h2>
        <p className="font-body" style={{ color: '#666', fontSize: '1rem', lineHeight: 1.7, maxWidth: '520px', marginBottom: '60px' }}>
          Activas UConnect en tu evento. Nosotros nos encargamos de la tecnología. Después del evento recibes el primer reporte de comportamiento social real de tu audiencia.
        </p>
      </motion.div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
        {beneficios.map((b, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', padding: '28px' }}
            whileHover={{ borderColor: 'rgba(59,130,246,0.35)', backgroundColor: 'rgba(59,130,246,0.04)' }}>
            <div style={{ fontSize: '1.6rem', marginBottom: '14px' }}>{b.icon}</div>
            <h3 className="font-display" style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '10px', lineHeight: 1.35 }}>{b.titulo}</h3>
            <p className="font-body" style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.65 }}>{b.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
        style={{ marginTop: '52px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <a href="#formulario" className="font-body" style={{
          display: 'inline-flex', alignItems: 'center', padding: '14px 28px',
          background: '#3B82F6', color: '#fff', fontWeight: 700, fontSize: '0.95rem',
          borderRadius: '10px', textDecoration: 'none', transition: 'all 0.2s ease',
        }}
          onMouseEnter={e => { const el = e.currentTarget; el.style.background = '#2563EB'; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 8px 24px rgba(59,130,246,0.3)' }}
          onMouseLeave={e => { const el = e.currentTarget; el.style.background = '#3B82F6'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none' }}
        >Quiero activar UConnect en mi evento</a>
        <p className="font-body" style={{ color: '#444', fontSize: '0.82rem', fontStyle: 'italic' }}>Primer piloto sin costo para el organizador.</p>
      </motion.div>
    </section>
  )
}
