export default function Roles() {
  const roles = [
    {
      icon: (
        <svg className="w-8 h-8 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3-3-3z" />
        </svg>
      ),
      title: 'ИИ-администратор',
      desc: 'Отвечает на вопросы, принимает заявки и записывает клиентов. Без менеджера, в любое время.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'ИИ-менеджер возврата',
      desc: 'Через 21 день после визита напоминает клиенту вернуться. Автоматически, без вашего участия.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: 'ИИ-репутационный менеджер',
      desc: 'Собирает отзывы после визита. Хорошие — на Яндекс Карты, плохие — лично вам.',
    },
  ]

  return (
    <section className="bg-gray-950 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
          Кто работает на ваш бизнес
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {roles.map((role) => (
            <div
              key={role.title}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-800 flex items-center justify-center">
                {role.icon}
              </div>
              <h3 className="text-brand-400 font-bold text-lg leading-snug">{role.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{role.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
