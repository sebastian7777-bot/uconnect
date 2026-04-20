import Navbar        from '@/components/Navbar'
import Footer        from '@/components/Footer'
import ClientShell   from '@/components/ClientShell'
import Organizadores from '@/components/sections/Organizadores'
import Manifiesto    from '@/components/sections/Manifiesto'
import LosTreinta    from '@/components/sections/LosTreinta'
import Equipo        from '@/components/sections/Equipo'
import Formulario    from '@/components/sections/Formulario'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <ClientShell />
        <Organizadores />
        <Manifiesto />
        <LosTreinta />
        <Equipo />
        <Formulario />
      </main>
      <Footer />
    </>
  )
}
