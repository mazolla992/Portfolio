'use client'

import Link from 'next/link'
import { useState } from 'react'

function Logo() {
  return (
    <Link href="/" className="flex items-center font-bold text-xl">
      <span style={{ color: '#000000' }}>Ар</span>
      <span style={{ color: '#2d5a27' }}>тель</span>
    </Link>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/#how" className="hover:text-brand-700 transition-colors">Как работает</Link>
          <Link href="/#pricing" className="hover:text-brand-700 transition-colors">Тарифы</Link>
          <Link href="/cases" className="hover:text-brand-700 transition-colors">Кейсы</Link>
          <Link href="/#contact" className="hover:text-brand-700 transition-colors">Контакты</Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-3 text-sm font-medium text-gray-700">
          <Link href="/#how" onClick={() => setMenuOpen(false)} className="hover:text-brand-700">Как работает</Link>
          <Link href="/#pricing" onClick={() => setMenuOpen(false)} className="hover:text-brand-700">Тарифы</Link>
          <Link href="/cases" onClick={() => setMenuOpen(false)} className="hover:text-brand-700">Кейсы</Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)} className="hover:text-brand-700">Контакты</Link>
        </div>
      )}
    </header>
  )
}
