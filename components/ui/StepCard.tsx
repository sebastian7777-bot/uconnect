'use client'

import { motion } from 'framer-motion'

interface Props {
  num: string
  title: string
  desc: string
  delay?: number
}

export default function StepCard({ num, title, desc, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex gap-5"
    >
      <span
        className="font-display font-black text-[1.4rem] leading-none mt-0.5 shrink-0"
        style={{ color: '#3B82F6' }}
      >
        {num}
      </span>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-display font-bold text-white text-[1rem] leading-snug">{title}</h3>
        <p className="font-body text-[#777] text-[0.9rem] leading-[1.7]">{desc}</p>
      </div>
    </motion.div>
  )
}
