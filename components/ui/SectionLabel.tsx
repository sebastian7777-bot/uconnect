import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  delay?: number
}

export default function SectionLabel({ children, delay = 0 }: Props) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="font-body"
      style={{
        color:          '#333',
        fontSize:       '0.7rem',
        letterSpacing:  '0.1em',
        textTransform:  'uppercase',
        fontWeight:     600,
      }}
    >
      {children}
    </motion.span>
  )
}
