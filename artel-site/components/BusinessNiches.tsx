import Link from 'next/link'

const niches = [
  {
    icon: (
      <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Салоны красоты',
    text: 'Запись к мастеру прямо в Telegram. Напоминания снижают неявки на 40%.',
    tags: ['Запись', 'Напоминания', 'Возврат клиентов'],
  },
  {
    icon: (
      <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 .001M13 16H9m4 0h3m3 0h.01M6 10h2v4H6v-4zm7.5-2.5h2l1.5 4H16l-1.5-4z" />
      </svg>
    ),
    title: 'Автосервисы',
    text: 'Заявки на ТО, статус ремонта, уведомления о готовности. Всё без звонков.',
    tags: ['Заявки на ТО', 'Статус ремонта', 'Акции'],
  },
  {
    icon: (
      <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: 'Компьютерные клубы',
    text: 'Бот принимает вопросы, отвечает на FAQ, возвращает клиентов через 21 день.',
    tags: ['FAQ', 'Автовозврат', 'Аналитика'],
  },
]

export default function BusinessNiches() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Работаем с вашим бизнесом
        </h2>
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {niches.map((niche) => (
            <div
              key={niche.title}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center">
                {niche.icon}
              </div>
              <h3 className="text-gray-900 font-bold text-lg">{niche.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{niche.text}</p>
              <div className="flex flex-wrap gap-2">
                {niche.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-brand-100 text-brand-700 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-gray-500 mb-4">Ваша ниша не в списке? Работаем с любым бизнесом.</p>
          <Link
            href="/start"
            className="btn-primary inline-block px-8 py-4 text-base"
          >
            Написать Евгению
          </Link>
        </div>
      </div>
    </section>
  )
}
