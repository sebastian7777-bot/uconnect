'use client'

import { useRef, useMemo, useState, useEffect, useCallback } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'

const PROFILES = [
  { name: 'Valeria',  field: 'Diseño UX',    intent: 'Quiere colaborar'   },
  { name: 'Tomás',    field: 'Sistemas',      intent: 'Busca cofundador'   },
  { name: 'Sara',     field: 'Medicina',      intent: 'Abierta a conectar' },
  { name: 'Andrés',   field: 'Admón',         intent: 'Busca mentoría'     },
  { name: 'Daniela',  field: 'Derecho',       intent: 'Quiere colaborar'   },
  { name: 'Felipe',   field: 'Ing Civil',     intent: 'Busca cofundador'   },
  { name: 'Mariana',  field: 'Economía',      intent: 'Abierta a conectar' },
  { name: 'Camilo',   field: 'Diseño Ind',    intent: 'Quiere colaborar'   },
]

interface NodeData {
  position: THREE.Vector3
  baseY: number
  speed: number
  offset: number
  profile: typeof PROFILES[0]
  isActive: boolean
  radius: number
}

function h(n: number) { return Math.abs(Math.sin(n * 127.1 + 311.7) * 43758.5453) % 1 }

function buildNodes(count: number): NodeData[] {
  const ACTIVE_IDX = [1, 4, 7].filter(i => i < count)
  return Array.from({ length: count }, (_, i) => {
    const theta = h(i * 2) * Math.PI * 2
    const phi   = Math.acos(2 * h(i * 3 + 1) - 1)
    const r     = (h(i * 5 + 2) * 0.6 + 0.4) * 2.5
    const x     = r * Math.sin(phi) * Math.cos(theta)
    const y     = r * Math.cos(phi)
    const z     = r * Math.sin(phi) * Math.sin(theta)
    return {
      position: new THREE.Vector3(x, y, z),
      baseY:    y,
      speed:    0.5 + h(i * 7) * 1.5,
      offset:   h(i * 11) * Math.PI * 2,
      profile:  PROFILES[i % PROFILES.length],
      isActive: ACTIVE_IDX.includes(i),
      radius:   ACTIVE_IDX.includes(i) ? 0.1 : 0.08,
    }
  })
}

function buildEdges(nodes: NodeData[], k: number): [number, number][] {
  const set   = new Set<string>()
  const edges: [number, number][] = []
  for (let i = 0; i < nodes.length; i++) {
    nodes
      .map((n, j) => ({ j, d: j === i ? Infinity : nodes[i].position.distanceTo(n.position) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, k)
      .forEach(({ j }) => {
        const key = `${Math.min(i, j)}-${Math.max(i, j)}`
        if (!set.has(key)) { set.add(key); edges.push([i, j]) }
      })
  }
  return edges
}

function buildLineSegs(nodes: NodeData[], edges: [number, number][]): THREE.LineSegments {
  const pos = new Float32Array(edges.length * 6)
  const col = new Float32Array(edges.length * 6)
  edges.forEach(([a, b], i) => {
    const pa = nodes[a].position, pb = nodes[b].position
    pos[i*6]=pa.x; pos[i*6+1]=pa.y; pos[i*6+2]=pa.z
    pos[i*6+3]=pb.x; pos[i*6+4]=pb.y; pos[i*6+5]=pb.z
    for (let c = 0; c < 6; c++) col[i*6+c] = 0.15
  })
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  geo.setAttribute('color',    new THREE.BufferAttribute(col, 3))
  const mat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true })
  return new THREE.LineSegments(geo, mat)
}

