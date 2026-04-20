'use client'

import { motion } from 'framer-motion'

interface Props {
  quote: string
  author: string
  delay?: number
}

export default function CitaCard({ quote, author, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#0F0F0F] border border-[#1E1E1E] border-l-2 border-l-[#333] rounded-xl p-6"
    >
      <p className="font-body italic text-[#CCCCCC] text-[0.9rem] leading-[1.7] mb-3">
        "{quote}"
      </p>
      <p className="font-body text-[#555] text-[0.8rem]">{author}</p>
    </motion.div>
  )
}
