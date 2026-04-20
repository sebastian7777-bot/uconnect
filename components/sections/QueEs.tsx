'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

const cards = [
  {
    label: 'Antes del evento',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="10" />
        <path d="M14 8v6l4 2" />
      </svg>
    ),
    text: 'Sabes quién va y qué le interesa. No llegas a ciegas.',
  },
  {
    label: 'Durante el evento',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 14h18M14 5l9 9-9 9" />
      </svg>
    ),
    text: 'UConnect te dice con quién hablar y por qué. Sin fricción social.',
  },
  {
    label: 'Después del evento',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20c0-4 4-7 10-7s10 3 10 7" />
        <circle cx="14" cy="9" r="4" />
        <path d="M20 13l3 3-3 3" />
      </svg>
    ),
    text: 'Nudge — nuestro sistema de IA — te ayuda a mantener la conexión. Como un empujón amigable en el momento correcto.',
  },
]

export default function QueEs() {
  return (
    <section id="que-es" className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">

        <ScrollReveal>
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="label-text text-[#555555]">Qué es</span>
            <h2 className="font-display font-black text-[1.8rem] md:text-[3rem] leading-[1.2] text-white">
              UConnect es infraestructura social. El sistema que hace que las conexiones
              correctas ocurran — antes, durante y después de cada evento.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass-card rounded-xl p-7 flex flex-col gap-5 h-full transition-all duration-200 hover:border-white/20 hover:scale-[1.01]">
                <div className="text-[#AAAAAA]">{card.icon}</div>
                <h3 className="font-display font-bold text-white text-base">{card.label}</h3>
                <p className="text-[#999999] text-sm leading-[1.7] font-body">{card.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
