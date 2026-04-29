'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero   from '@/components/sections/Hero'

const ElDolor      = dynamic(() => import('@/components/sections/ElDolor'))
const ComoFunciona = dynamic(() => import('@/components/sections/ComoFunciona'))
const Manifiesto   = dynamic(() => import('@/components/sections/Manifiesto'))
const LosTreinta   = dynamic(() => import('@/components/sections/LosTreinta'))
const Equipo       = dynamic(() => import('@/components/sections/Equipo'))
const LaDiferencia = dynamic(() => import('@/components/sections/LaDiferencia'))
const QueEs        = dynamic(() => import('@/components/sections/QueEs'))
const ParaQuien    = dynamic(() => import('@/components/sections/ParaQuien'))
const Formulario   = dynamic(() => import('@/components/sections/Formulario'))
const ParaOrganizadores = dynamic(() => import('@/components/sections/ParaOrganizadores'))

export type Mode = 'asistente' | 'organizador'

export default function Home() {
  const [mode, setMode] = useState<Mode>('asistente')
  return (
    <>
      <Navbar mode={mode} setMode={setMode} />
      <main>
        <Hero mode={mode} />
        <ElDolor />
        <ComoFunciona />
        {mode === 'organizador' ? <ParaOrganizadores /> : <LosTreinta />}
        <LaDiferencia />
        <QueEs />
        <ParaQuien />
        <Manifiesto />
        <Equipo />
        <Formulario mode={mode} />
      </main>
    </>
  )
}
