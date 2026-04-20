interface Props {
  children: string
  dot?: boolean
}

export default function Badge({ children, dot = false }: Props) {
  return (
    <div className="inline-flex items-center gap-2">
      {dot && (
        <span
          className="inline-block w-1.5 h-1.5 rounded-full bg-[#3B82F6]"
          style={{ animation: 'ucPulse 2s ease-in-out infinite' }}
        />
      )}
      <span
        className="font-body font-semibold text-[#555] tracking-[0.1em] uppercase"
        style={{ fontSize: '0.7rem' }}
      >
        {children}
      </span>
    </div>
  )
}
