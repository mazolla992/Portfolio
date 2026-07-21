export default function PainVsSolution() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
        {/* Pain */}
        <div className="bg-gray-900 rounded-2xl p-8 flex flex-col gap-4">
          <h3 className="text-red-400 font-bold text-lg mb-2">Без Артели</h3>
          {[
            'Записи теряются в директе',
            'Клиенты не приходят — узнаёшь постфактум',
            'Клиент не вернулся — ты не знаешь',
          ].map((text) => (
            <div key={text} className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
              <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Solution */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col gap-4 shadow-sm">
          <h3 className="text-brand-600 font-bold text-lg mb-2">С Артелью</h3>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-500 text-sm">Визиты за неделю</span>
              <span className="text-2xl font-extrabold text-gray-900">24</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-500 text-sm">Напоминания отправлены</span>
              <span className="text-2xl font-extrabold text-brand-600">18</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-500 text-sm">Клиентов вернулось</span>
              <span className="text-2xl font-extrabold text-green-600">7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
