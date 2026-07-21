'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { PAINS } from './pains'

interface Props {
  niche: string
  pains: string[]
  onBack: () => void
}

const TARIFFS = {
  start: { name: 'Старт', price: 'от 2 900 ₽/мес' },
  growth: { name: 'Рост', price: 'от 4 900 ₽/мес' },
  full: { name: 'Полный', price: 'от 7 900 ₽/мес' },
}

type TariffKey = keyof typeof TARIFFS

function calcTariff(painIds: string[]): TariffKey {
  const scores = { start: 0, growth: 0, full: 0 }
  for (const id of painIds) {
    const pain = PAINS.find((p) => p.id === id)
    if (!pain) continue
    scores.start += pain.weights.start
    scores.growth += pain.weights.growth
    scores.full += pain.weights.full
  }
  return (Object.keys(scores) as TariffKey[]).reduce((a, b) =>
    scores[a] >= scores[b] ? a : b
  )
}

export default function Step3Result({ niche, pains, onBack }: Props) {
  const tariffKey = calcTariff(pains)
  const tariff = TARIFFS[tariffKey]

  const [explanation, setExplanation] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const painTexts = pains
      .map((id) => PAINS.find((p) => p.id === id)?.text)
      .filter(Boolean)

    fetch('/api/tariff-explain', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ niche, pains: painTexts, tariff: tariff.name }),
    })
      .then((r) => r.json())
      .then((data) => setExplanation(data.explanation ?? null))
      .catch(() => setExplanation(null))
      .finally(() => setLoading(false))
  }, [niche, pains, tariff.name])

  const fallback = `Для вашего бизнеса «${niche}» тариф «${tariff.name}» закрывает большинство выбранных болей. Вы получите автоматические ответы, напоминания и возврат клиентов без лишних усилий.`

  return (
    <div className="flex flex-col gap-6">
      {/* Tariff card */}
      <div className="bg-brand-500 rounded-2xl p-6 text-white text-center">
        <p className="text-sm font-medium opacity-80 mb-1">Рекомендуемый тариф</p>
        <p className="text-3xl font-extrabold mb-1">{tariff.name}</p>
        <p className="text-brand-100 text-sm">{tariff.price}</p>
      </div>

      {/* AI explanation */}
      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center">
            <svg className="w-3 h-3 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="text-xs font-semibold text-brand-700 uppercase tracking-wide">AI-объяснение</span>
        </div>

        {loading ? (
          <div className="space-y-2 animate-pulse">
            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="h-3 bg-gray-200 rounded w-5/6" />
            <div className="h-3 bg-gray-200 rounded w-4/6" />
          </div>
        ) : (
          <p className="text-sm text-gray-700 leading-relaxed">
            {explanation ?? fallback}
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="btn-secondary px-6 py-3 text-sm"
        >
          Назад
        </button>
        <Link
          href={`/start?plan=${tariffKey}`}
          className="btn-primary flex-1 py-3 text-sm text-center"
        >
          Начать за 3 дня
        </Link>
      </div>
    </div>
  )
}
