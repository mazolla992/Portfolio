const messages = [
  { from: 'client', text: 'Привет! Хочу узнать цены' },
  { from: 'bot', text: 'Привет! У нас несколько зон. Буткемп от 140 ₽/ч, VIP от 200 ₽/ч. Какая интересует?' },
  { from: 'client', text: 'Буткемп на пятницу вечером' },
  { from: 'bot', text: 'Буткемп #5-7 (RTX 5070, 320Hz) — 200 ₽/ч. Хотите забронировать?' },
]

export default function BotScreenshot() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Так выглядит бот в деле
        </h2>
        <div className="flex justify-center">
          {/* iPhone frame */}
          <div className="relative w-72 bg-white rounded-[3rem] border-[6px] border-gray-200 shadow-2xl overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-200 rounded-b-2xl z-10" />

            {/* Chat area */}
            <div className="bg-gray-100 pt-10 pb-6 px-3 min-h-[480px] flex flex-col gap-3">
              {/* Header bar */}
              <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 mb-1 shadow-sm">
                <div className="w-7 h-7 rounded-full bg-brand-500 flex items-center justify-center text-white text-xs font-bold">А</div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">Артель Бот</p>
                  <p className="text-[10px] text-green-500">онлайн</p>
                </div>
              </div>

              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === 'client' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-xs leading-relaxed ${
                      msg.from === 'client'
                        ? 'bg-gray-300 text-gray-800 rounded-br-sm'
                        : 'bg-brand-500 text-white rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
