'use client'

import { useRef, useEffect, useState, ReactNode } from 'react'

interface Props {
  children: ReactNode[]
  sphere: ReactNode
}

export default function HorizontalScroll({ children, sphere }: Props) {
  const wrapperRef   = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const gsapCtx      = useRef<{ revert: () => void } | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    setReady(true)
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (!ready || isMobile) return
    if (!wrapperRef.current || !containerRef.current) return

    const setup = async () => {
      const { gsap }         = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const wrapper   = wrapperRef.current!
      const container = containerRef.current!
      const totalW    = container.offsetWidth

      gsapCtx.current = gsap.context(() => {
        gsap.to(container, {
          x: -(totalW - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            pin: true,
            scrub: 1,
            snap: {
              snapTo:   1 / (children.length - 1),
              duration: { min: 0.2, max: 0.5 },
              delay:    0.1,
              ease:     'power1.inOut',
            },
            end: () => '+=' + totalW,
          },
        })
      })
    }

    setup()

    return () => gsapCtx.current?.revert()
  }, [ready, isMobile, children.length])

  // Mobile: stack vertically, sphere on top
  if (!ready || isMobile) {
    return (
      <div className="flex flex-col">
        <div className="w-full h-[240px]">{sphere}</div>
        {children}
      </div>
    )
  }

  const panelCount = children.length

  return (
    <div
      ref={wrapperRef}
      className="relative overflow-hidden"
      style={{ height: '100vh' }}
    >
      {/* Scrolling panels */}
      <div
        ref={containerRef}
        className="flex h-full"
        style={{ width: `${panelCount * 100}vw` }}
      >
        {children}
      </div>

      {/* Sphere — anchored right, outside scrolling container */}
      <div
        className="absolute top-0 right-0 h-full pointer-events-none"
        style={{ width: '45vw' }}
      >
        {sphere}
      </div>
    </div>
  )
}
