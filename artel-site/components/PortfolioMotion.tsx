'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function PortfolioMotion() {
  const pathname = usePathname()

  useEffect(() => {
    const observed = new WeakSet<Element>()
    let frame = 0

    const shouldReveal = (element: Element) => {
      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      const revealLine = viewportHeight * 0.86

      return rect.top <= revealLine && rect.bottom >= -80
    }

    const reveal = (element: Element) => {
      element.classList.add('portfolio-reveal-visible')
      observer.unobserve(element)
    }

    const checkVisible = () => {
      document.querySelectorAll<HTMLElement>('.portfolio-reveal').forEach((element) => {
        if (element.classList.contains('portfolio-reveal-visible')) return
        if (shouldReveal(element)) reveal(element)
      })
    }

    const scheduleCheck = () => {
      if (frame) return

      frame = window.requestAnimationFrame(() => {
        frame = 0
        checkVisible()
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          reveal(entry.target)
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -14% 0px',
        threshold: 0.08,
      },
    )

    const observe = () => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>('.portfolio-reveal'))

      elements.forEach((element) => {
        if (element.classList.contains('portfolio-reveal-visible') || observed.has(element)) return

        observed.add(element)
        observer.observe(element)
      })

      scheduleCheck()
    }

    const mutationObserver = new MutationObserver(observe)

    observe()
    mutationObserver.observe(document.body, { childList: true, subtree: true })
    window.addEventListener('load', scheduleCheck)
    window.addEventListener('scroll', scheduleCheck, { passive: true })
    window.addEventListener('resize', scheduleCheck)

    const firstChecks = [
      window.setTimeout(scheduleCheck, 80),
      window.setTimeout(scheduleCheck, 320),
      window.setTimeout(scheduleCheck, 900),
    ]

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      firstChecks.forEach((timer) => window.clearTimeout(timer))
      window.removeEventListener('load', scheduleCheck)
      window.removeEventListener('scroll', scheduleCheck)
      window.removeEventListener('resize', scheduleCheck)
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [pathname])

  return null
}
