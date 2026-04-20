interface Props {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline'
  children: React.ReactNode
  className?: string
}

export default function Button({ href, onClick, variant = 'primary', children, className = '' }: Props) {
  const base = 'inline-flex items-center justify-center font-body font-bold text-[0.95rem] rounded-xl px-8 py-4 transition-all duration-200 hover:-translate-y-0.5'
  const styles = {
    primary: 'bg-white text-black hover:bg-[#E8E8E8] hover:shadow-[0_8px_32px_rgba(255,255,255,0.08)]',
    outline: 'border border-white/30 text-white hover:border-white/60',
  }
  const cls = `${base} ${styles[variant]} ${className}`

  if (href) return <a href={href} className={cls}>{children}</a>
  return <button onClick={onClick} className={cls}>{children}</button>
}
