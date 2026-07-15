'use client'

import Link from 'next/link'
import type { CSSProperties, MouseEvent } from 'react'
import { useRef } from 'react'

type Work = {
  eyebrow: string
  title: string
  href: string
  type: string
  description: string
  image?: string
  accent: string
}

type PortfolioWorkCardProps = {
  work: Work
  index: number
}

type TiltStyle = CSSProperties & {
  '--reveal-delay': string
  '--tilt-x'?: string
  '--tilt-y'?: string
  '--tilt-shift-x'?: string
  '--tilt-shift-y'?: string
}

export default function PortfolioWorkCard({ work, index }: PortfolioWorkCardProps) {
  const tiltRef = useRef<HTMLDivElement>(null)

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const tilt = tiltRef.current
    if (!tilt) return

    const rect = tilt.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const px = x / rect.width
    const py = y / rect.height
    const rotateY = (0.5 - px) * 16
    const rotateX = (py - 0.5) * 16
    const shiftX = (0.5 - px) * 10
    const shiftY = (0.5 - py) * 10

    tilt.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`)
    tilt.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`)
    tilt.style.setProperty('--tilt-shift-x', `${shiftX.toFixed(2)}px`)
    tilt.style.setProperty('--tilt-shift-y', `${shiftY.toFixed(2)}px`)
  }

  const handleLeave = () => {
    const tilt = tiltRef.current
    if (!tilt) return

    tilt.style.setProperty('--tilt-x', '0deg')
    tilt.style.setProperty('--tilt-y', '0deg')
    tilt.style.setProperty('--tilt-shift-x', '0px')
    tilt.style.setProperty('--tilt-shift-y', '0px')
  }

  return (
    <Link
      className="portfolio-work-card portfolio-reveal group"
      href={work.href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ '--reveal-delay': `${index * 90}ms` } as TiltStyle}
    >
      <div ref={tiltRef} className="portfolio-work-tilt">
        <div className={`portfolio-work-art bg-gradient-to-br ${work.accent}`}>
          {work.image ? (
            <img src={work.image} alt={work.title} className="portfolio-work-image" />
          ) : (
            <div className="portfolio-work-placeholder" aria-hidden="true">
              <span>скоро</span>
            </div>
          )}
          <div className="portfolio-work-title">
            <h3>{work.title}</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-sm font-semibold text-lime-200">{work.type}</p>
          <p className="mt-4 text-sm leading-7 text-white/60">{work.description}</p>
        </div>
      </div>
    </Link>
  )
}
