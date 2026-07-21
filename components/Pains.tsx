const quotes = [
  {
    text: 'Пишут в директ — не успеваю отвечать',
    author: 'Владелец салона',
  },
  {
    text: 'Клиент записался и не пришёл, я узнал когда уже ждал',
    author: 'Мастер маникюра',
  },
  {
    text: 'Соцсети веду когда есть время, то есть никогда',
    author: 'Владелец автосервиса',
  },
]

export default function Pains() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <div
              key={q.author}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-8 flex flex-col gap-4"
            >
              <span className="text-6xl font-serif text-brand-200 leading-none">&ldquo;</span>
              <p className="text-gray-800 text-base leading-relaxed flex-1">{q.text}</p>
              <p className="text-gray-400 text-sm">— {q.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
