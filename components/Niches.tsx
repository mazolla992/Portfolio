import Link from 'next/link'

const niches = [
  {
    emoji: '🎮',
    name: 'Компьютерные клубы',
    description:
      'Бот принимает бронирование мест, отвечает на вопросы про тарифы и акции. Сайт выводится в топ по запросам района.',
    tags: ['Онлайн-запись', 'Акции', 'Аналитика'],
  },
  {
    emoji: '💇',
    name: 'Салоны красоты',
    description:
      'Клиенты записываются к мастеру прямо в Telegram. Автоматические напоминания снижают отмены на 40%.',
    tags: ['Запись к мастеру', 'Напоминания', 'Возврат клиентов'],
  },
  {
    emoji: '🔧',
    name: 'Автосервисы',
    description:
      'Бот принимает заявки на ТО, отвечает про цены, уведомляет о готовности авто. Всё без звонков.',
    tags: ['Заявки на ТО', 'Статус ремонта', 'Акции'],
  },
]

export default function Niches() {
  return (
    <section id="niches" className="section bg-white">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-600 font-semibold text-sm mb-2">Отраслевые решения</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Работаем с вашим бизнесом
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Готовые шаблоны и сценарии для популярных ниш. Запуск быстрее, результат точнее.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {niches.map((niche) => (
            <div key={niche.name} className="card hover:shadow-md transition-shadow group">
              {/* Icon */}
              <div className="text-4xl mb-4">{niche.emoji}</div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{niche.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{niche.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {niche.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-brand-50 text-brand-700 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">Ваша ниша не в списке? Мы работаем с любым бизнесом.</p>
          <Link href="/custom" className="btn-primary">
            Обсудить проект
          </Link>
        </div>
      </div>
    </section>
  )
}
