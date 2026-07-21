const stats = [
  { value: '21 день', label: 'и клиент получает напоминание вернуться' },
  { value: '2 часа', label: 'напоминание до визита' },
  { value: '0', label: 'пропущенных вопросов в боте' },
  { value: '24/7', label: 'бот работает без выходных' },
]

export default function Stats() {
  return (
    <section className="py-20 px-4 bg-gray-950">
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.value} className="flex flex-col items-center text-center gap-2">
            <span className="text-3xl sm:text-4xl font-extrabold text-brand-400">{s.value}</span>
            <span className="text-gray-400 text-sm leading-snug">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
