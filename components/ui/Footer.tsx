export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#1A1A1A] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display font-bold text-lg">
          <span className="text-white">U</span>
          <span className="text-[#AAAAAA]">Connect</span>
        </span>

        <p className="text-[#555555] text-xs text-center font-body">
          Tus datos son solo para contactarte. Nunca los vendemos ni compartimos.
        </p>

        <a
          href="#formulario"
          className="px-5 py-2 border border-white/60 text-white text-sm font-body font-medium rounded-md transition-all duration-200 hover:bg-white hover:text-black whitespace-nowrap"
        >
          Todavía puedes solicitar tu lugar
        </a>
      </div>
    </footer>
  )
}
