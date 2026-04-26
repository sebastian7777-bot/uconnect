import Navbar      from '@/components/Navbar'
import Footer      from '@/components/Footer'
import Hero        from '@/components/sections/Hero'
import Citas       from '@/components/sections/Citas'
import ElProblema  from '@/components/sections/ElProblema'
import ComoFunciona from '@/components/sections/ComoFunciona'
import Comparacion from '@/components/sections/Comparacion'
import ParaQuien   from '@/components/sections/ParaQuien'
import Manifiesto  from '@/components/sections/Manifiesto'
import LosTreinta  from '@/components/sections/LosTreinta'
import Equipo      from '@/components/sections/Equipo'
import Formulario  from '@/components/sections/Formulario'

const Divider = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0' }}>
    <div style={{
      height: '1px', flex: 1, maxWidth: '200px',
      background: 'linear-gradient(to right, transparent, #1A1A35)',
    }}/>
    <svg width="24" height="24" viewBox="0 0 100 100" fill="none" style={{ margin: '0 16px' }}>
      <circle cx="33" cy="50" r="28" stroke="#1A1A35" strokeWidth="7" fill="none"/>
      <circle cx="67" cy="50" r="28" stroke="#1A1A35" strokeWidth="7" fill="none"/>
    </svg>
    <div style={{
      height: '1px', flex: 1, maxWidth: '200px',
      background: 'linear-gradient(to left, transparent, #1A1A35)',
    }}/>
  </div>
)

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Citas />
        <Divider />
        <ElProblema />
        <Divider />
        <ComoFunciona />
        <Divider />
        <Comparacion />
        <Divider />
        <ParaQuien />
        <Divider />
        <Manifiesto />
        <Divider />
        <LosTreinta />
        <Divider />
        <Equipo />
        <Divider />
        <Formulario />
      </main>
      <Footer />
    </>
  )
}
