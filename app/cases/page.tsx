import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Кейсы',
  description:
    'Реальные результаты бизнесов, которые автоматизировали привлечение и удержание клиентов с Артелью.',
  openGraph: {
    title: 'Кейсы | Артель',
    description:
      'Реальные результаты бизнесов, которые автоматизировали привлечение и удержание клиентов с Артелью.',
    url: 'https://artel.ai/cases',
  },
}

export default function CasesPage() {
  return (
    <div className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-600 font-semibold text-sm mb-2">Результаты клиентов</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Кейсы
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Первые результаты появятся в июне 2026 — сейчас проходим запуск.
          </p>
        </div>

        {/* Case card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
          {/* Header band */}
          <div className="bg-brand-700 px-8 py-6 flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-white font-extrabold text-2xl">
              N
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">NiceOne</h2>
              <p className="text-brand-200 text-sm">Компьютерный клуб · Гатчина</p>
            </div>
            <span className="ml-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              В процессе
            </span>
          </div>

          <div className="p-8">
            {/* Story */}
            <p className="text-sm text-gray-600 leading-relaxed">
              Первый клиент Артели. Бот запущен в апреле 2026. Принимает вопросы, ведёт базу клиентов, отправляет напоминания о визитах.
            </p>
          </div>
        </div>

        {/* Coming soon */}
        <div className="bg-white rounded-2xl border border-dashed border-gray-200 p-10 text-center">
          <p className="text-gray-400 text-sm font-medium mb-1">Скоро</p>
          <p className="text-gray-500 text-sm">Новые кейсы появятся здесь. Мы регулярно публикуем результаты клиентов.</p>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-white rounded-2xl border border-brand-100 p-10 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Хотите стать следующим кейсом?</h2>
          <p className="text-gray-500 text-sm mb-6">Первый месяц бесплатно за честный отзыв.</p>
          <Link href="/start" className="btn-primary">
            Подключиться
          </Link>
        </div>
      </div>
    </div>
  )
}
