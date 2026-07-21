'use client'

import { useState } from 'react'
import { NICHES } from './niches'

interface Props {
  onSelect: (niche: string) => void
}

export default function Step1Niche({ onSelect }: Props) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<string | null>(null)

  const filtered = NICHES.filter((n) =>
    n.toLowerCase().includes(query.toLowerCase())
  )

  const handleSelect = (niche: string) => {
    setSelected(niche)
  }

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Поиск вашей ниши..."
        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
      />

      <div className="max-h-64 overflow-y-auto flex flex-col gap-1 pr-1">
        {filtered.length === 0 && (
          <p className="text-sm text-gray-400 text-center py-6">Ничего не найдено</p>
        )}
        {filtered.map((niche) => (
          <button
            key={niche}
            type="button"
            onClick={() => handleSelect(niche)}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-colors ${
              selected === niche
                ? 'bg-brand-500 text-white font-medium'
                : 'bg-gray-50 text-gray-700 hover:bg-brand-50 hover:text-brand-700'
            }`}
          >
            {niche}
          </button>
        ))}
      </div>

      <button
        type="button"
        disabled={!selected}
        onClick={() => selected && onSelect(selected)}
        className="btn-primary w-full py-3 text-sm disabled:opacity-40 disabled:cursor-not-allowed mt-2"
      >
        Далее
      </button>
    </div>
  )
}
