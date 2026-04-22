import Navbar       from '@/components/Navbar'
import BackgroundWrapper from '@/components/BackgroundWrapper'
import Hero          from '@/components/sections/Hero'
import ElDolor       from '@/components/sections/ElDolor'
import ComoFunciona  from '@/components/sections/ComoFunciona'
import LaDiferencia  from '@/components/sections/LaDiferencia'
import LosTreinta    from '@/components/sections/LosTreinta'
import Manifiesto    from '@/components/sections/Manifiesto'
import Equipo        from '@/components/sections/Equipo'
import Formulario    from '@/components/sections/Formulario'

export default function Home() {
  return (
    <>
      <BackgroundWrapper />
      <Navbar />
      <main>
        <Hero />
        <ElDolor />
        <ComoFunciona />
        <LaDiferencia />
        <LosTreinta />
        <Manifiesto />
        <Equipo />
        <Formulario />
      </main>
    </>
  )
}
