import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50 pt-20 pb-24 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-100 opacity-40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-brand-100 opacity-30 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
          AI-автоматизация для бизнеса
        </span>

        {/* Pre-heading */}
        <p className="text-sm sm:text-base font-semibold text-brand-600 uppercase tracking-widest mb-3">
          Перестань бегать — начни управлять
        </p>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          AI-автоматизация<br />
          <span className="text-brand-600">для малого бизнеса</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Клиенты пишут в бота, записи приходят, выручка растёт.<br />
          Вы не трогаете технику. От&nbsp;2&nbsp;900&nbsp;₽/мес.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/start" className="btn-primary text-base px-8 py-4 shadow-md shadow-brand-200">
            Подключиться
          </Link>
          <Link href="/#how" className="btn-secondary text-base px-8 py-4">
            Узнать подробнее
          </Link>
        </div>

        {/* Trust badges */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Запуск за 3 дня
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Без техзнаний
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Поддержка по email
          </span>
        </div>
      </div>
    </section>
  )
}
