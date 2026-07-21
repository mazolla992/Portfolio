const steps = [
  { day: 'День 1, утро', title: 'Созвон 30 минут', desc: 'Обсуждаем бизнес и боли' },
  { day: 'День 1, вечер', title: 'Вы присылаете', desc: 'Прайс, FAQ, фото' },
  { day: 'День 2', title: 'Настройка', desc: 'Бот, сайт, автоматизация' },
  { day: 'День 2, вечер', title: 'Тест', desc: 'Вы проверяете, правим если нужно' },
  { day: 'День 3, утро', title: 'Запуск', desc: 'Бот работает, клиенты пишут' },
]

export default function Timeline() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-14">
          Подключение за 3 дня
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-brand-200" />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                {/* Circle */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <div className="pt-1">
                  <p className="text-xs text-brand-600 font-semibold uppercase tracking-wide mb-0.5">{step.day}</p>
                  <p className="font-bold text-gray-900">{step.title}</p>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
