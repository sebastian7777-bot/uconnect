'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

export default function ElProblema() {
  return (
    <section className="py-24 px-6 bg-[#080808]">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">

        <ScrollReveal>
          <div className="flex flex-col gap-4">
            <span className="label-text text-[#555555]">El problema</span>
            <h2 className="font-display font-black text-[1.8rem] md:text-[3rem] leading-[1.2] text-white">
              Hemos optimizado el scroll. Nunca optimizamos el encuentro.
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-12">
          <ScrollReveal delay={0.1}>
            <p className="text-[#999999] text-base md:text-lg leading-[1.7] border-b border-[#1A1A1A] pb-10 font-body">
              Vas a eventos. Conoces gente. Intercambias números. Y tres días después no
              recuerdas por qué debías escribirle a esa persona.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-[#141414] border border-[#222222] rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <span className="font-display font-black text-[4.5rem] md:text-[6rem] leading-none text-white shrink-0">
                67%
              </span>
              <p className="text-[#999999] text-base md:text-lg leading-[1.7] font-body">
                de los empleos en Colombia se consiguen por referidos. La red importa.
                Y la red se construye en persona — no en un feed.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-[#999999] text-base md:text-lg leading-[1.7] border-t border-[#1A1A1A] pt-10 font-body">
              El problema no es que no vayas a eventos. El problema es que vas y conectas con
              las mismas personas de siempre, o con nadie que importe.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
