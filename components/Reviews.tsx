export default function Reviews() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Отзывы
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {/* Real review */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                НО
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Владелец NiceOne</p>
                <p className="text-xs text-gray-400">Гатчина, компьютерный клуб</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed flex-1">
              Бот работает с апреля. Клиенты сами находят расписание и цены — мне не нужно отвечать на одни и те же вопросы.
            </p>
          </div>

          {/* Placeholder 2 */}
          <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 text-gray-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-sm">Скоро</p>
          </div>

          {/* Placeholder 3 */}
          <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 text-gray-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-sm">Скоро</p>
          </div>
        </div>
      </div>
    </section>
  )
}
