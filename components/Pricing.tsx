import Link from 'next/link'

const plans = [
  {
    name: 'Старт',
    slug: 'start',
    price: '2 900',
    description: 'Идеально для начала',
    features: [
      'Telegram-бот (FAQ + напоминания + автовозврат)',
      'Запись клиентов через бота',
      'Напоминания за 2 часа до визита',
      'Автовозврат клиентов через 21 день',
      'Хостинг и поддержка включены',
    ],
    cta: 'Выбрать Старт',
    highlighted: false,
  },
  {
    name: 'Рост',
    slug: 'rost',
    price: '5 900',
    description: 'Для активного роста',
    features: [
      'Всё из тарифа Старт',
      '8 постов в месяц для ВКонтакте и Telegram-канала',
      'Генерация контента через AI',
      'Согласование постов с владельцем',
      'Автопостинг по расписанию',
    ],
    cta: 'Выбрать Рост',
    highlighted: true,
    badge: 'Популярный',
  },
  {
    name: 'Полный',
    slug: 'polny',
    price: '9 900',
    description: 'Максимум возможностей',
    features: [
      'Всё из тарифа Рост',
      'Еженедельная AI-аналитика',
      'Отчёт по источникам трафика',
      'AI-интерпретация результатов',
    ],
    cta: 'Выбрать Полный',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-gray-50">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-600 font-semibold text-sm mb-2">Прозрачные цены</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Выберите тариф
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Фиксированная оплата в месяц. Без скрытых комиссий и дополнительных трат.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? 'bg-brand-700 text-white shadow-xl shadow-brand-200 scale-105'
                  : 'bg-white border border-gray-100 shadow-sm'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-400 text-amber-900 text-xs font-bold">
                  {plan.badge}
                </span>
              )}

              {/* Plan name */}
              <p className={`text-sm font-semibold mb-1 ${plan.highlighted ? 'text-brand-200' : 'text-brand-600'}`}>
                {plan.name}
              </p>
              <p className={`text-xs mb-4 ${plan.highlighted ? 'text-brand-300' : 'text-gray-500'}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className={`text-lg ml-1 ${plan.highlighted ? 'text-brand-300' : 'text-gray-500'}`}>₽/мес</span>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-brand-300' : 'text-brand-500'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className={plan.highlighted ? 'text-white' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={`/plan/${plan.slug}`}
                className={`text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-brand-700 hover:bg-brand-50'
                    : 'bg-brand-700 text-white hover:bg-brand-600'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
