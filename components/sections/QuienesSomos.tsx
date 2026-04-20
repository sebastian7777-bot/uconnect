'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

const team = [
  {
    initial: 'S',
    name: 'Sebastián',
    role: 'CEO — Estrategia y producto',
    career: 'Ingeniería Administrativa',
    quote: 'Cree que las conexiones correctas cambian trayectorias.',
    imgSrc: '/sebastian.jpg',
  },
  {
    initial: 'A',
    name: 'Abraham',
    role: 'CTO — Tecnología y arquitectura',
    career: 'Ingeniería en Sistemas',
    quote: 'Construye la infraestructura que hace que todo esto funcione.',
    imgSrc: '/abraham.jpg',
  },
]

function Avatar({ initial, imgSrc, name }: { initial: string; imgSrc: string; name: string }) {
  return (
    <div className="w-16 h-16 rounded-full border border-[#2A2A2A] bg-black flex items-center justify-center overflow-hidden">
      <span className="font-display font-black text-2xl text-white">{initial}</span>
    </div>
  )
}

export default function QuienesSomos() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">

        <ScrollReveal>
          <div className="flex flex-col gap-4">
            <span className="label-text text-[#555555]">Quiénes somos</span>
            <h2 className="font-display font-black text-[1.8rem] md:text-[3rem] leading-[1.2] text-white">
              Dos estudiantes de Medellín que se hartaron de ir a eventos
              y salir con las mismas personas de siempre.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-xl p-8 flex flex-col gap-5 transition-all duration-200 hover:border-[#2A2A2A]">
                <Avatar initial={member.initial} imgSrc={member.imgSrc} name={member.name} />
                <div className="flex flex-col gap-1">
                  <h3 className="font-display font-bold text-white text-lg">{member.name}</h3>
                  <p className="text-[#AAAAAA] text-sm font-body">{member.role}</p>
                  <p className="text-[#555555] text-xs font-body label-text normal-case tracking-normal">
                    {member.career}
                  </p>
                </div>
                <p className="text-[#999999] text-sm leading-[1.7] font-body italic border-t border-[#1A1A1A] pt-4">
                  "{member.quote}"
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
