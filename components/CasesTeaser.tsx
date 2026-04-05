import Link from 'next/link'

export default function CasesTeaser() {
  return (
    <section id="cases" className="section bg-gray-50">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-600 font-semibold text-sm mb-2">Результаты клиентов</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Кейсы
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Первые результаты появятся в июне 2026 — сейчас проходим запуск.
          </p>
        </div>

        {/* Single case stub */}
        <div className="max-w-2xl mx-auto card hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            {/* Logo placeholder */}
            <div className="w-14 h-14 rounded-xl bg-brand-100 flex items-center justify-center text-brand-700 font-extrabold text-lg flex-shrink-0">
              N
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-gray-900">NiceOne</h3>
                <span className="px-2 py-0.5 rounded bg-brand-50 text-brand-700 text-xs font-medium">Компьютерный клуб</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">Гатчина</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Первый клиент Артели. Бот запущен в апреле 2026. Принимает вопросы, ведёт базу клиентов, отправляет напоминания о визитах.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                В процессе
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/cases" className="btn-secondary">
            Все кейсы
          </Link>
        </div>
      </div>
    </section>
  )
}
