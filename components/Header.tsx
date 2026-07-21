'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navItems = [
  { href: '/#works', label: 'Работы', code: '01' },
  { href: '/#services', label: 'Услуги', code: '02' },
  { href: '/#process', label: 'Процесс', code: '03' },
  { href: '/#contact', label: 'Контакт', code: '04' },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const elevated = pathname !== '/' || scrolled

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 72)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header className={`site-header ${elevated ? 'site-header-elevated' : 'site-header-hero'}`}>
      <div className="header-shell">
        <nav className="header-nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="header-nav-link">
              <span>{item.code}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-right">
          <Link href="/#contact" className="header-cta">
            Написать
          </Link>
          <button
            className="header-menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="header-mobile-panel">
          <nav className="grid gap-2 text-sm font-black">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="header-mobile-link">
                <span>{item.code}</span>
                {item.label}
              </Link>
            ))}
            <Link href="/#contact" className="header-mobile-cta">
              Написать
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
