'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

const profiles = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19v-1a7 7 0 0114 0v1" />
        <circle cx="11" cy="7" r="4" />
        <path d="M8 21l3-3 3 3" />
      </svg>
    ),
    title: 'Estudiante con impacto',
    text: 'Vas a eventos a hacer algo, no solo a estar.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="18" height="13" rx="2" />
        <path d="M7 7V5a2 2 0 014 0v2M11 7V5a2 2 0 014 0v2" />
        <path d="M11 12v3" />
      </svg>
    ),
    title: 'Empresario / profesional',
    text: 'Buscas conexiones que abran puertas reales.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="9" />
        <path d="M11 6v5l3 3" />
        <path d="M15 3l2 2M7 3L5 5" />
      </svg>
    ),
    title: 'Inversor o angel',
    text: 'Ver proyectos antes de que todo el mundo los conozca.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5" cy="11" r="2" />
        <circle cx="17" cy="5" r="2" />
        <circle cx="17" cy="17" r="2" />
        <path d="M7 11h4M13 6l-4 5M13 16l-4-5" />
      </svg>
    ),
    title: 'Creador de comunidad',
    text: 'Tu valor está en conectar personas.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Persona con un proyecto',
    text: 'Necesitas al cofundador o colaborador correcto.',
  },
]

export default function ParaQuien() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">

        <ScrollReveal>
          <div className="flex flex-col gap-4">
            <span className="label-text text-[#555555]">Para quién</span>
            <h2 className="font-display font-black text-[1.8rem] md:text-[3rem] leading-[1.2] text-white">
              UConnect es para quien va en serio.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profiles.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="group relative flex flex-col gap-4 p-6 rounded-xl border border-[#1A1A1A] bg-transparent transition-all duration-200 hover:bg-white/[0.03] hover:border-white/20 overflow-hidden cursor-default">
                {/* Left accent bar */}
                <div className="absolute left-0 top-4 bottom-4 w-0 group-hover:w-[3px] bg-white rounded-r-full transition-all duration-200" />

                <div className="text-[#AAAAAA] group-hover:text-white transition-colors duration-200">
                  {p.icon}
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display font-bold text-[#E8E8E8] text-sm">{p.title}</h3>
                  <p className="text-[#555555] text-sm leading-[1.7] font-body group-hover:text-[#999999] transition-colors duration-200">
                    {p.text}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
