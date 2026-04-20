'use client'

import dynamic from 'next/dynamic'
import Panel1Apertura       from '@/components/sections/Panel1Apertura'
import Panel2Dolor          from '@/components/sections/Panel2Dolor'
import Panel3Revelacion     from '@/components/sections/Panel3Revelacion'
import Panel4ComoFunciona   from '@/components/sections/Panel4ComoFunciona'
import Panel5Diferenciacion from '@/components/sections/Panel5Diferenciacion'

const HorizontalScroll = dynamic(() => import('@/components/HorizontalScroll'), { ssr: false })

const ParticleSphere = dynamic(() => import('@/components/three/ParticleSphere'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
    </div>
  ),
})

export default function ClientShell() {
  return (
    <HorizontalScroll sphere={<ParticleSphere />}>
      <Panel1Apertura />
      <Panel2Dolor />
      <Panel3Revelacion />
      <Panel4ComoFunciona />
      <Panel5Diferenciacion />
    </HorizontalScroll>
  )
}
