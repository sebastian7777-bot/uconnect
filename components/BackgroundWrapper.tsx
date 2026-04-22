'use client'

import dynamic from 'next/dynamic'

const BackgroundParticles = dynamic(
  () => import('./three/BackgroundParticles'),
  { ssr: false }
)

export default function BackgroundWrapper() {
  return <BackgroundParticles />
}
