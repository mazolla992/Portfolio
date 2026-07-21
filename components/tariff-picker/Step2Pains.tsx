'use client'

import { useState } from 'react'
import { PAINS } from './pains'

interface Props {
  niche: string
  onSubmit: (pains: string[]) => void
  onBack: () => void
}

export default function Step2Pains({ niche, onSubmit, onBack }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-gray-500">
        Ниша: <span className="font-medium text-gray-800">{niche}</span>
      </p>

      <div className="flex flex-col gap-2 max-h-96 overflow-y-auto pr-1">
        {PAINS.map((pain) => {
          const isSelected = selected.has(pain.id)
          return (
            <button
              key={pain.id}
              type="button"
              onClick={() => toggle(pain.id)}
              className={`w-full text-left px-4 py-3 rounded-xl border transition-colors flex items-start gap-3 ${
                isSelected
                  ? 'border-brand-500 bg-brand-50'
                  : 'border-gray-100 bg-gray-50 hover:border-brand-200 hover:bg-brand-50/50'
              }`}
            >
              <span className={`mt-0.5 w-4 h-4 rounded flex-shrink-0 border-2 flex items-center justify-center transition-colors ${
                isSelected ? 'bg-brand-500 border-brand-500' : 'border-gray-300'
              }`}>
                {isSelected && (
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                )}
              </span>
              <div>
                <p className={`text-sm font-medium leading-snug ${isSelected ? 'text-brand-700' : 'text-gray-800'}`}>
                  {pain.text}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{pain.sub}</p>
              </div>
            </button>
          )
        })}
      </div>

      <div className="flex gap-3 mt-2">
        <button
          type="button"
          onClick={onBack}
          className="btn-secondary px-6 py-3 text-sm"
        >
          Назад
        </button>
        <button
          type="button"
          disabled={selected.size === 0}
          onClick={() => onSubmit(Array.from(selected))}
          className="btn-primary flex-1 py-3 text-sm disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Подобрать тариф
        </button>
      </div>
    </div>
  )
}
