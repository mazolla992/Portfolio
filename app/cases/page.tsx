import type { Metadata } from 'next'
import PortfolioWorkCard from '@/components/PortfolioWorkCard'
import { cases } from '@/lib/cases'

export const metadata: Metadata = {
  title: 'Кейсы',
  description: 'Кейсы Евгения: сайты, портфолио и интерфейсы с фокусом на доверие и заявки.',
}

const accents = ['from-emerald-300 to-cyan-300', 'from-lime-300 to-yellow-200', 'from-orange-300 to-rose-300', 'from-lime-300 to-emerald-400']

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-[#070807] px-4 pb-24 pt-32 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="portfolio-reveal mb-12">
          <p className="portfolio-eyebrow">Кейсы</p>
          <h1 className="portfolio-section-title">Мои работы</h1>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {cases.map((item, index) => (
            <PortfolioWorkCard
              key={item.slug}
              index={index}
              work={{
                title: item.title,
                href: `/cases/${item.slug}`,
                type: item.category,
                description: item.summary,
                image: item.image ?? undefined,
                accent: accents[index] ?? accents[0],
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
