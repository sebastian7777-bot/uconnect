import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/sections/Hero'
import ElProblema from '@/components/sections/ElProblema'
import QueEs from '@/components/sections/QueEs'
import ComoFunciona from '@/components/sections/ComoFunciona'
import ParaQuien from '@/components/sections/ParaQuien'
import PorQueAhora from '@/components/sections/PorQueAhora'
import QuienesSomos from '@/components/sections/QuienesSomos'
import Formulario from '@/components/sections/Formulario'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ElProblema />
        <QueEs />
        <ComoFunciona />
        <ParaQuien />
        <PorQueAhora />
        <QuienesSomos />
        <Formulario />
      </main>
      <Footer />
    </>
  )
}
