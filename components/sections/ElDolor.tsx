'use client'

import { motion } from 'framer-motion'

const CITAS = [
  {
    text:   'Vi la oportunidad, pero mi mente se quedó en blanco buscando qué decir.',
    author: '— María Paula, 17 · Medicina, EIA',
  },
  {
    text:   'Sobrepensar todo: qué decir, cómo hacerlo sin verme raro. Al final decidí esperar un mejor momento. Ese momento nunca llegó.',
    author: '— Jerónimo, 17 · Ing. de Sistemas, EIA',
  },
  {
    text:   'Conecté bien con la persona pero no logramos mantenernos en contacto después del evento. Cada quien siguió por su camino.',
    author: '— Samuel, 18 · Ing. de Sistemas, EIA',
  },
  {
    text:   'Pensaba que más tarde podríamos hablar, pero se fue antes. Me quedé sin saber ni siquiera su nombre.',
    author: '— David, 18 · Ing. de Sistemas, EIA',
  },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  show:    { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as number[] } },
}

export default function ElDolor() {
  return (
    <section
      style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', alignItems: 'center' }}
      className="py-24 md:py-0"
    >
      <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '0' }}>

        {/* Left: citas (45%) */}
        <div
          className="w-full md:w-[45%]"
          style={{ padding: '40px 5vw 40px 6vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0' }}
        >
          {CITAS.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-12%' }}
              transition={{ duration: 0.75, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background:   'rgba(255,255,255,0.03)',
                border:       '1px solid rgba(255,255,255,0.07)',
                borderLeft:   '2px solid #FFFFFF',
                borderRadius: '10px',
                padding:      '20px 22px',
                marginBottom: '12px',
              }}
            >
              <p
                className="font-body"
                style={{ fontStyle: 'italic', color: '#D0D0D0', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}
              >
                "{c.text}"
              </p>
              <p
                className="font-body"
                style={{ color: '#444', fontSize: '0.78rem', marginTop: '10px', marginBottom: 0 }}
              >
                {c.author}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right: editorial text (55%) */}
        <div
          className="w-full md:w-[55%]"
          style={{ padding: '40px 6vw 40px 4vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}
        >
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-12%' }}
            className="font-body"
            style={{ color: '#333', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}
          >
            El problema
          </motion.span>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display"
            style={{ fontWeight: 900, color: '#FFF', lineHeight: 1.1, fontSize: 'clamp(2.4rem, 3.5vw, 4rem)', margin: 0 }}
          >
            La barrera no es<br />
            la timidez.<br />
            Es no saber<br />
            de qué hablarle.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-body"
            style={{ color: '#666', fontSize: '1rem', lineHeight: 1.8, maxWidth: '400px', margin: 0 }}
          >
            128 personas encuestadas en EIA, EAFIT,
            Uniandes, Sabana, Javeriana, Valle y Nacional
            describieron el mismo patrón:
            falta de contexto, no de interés.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="font-display"
              style={{ fontWeight: 900, color: '#FFF', fontSize: '3.5rem', lineHeight: 1, margin: 0 }}
            >
              67%
            </p>
            <p
              className="font-body"
              style={{ color: '#555', fontSize: '0.85rem', marginTop: '4px', marginBottom: 0 }}
            >
              de los empleos en Colombia<br />
              se consiguen por referidos.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
