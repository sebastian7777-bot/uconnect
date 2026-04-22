'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const N = 200

function Particles() {
  const pointsRef = useRef<THREE.Points>(null)
  const groupRef  = useRef<THREE.Group>(null)
  const mouse     = useRef({ x: 0, y: 0 })
  const rotX      = useRef(0)
  const rotY      = useRef(0)

  const { positions, offsets } = useMemo(() => {
    const positions = new Float32Array(N * 3)
    const offsets   = new Float32Array(N)
    for (let i = 0; i < N; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 30
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
      offsets[i] = Math.random() * Math.PI * 2
    }
    return { positions, offsets }
  }, [])

  useEffect(() => {
    const h = (e: MouseEvent) => {
      mouse.current.x =  (e.clientX / window.innerWidth  - 0.5) * 2
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', h, { passive: true })
    return () => window.removeEventListener('mousemove', h)
  }, [])

  useFrame(({ clock }) => {
    if (!pointsRef.current || !groupRef.current) return
    const attr = pointsRef.current.geometry.attributes.position
    const pos  = attr.array as Float32Array
    const t    = clock.elapsedTime
    for (let i = 0; i < N; i++) {
      pos[i * 3]     += Math.sin(t * 0.3  + offsets[i])       * 0.002
      pos[i * 3 + 1] += Math.cos(t * 0.2  + offsets[i] * 1.3) * 0.002
      pos[i * 3 + 2] += Math.sin(t * 0.25 + offsets[i] * 0.7) * 0.002
    }
    attr.needsUpdate = true

    const max = 0.14
    rotX.current += (-mouse.current.y * max - rotX.current) * 0.05
    rotY.current += ( mouse.current.x * max - rotY.current) * 0.05
    groupRef.current.rotation.x = rotX.current
    groupRef.current.rotation.y = rotY.current
  })

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#FFFFFF"
          size={0.025}
          sizeAttenuation
          transparent
          opacity={0.35}
          depthWrite={false}
        />
      </points>
    </group>
  )
}

export default function BackgroundParticles() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        gl={{ alpha: true, antialias: false }}
        style={{ background: 'transparent' }}
      >
        <Particles />
      </Canvas>
    </div>
  )
}
