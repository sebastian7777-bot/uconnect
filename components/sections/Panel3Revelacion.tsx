'use client'

import { motion } from 'framer-motion'

export default function Panel3Revelacion() {
  return (
    <section className="w-screen h-screen flex-shrink-0 flex items-center">
      <div className="w-full md:w-[58%] flex flex-col gap-7 px-8 md:px-16 lg:px-24">

        <div>
          {['La barrera no es', 'la timidez.'].map((line, i) => (
            <motion.h2
              key={i}
              className="block font-display font-bold leading-[1.2]"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#777' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {line}
            </motion.h2>
          ))}
        </div>

        <div>
          {['Es no saber', 'de qué hablarle.'].map((line, i) => (
            <motion.h2
              key={i}
              className="block font-display font-bold text-white leading-[1.2]"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {line}
            </motion.h2>
          ))}
        </div>

        {/* Blue line separator */}
        <motion.div
          className="h-px bg-[#3B82F6] w-full"
          style={{ originX: 0 }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.75, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="font-display font-bold text-white text-[1.5rem] leading-[1.3]">
            UConnect te da el contexto
            que hace que la conversación
            tenga sentido antes de que empiece.
          </h3>

          <p className="font-body text-[#888] text-[1rem] leading-[1.8]">
            Sabes quién está.<br />
            Sabes qué le interesa.<br />
            Sabes por qué podrían tener<br />
            una conversación que vale la pena.
          </p>

          <p className="font-body italic text-[#555] text-[0.9rem] leading-[1.7]">
            La fricción social desaparece
            cuando tienes contexto.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
