'use client'

import { useEffect, useRef } from 'react'
import type { City, Arc } from '@/types'

const CITIES: City[] = [
  { name: 'Medellín',     lat:   6.24,  lng:  -75.57, major: true  },
  { name: 'Bogotá',       lat:   4.71,  lng:  -74.07, major: true  },
  { name: 'São Paulo',    lat: -23.55,  lng:  -46.63, major: true  },
  { name: 'México DF',    lat:  19.43,  lng:  -99.13, major: true  },
  { name: 'Buenos Aires', lat: -34.60,  lng:  -58.38, major: true  },
  { name: 'New York',     lat:  40.71,  lng:  -74.00, major: true  },
  { name: 'London',       lat:  51.51,  lng:   -0.13, major: true  },
  { name: 'Berlin',       lat:  52.52,  lng:   13.40, major: true  },
  { name: 'Lagos',        lat:   6.52,  lng:    3.38, major: true  },
  { name: 'Nairobi',      lat:  -1.29,  lng:   36.82, major: true  },
  { name: 'Dubai',        lat:  25.20,  lng:   55.27, major: true  },
  { name: 'Mumbai',       lat:  19.08,  lng:   72.88, major: true  },
  { name: 'Singapore',    lat:   1.35,  lng:  103.82, major: true  },
  { name: 'Tokyo',        lat:  35.69,  lng:  139.69, major: true  },
  { name: 'Sydney',       lat: -33.87,  lng:  151.21, major: true  },
  { name: 'Lima',         lat: -12.05,  lng:  -77.04, major: false },
  { name: 'Santiago',     lat: -33.45,  lng:  -70.67, major: false },
  { name: 'Miami',        lat:  25.77,  lng:  -80.19, major: false },
  { name: 'Chicago',      lat:  41.88,  lng:  -87.63, major: false },
  { name: 'Los Angeles',  lat:  34.05,  lng: -118.24, major: false },
  { name: 'Toronto',      lat:  43.65,  lng:  -79.38, major: false },
  { name: 'Paris',        lat:  48.86,  lng:    2.35, major: false },
  { name: 'Madrid',       lat:  40.42,  lng:   -3.70, major: false },
  { name: 'Amsterdam',    lat:  52.37,  lng:    4.90, major: false },
  { name: 'Johannesburg', lat: -26.20,  lng:   28.04, major: false },
  { name: 'Cairo',        lat:  30.04,  lng:   31.24, major: false },
  { name: 'Istanbul',     lat:  41.01,  lng:   28.95, major: false },
  { name: 'Seoul',        lat:  37.57,  lng:  126.98, major: false },
  { name: 'Jakarta',      lat:  -6.21,  lng:  106.85, major: false },
  { name: 'Shanghai',     lat:  31.23,  lng:  121.47, major: false },
]

function buildArcs(): Arc[] {
  const palette = ['#3B82F6', '#60A5FA', '#1D4ED8', '#93C5FD']
  const arcs: Arc[] = []
  const majors = CITIES.filter(c => c.major)
  for (let i = 0; i < 15; i++) {
    const a = majors[Math.floor(Math.random() * majors.length)]
    const b = majors[Math.floor(Math.random() * majors.length)]
    if (a !== b) {
      arcs.push({
        startLat: a.lat, startLng: a.lng,
        endLat:   b.lat, endLng:   b.lng,
        color: palette[Math.floor(Math.random() * palette.length)],
      })
    }
  }
  return arcs
}

export default function GlobeComponent() {
  const containerRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globeRef     = useRef<any>(null)
  const timerRef     = useRef<ReturnType<typeof setInterval> | null>(null)
  const resizeRef    = useRef<(() => void) | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    let cancelled = false

    import('globe.gl').then(({ default: Globe }) => {
      if (cancelled || !containerRef.current) return

      const el = containerRef.current
      const w  = el.clientWidth  || 500
      const h  = el.clientHeight || 500

      // globe.gl types declare a constructor but the runtime API is Globe(config)(el)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const globe = (Globe as any)({ animateIn: true })(el)
      globeRef.current = globe

      globe
        .width(w)
        .height(h)
        .backgroundColor('rgba(0,0,0,0)')
        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
        .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
        .atmosphereColor('#3B82F6')
        .atmosphereAltitude(0.18)
        .showGraticules(false)
        .showAtmosphere(true)

      globe
        .pointsData(CITIES)
        .pointLat((d: object) => (d as City).lat)
        .pointLng((d: object) => (d as City).lng)
        .pointColor(() => '#3B82F6')
        .pointRadius((d: object) => ((d as City).major ? 0.4 : 0.2))
        .pointAltitude(0.01)
        .pointLabel((d: object) => (d as City).name)

      const majorCities = CITIES.filter(c => c.major)
      globe
        .ringsData(majorCities)
        .ringLat((d: object) => (d as City).lat)
        .ringLng((d: object) => (d as City).lng)
        .ringColor(() => '#3B82F6')
        .ringMaxRadius(3)
        .ringPropagationSpeed(1.5)
        .ringRepeatPeriod(800)

      globe
        .labelsData(majorCities)
        .labelLat((d: object) => (d as City).lat)
        .labelLng((d: object) => (d as City).lng)
        .labelText((d: object) => (d as City).name)
        .labelSize(0.45)
        .labelColor(() => 'rgba(200,220,255,0.7)')
        .labelDotRadius(0.25)
        .labelAltitude(0.02)

      const setArcs = () => {
        globe
          .arcsData(buildArcs())
          .arcStartLat((d: object) => (d as Arc).startLat)
          .arcStartLng((d: object) => (d as Arc).startLng)
          .arcEndLat((d: object) => (d as Arc).endLat)
          .arcEndLng((d: object) => (d as Arc).endLng)
          .arcColor((d: object) => (d as Arc).color)
          .arcAltitudeAutoScale(0.4)
          .arcStroke(0.4)
          .arcDashLength(0.4)
          .arcDashGap(0.6)
          .arcDashAnimateTime(2500)
      }
      setArcs()
      timerRef.current = setInterval(setArcs, 5000)

      const ctrl = globe.controls() as {
        autoRotate: boolean
        autoRotateSpeed: number
        enableZoom: boolean
        dampingFactor: number
      }
      ctrl.autoRotate      = true
      ctrl.autoRotateSpeed = 0.4
      ctrl.enableZoom      = false
      ctrl.dampingFactor   = 0.08

      globe.pointOfView({ lat: 10, lng: -60, altitude: 2.2 }, 0)

      const handleResize = () => {
        if (!containerRef.current || !globeRef.current) return
        globeRef.current.width(containerRef.current.clientWidth)
        globeRef.current.height(containerRef.current.clientHeight)
      }
      window.addEventListener('resize', handleResize)
      resizeRef.current = handleResize
    })

    return () => {
      cancelled = true
      if (timerRef.current) clearInterval(timerRef.current)
      if (resizeRef.current) window.removeEventListener('resize', resizeRef.current)
      if (containerRef.current) containerRef.current.innerHTML = ''
      globeRef.current = null
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
    />
  )
}
