import { motion } from 'framer-motion'

interface Props {
  width?: number | string
  delay?: number
}

export default function Divider({ width = 200, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        width,
        height:          '1px',
        background:      '#1A1A1A',
        transformOrigin: 'left',
      }}
    />
  )
}