function NetworkScene({ nodeCount, enableTooltip }: { nodeCount: number; enableTooltip: boolean }) {
  const groupRef = useRef<THREE.Group>(null)
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([])

  const [hoveredNode,  setHoveredNodeState]  = useState<number | null>(null)
  const [selectedNode, setSelectedNodeState] = useState<number | null>(null)
  const hoveredRef  = useRef<number | null>(null)
  const timerRef    = useRef<ReturnType<typeof setTimeout>>()
  const pulseRef    = useRef<{ node: number; progress: number } | null>(null)

  const setHoveredNode = useCallback((v: number | null | ((p: number | null) => number | null)) => {
    const next = typeof v === 'function' ? v(hoveredRef.current) : v
    hoveredRef.current = next
    setHoveredNodeState(next)
  }, [])

  const setSelectedNode = useCallback((v: number | null) => {
    setSelectedNodeState(v)
  }, [])

  const nodes    = useMemo(() => buildNodes(nodeCount), [nodeCount])
  const edges    = useMemo(() => buildEdges(nodes, 3),  [nodes])
  const lineSegs = useMemo(() => buildLineSegs(nodes, edges), [nodes, edges])

  useEffect(() => () => {
    clearTimeout(timerRef.current)
    lineSegs.geometry.dispose()
    ;(lineSegs.material as THREE.Material).dispose()
  }, [lineSegs])

  const handleClick = useCallback((i: number) => {
    if (!enableTooltip) return
    setSelectedNode(i)
    pulseRef.current = { node: i, progress: 0 }
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setSelectedNode(null), 2000)
  }, [enableTooltip, setSelectedNode])

  useFrame((_, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += 0.004

    const t    = performance.now() / 1000
    const hn   = hoveredRef.current
    const pulse = pulseRef.current

    nodes.forEach((node, i) => {
      const mesh = nodeRefs.current[i]
      if (!mesh) return

      mesh.position.y = node.baseY + Math.sin(t * node.speed + node.offset) * 0.003

      let ts = node.isActive ? 1.1 : 1
      if (hn === i) ts = 1.4
      if (pulse && pulse.node === i) {
        pulse.progress = Math.min(pulse.progress + delta * 2, 1)
        ts = 1 + Math.sin(pulse.progress * Math.PI)
        if (pulse.progress >= 1) pulseRef.current = null
      }
      mesh.scale.x += (ts - mesh.scale.x) * 0.15
      mesh.scale.y = mesh.scale.x
      mesh.scale.z = mesh.scale.x
    })

    const colorAttr = lineSegs.geometry.attributes.color as THREE.BufferAttribute
    const cols = colorAttr.array as Float32Array
    let dirty = false
    edges.forEach(([a, b], i) => {
      let target = 0.15
      if (hn !== null) target = (a === hn || b === hn) ? 0.6 : 0.05
      const curr = cols[i * 6]
      const next = curr + (target - curr) * 0.1
      if (Math.abs(next - curr) > 0.001) {
        for (let c = 0; c < 6; c++) cols[i * 6 + c] = next
        dirty = true
      }
    })
    if (dirty) colorAttr.needsUpdate = true
  })

  return (
    <group ref={groupRef}>
      <primitive object={lineSegs} />
      {nodes.map((node, i) => (
        <mesh
          key={i}
          ref={el => { nodeRefs.current[i] = el }}
          position={node.position.toArray()}
          onPointerOver={e => { e.stopPropagation(); setHoveredNode(i) }}
          onPointerOut={e  => { e.stopPropagation(); setHoveredNode(p => p === i ? null : p) }}
          onClick={e        => { e.stopPropagation(); handleClick(i) }}
        >
          <sphereGeometry args={[node.radius, 12, 12]} />
          <meshStandardMaterial
            color="#FFFFFF"
            emissive="#FFFFFF"
            emissiveIntensity={node.isActive ? 0.8 : 0.3}
            roughness={0.1}
            metalness={0.8}
          />
          {selectedNode === i && enableTooltip && (
            <Html center position={[0, node.radius + 0.3, 0]}>
              <div style={{
                background:     'rgba(0,0,0,0.88)',
                border:         '1px solid rgba(255,255,255,0.12)',
                borderRadius:   '8px',
                padding:        '7px 12px',
                fontSize:       '0.72rem',
                fontFamily:     'var(--font-body, sans-serif)',
                color:          '#AAAAAA',
                whiteSpace:     'nowrap',
                backdropFilter: 'blur(10px)',
                pointerEvents:  'none',
                lineHeight:     1.6,
              }}>
                <span style={{ color: '#FFF', fontWeight: 600 }}>{node.profile.name}</span>
                {' · '}{node.profile.field}
                <br />
                <span style={{ color: '#555', fontSize: '0.67rem' }}>{node.profile.intent}</span>
              </div>
            </Html>
          )}
        </mesh>
      ))}
    </group>
  )
}

export default function NodeNetwork({ nodeCount = 12, enableTooltip = true }: { nodeCount?: number; enableTooltip?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent', width: '100%', height: '100%', cursor: 'pointer' }}
    >
      <ambientLight intensity={1.5} />
      <pointLight position={[3, 3, 3]} intensity={40} color="#FFFFFF" />
      <NetworkScene nodeCount={nodeCount} enableTooltip={enableTooltip} />
    </Canvas>
  )
}
