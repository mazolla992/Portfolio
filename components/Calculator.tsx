'use client'

import { useState } from 'react'

export default function Calculator() {
  const [leads, setLeads] = useState(5)
  const loss = Math.round(leads * 0.4 * 2000 * 30)

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Сколько вы теряете?
        </h2>
        <p className="text-gray-600 mb-10">Сколько заявок в день теряете без ответа?</p>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">1 заявка</span>
            <span className="text-2xl font-extrabold text-brand-600">{leads}</span>
            <span className="text-sm text-gray-500">30 заявок</span>
          </div>
          <input
            type="range"
            min={1}
            max={30}
            value={leads}
            onChange={(e) => setLeads(Number(e.target.value))}
            className="w-full accent-brand-500 mb-8"
          />
          <div className="bg-white border border-brand-100 rounded-xl p-6">
            <p className="text-gray-500 text-sm mb-1">Вы теряете примерно</p>
            <p className="text-4xl font-extrabold text-red-500 mb-3">
              ~{loss.toLocaleString('ru-RU')} ₽/мес
            </p>
            <p className="text-gray-400 text-sm">Артель стоит от 2 900 ₽.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
