'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const N = 300

function ParticleCloud() {
  const pointsRef = useRef<THREE.Points>(null)
  const groupRef  = useRef<THREE.Group>(null)
  const autoRotY  = useRef(0)
  const autoRotX  = useRef(0)
  const mouseRotX = useRef(0)
  const mouseRotY = useRef(0)
  const mouse     = useRef({ x: 0, y: 0 })

  const { positions, targets, offsets } = useMemo(() => {
    const positions = new Float32Array(N * 3)
    const targets   = new Float32Array(N * 3)
    const offsets   = new Float32Array(N)

    for (let i = 0; i < N; i++) {
      // Random cube initial
      positions[i * 3]     = (Math.random() - 0.5) * 16
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16

      // Fibonacci sphere target
      const phi   = Math.acos(1 - 2 * (i + 0.5) / N)
      const theta = Math.PI * (1 + Math.sqrt(5)) * i
      targets[i * 3]     = Math.cos(theta) * Math.sin(phi) * 2.5
      targets[i * 3 + 1] = Math.sin(theta) * Math.sin(phi) * 2.5
      targets[i * 3 + 2] = Math.cos(phi) * 2.5

      offsets[i] = Math.random() * Math.PI * 2
    }

    return { positions, targets, offsets }
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x =  (e.clientX / window.innerWidth  - 0.5) * 2
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  useFrame(({ clock }) => {
    if (!pointsRef.current || !groupRef.current) return

    const attr = pointsRef.current.geometry.attributes.position
    const pos  = attr.array as Float32Array

    for (let i = 0; i < N; i++) {
      pos[i * 3]     += (targets[i * 3]     - pos[i * 3])     * 0.018
      pos[i * 3 + 1] += (targets[i * 3 + 1] - pos[i * 3 + 1]) * 0.018
      pos[i * 3 + 2] += (targets[i * 3 + 2] - pos[i * 3 + 2]) * 0.018
      pos[i * 3 + 1] += Math.sin(clock.elapsedTime * 0.9 + offsets[i]) * 0.0015
    }
    attr.needsUpdate = true

    autoRotY.current += 0.0025
    autoRotX.current += Math.sin(clock.elapsedTime * 0.3) * 0.0008

    // Mouse follow lerp — max 12 degrees (~0.21 rad)
    mouseRotX.current += (-mouse.current.y * 0.21 - mouseRotX.current) * 0.05
    mouseRotY.current += ( mouse.current.x * 0.21 - mouseRotY.current) * 0.05

    groupRef.current.rotation.y = autoRotY.current + mouseRotY.current
    groupRef.current.rotation.x = autoRotX.current + mouseRotX.current
  })

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#FFFFFF"
          size={0.032}
          sizeAttenuation
          transparent
          opacity={0.85}
        />
      </points>
    </group>
  )
}

export default function ParticleSphere() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent', pointerEvents: 'none' }}
    >
      <ambientLight intensity={1.8} />
      <pointLight position={[5, 5, 5]}   intensity={90} color="#FFFFFF" />
      <pointLight position={[-5, -3, 3]} intensity={45} color="#2244FF" />
      <pointLight position={[0, 5, -4]}  intensity={25} color="#FFFFFF" />
      <ParticleCloud />
    </Canvas>
  )
}
