'use client'

import { useState, useEffect, useRef } from 'react'

export const PLAN_OPTIONS = [
  {
    value: 'Старт',
    label: 'Старт — 2 900 ₽/мес',
    description: 'бот + напоминания + автовозврат',
  },
  {
    value: 'Рост',
    label: 'Рост — 5 900 ₽/мес',
    description: 'бот + AI-контент для соцсетей',
  },
  {
    value: 'Полный',
    label: 'Полный — 9 900 ₽/мес',
    description: 'всё + еженедельная AI-аналитика',
  },
  {
    value: 'Не определился',
    label: 'Не определился',
    description: 'помогите выбрать',
  },
]

interface PlanDropdownProps {
  value: string
  onChange: (val: string) => void
  error?: string
}

export default function PlanDropdown({ value, onChange, error }: PlanDropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const selected = PLAN_OPTIONS.find((p) => p.value === value)

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-left flex items-center justify-between transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent ${
          error ? 'border-red-400' : open ? 'border-brand-600' : 'border-gray-200'
        }`}
      >
        <span className={value ? 'text-gray-900' : 'text-gray-400'}>
          {selected ? selected.label : 'Выберите пакет'}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-20 mt-1.5 w-full bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden">
          <div className="py-1">
            {PLAN_OPTIONS.map((p) => (
              <button
                key={p.value}
                type="button"
                onClick={() => { onChange(p.value); setOpen(false) }}
                className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between gap-2 transition-colors hover:bg-brand-50 ${
                  value === p.value ? 'bg-brand-50 text-brand-700 font-medium' : 'text-gray-700'
                }`}
              >
                <span className="flex flex-col">
                  <span>{p.label}</span>
                  <span className="text-xs text-gray-400 font-normal mt-0.5">{p.description}</span>
                </span>
                {value === p.value && (
                  <svg className="w-4 h-4 text-brand-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
