'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

interface TorusProps {
  rotation: [number, number, number]
  speed: number
  offset: number
  radius: number
  delay: number
}

function AnimatedTorus({ rotation, speed, offset, radius, delay }: TorusProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [scale, setScale] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      let start: number | null = null
      const duration = 800

      function animate(timestamp: number) {
        if (!start) start = timestamp
        const progress = Math.min((timestamp - start) / duration, 1)
        // ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3)
        setScale(eased)
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.elapsedTime
    meshRef.current.rotation.x = rotation[0] + Math.sin(t * speed + offset) * 0.08
    meshRef.current.rotation.y = rotation[1] + Math.sin(t * speed * 0.7 + offset + 1) * 0.08
    meshRef.current.rotation.z = rotation[2] + Math.cos(t * speed * 0.5 + offset) * 0.05
  })

  return (
    <mesh ref={meshRef} rotation={rotation} scale={scale}>
      <torusGeometry args={[radius, 0.05, 20, 80]} />
      <meshStandardMaterial
        color="#FFFFFF"
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

function Scene({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += 0.003
  })

  const tori = [
    { rotation: [0.3, 0.2, 0] as [number, number, number], speed: 0.4, offset: 0, radius: 1.5, delay: 0 },
    { rotation: [Math.PI / 2 + 0.2, 0.1, 0.3] as [number, number, number], speed: 0.35, offset: 2.1, radius: 1.4, delay: 150 },
    { rotation: [0.1, Math.PI / 3, 0.5] as [number, number, number], speed: 0.45, offset: 4.2, radius: 1.6, delay: 300 },
    { rotation: [Math.PI / 4, Math.PI / 4, 0.1] as [number, number, number], speed: 0.38, offset: 1.5, radius: 1.3, delay: 450 },
  ]

  const activeTori = isMobile ? tori.slice(0, 2) : tori

  return (
    <group ref={groupRef}>
      {activeTori.map((t, i) => (
        <AnimatedTorus key={i} {...t} />
      ))}
    </group>
  )
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
    </div>
  )
}

export default function UConnectScene() {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (!mounted) return <LoadingFallback />

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} color="#FFFFFF" intensity={2} />
      <pointLight position={[-5, -3, -2]} color="#888888" intensity={1} />
      <Scene isMobile={isMobile} />
      {!isMobile && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          makeDefault
        />
      )}
    </Canvas>
  )
}
