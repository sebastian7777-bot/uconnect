export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#111] py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex flex-col gap-1 text-center md:text-left">
          <span className="font-display font-bold text-white text-[1rem]">UConnect</span>
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
