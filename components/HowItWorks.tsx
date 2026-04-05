const steps = [
  {
    number: '01',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: 'Сайт привлекает',
    description:
      'Лендинг под ваш бизнес с SEO-оптимизацией. Клиенты находят вас в поиске сами.',
  },
  {
    number: '02',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: 'Бот конвертирует',
    description:
      'AI-бот в Telegram отвечает на вопросы, принимает заявки и записывает клиентов. Без менеджера и в любое время.',
  },
  {
    number: '03',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Клиенты возвращаются',
    description:
      'Автоматические напоминания, акции и персональные предложения возвращают клиентов снова и снова.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="section bg-white">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-600 font-semibold text-sm mb-2">Простая система</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Как это работает
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Три шага, которые превращают незнакомцев в постоянных клиентов.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-brand-100 z-0" style={{ left: '16.66%', right: '16.66%' }} />

          {steps.map((step) => (
            <div key={step.number} className="relative z-10 card hover:shadow-md transition-shadow text-center group">
              {/* Icon circle */}
              <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-100 transition-colors">
                {step.icon}
              </div>
              {/* Number badge */}
              <span className="inline-block px-2 py-0.5 rounded-md bg-brand-600 text-white text-xs font-bold mb-3">
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
