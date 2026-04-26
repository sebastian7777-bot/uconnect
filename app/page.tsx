import Navbar       from '@/components/Navbar'
import Footer       from '@/components/Footer'
import Hero         from '@/components/sections/Hero'
import ElDolor      from '@/components/sections/ElDolor'
import QueEs        from '@/components/sections/QueEs'
import ComoFunciona from '@/components/sections/ComoFunciona'
import ParaQuien    from '@/components/sections/ParaQuien'
import DosLados     from '@/components/sections/DosLados'
import Manifiesto   from '@/components/sections/Manifiesto'
import LosTreinta   from '@/components/sections/LosTreinta'
import Equipo       from '@/components/sections/Equipo'
import Formulario   from '@/components/sections/Formulario'

const SectionDivider = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0px',
    padding: '0',
    margin: '0',
  }}>
    <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
      <circle cx="7"  cy="7" r="6" stroke="#1A1A35" strokeWidth="1.5" fill="none"/>
      <circle cx="21" cy="7" r="6" stroke="#1A1A35" strokeWidth="1.5" fill="none"/>
    </svg>
  </div>
)

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <ElDolor />
        <SectionDivider />
        <QueEs />
        <SectionDivider />
        <ComoFunciona />
        <SectionDivider />
        <ParaQuien />
        <SectionDivider />
        <DosLados />
        <SectionDivider />
        <Manifiesto />
        <SectionDivider />
        <LosTreinta />
        <SectionDivider />
        <Equipo />
        <SectionDivider />
        <Formulario />
      </main>
      <Footer />
    </>
  )
}
