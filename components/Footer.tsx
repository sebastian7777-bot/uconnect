const UConnectLogo = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size}
       viewBox="0 0 100 100" fill="none"
       xmlns="http://www.w3.org/2000/svg">
    <circle cx="33" cy="50" r="28"
            stroke="white" strokeWidth="7" fill="none"/>
    <circle cx="67" cy="50" r="28"
            stroke="white" strokeWidth="7" fill="none"/>
  </svg>
)

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-2)', borderTop: '1px solid #111' }} className="py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex flex-col gap-1 text-center md:text-left">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <UConnectLogo size={22} />
            <span style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: '1rem', color: '#E2E8F0', letterSpacing: '-0.02em' }}>UConnect</span>
          </div>
          <span className="text-[#444] text-[0.85rem] font-body">
            Conectamos personas reales en el mundo real.
          </span>
        </div>

        <p className="text-[#333] text-[0.8rem] font-body text-center max-w-xs">
          Tus datos no se comparten con terceros.
          Solo los usamos para revisar tu solicitud.
        </p>

        <div className="flex flex-col items-center md:items-end gap-2">
          <span className="text-[#333] text-[0.8rem] font-body">© 2025 UConnect — Colombia</span>
          <a
            href="#formulario"
            className="px-4 py-1.5 border border-[#333] text-[#999] font-body text-[0.8rem] rounded-lg transition-all duration-200 hover:border-white hover:text-white"
          >
            Solicitar mi cupo
          </a>
        </div>

      </div>
    </footer>
  )
}
