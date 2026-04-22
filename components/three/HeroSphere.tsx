'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function SphereCloud({ count }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null)
  const groupRef  = useRef<THREE.Group>(null)
  const autoRotY  = useRef(0)
  const autoRotX  = useRef(0)
  const mouseRotX = useRef(0)
  const mouseRotY = useRef(0)
  const mouse     = useRef({ x: 0, y: 0 })

  const { positions, targets, offsets } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const targets   = new Float32Array(count * 3)
    const offsets   = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 16
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16
      const phi   = Math.acos(1 - 2 * (i + 0.5) / count)
      const theta = Math.PI * (1 + Math.sqrt(5)) * i
      targets[i * 3]     = Math.cos(theta) * Math.sin(phi) * 2.5
      targets[i * 3 + 1] = Math.sin(theta) * Math.sin(phi) * 2.5
      targets[i * 3 + 2] = Math.cos(phi) * 2.5
      offsets[i] = Math.random() * Math.PI * 2
    }
    return { positions, targets, offsets }
  }, [count])

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
    for (let i = 0; i < count; i++) {
      pos[i * 3]     += (targets[i * 3]     - pos[i * 3])     * 0.022
      pos[i * 3 + 1] += (targets[i * 3 + 1] - pos[i * 3 + 1]) * 0.022
      pos[i * 3 + 2] += (targets[i * 3 + 2] - pos[i * 3 + 2]) * 0.022
      pos[i * 3 + 1] += Math.sin(t + offsets[i]) * 0.0018
    }
    attr.needsUpdate = true

    autoRotY.current += 0.003
    autoRotX.current += Math.sin(t * 0.4) * 0.001

    const max = 0.262
    mouseRotX.current += (-mouse.current.y * max - mouseRotX.current) * 0.04
    mouseRotY.current += ( mouse.current.x * max - mouseRotY.current) * 0.04

    groupRef.current.rotation.y = autoRotY.current + mouseRotY.current
    groupRef.current.rotation.x = autoRotX.current + mouseRotX.current
  })

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#FFFFFF" size={0.05} sizeAttenuation transparent opacity={1.0} />
      </points>
    </group>
  )
}

export default function HeroSphere({ count = 300 }: { count?: number }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <ambientLight intensity={2.5} />
      <pointLight position={[5, 5, 5]}  intensity={120} color="#FFFFFF" />
      <pointLight position={[-4,-3, 4]} intensity={60}  color="#3344FF" />
      <pointLight position={[0, 0, 7]}  intensity={50}  color="#FFFFFF" />
      <SphereCloud count={count} />
    </Canvas>
  )
}
