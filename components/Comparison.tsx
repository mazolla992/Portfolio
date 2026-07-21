const rows = [
  {
    label: 'Цена',
    artel: 'от 2 900 ₽/мес',
    freelancer: '15–50к разово',
    chat2desk: 'от 990 ₽/мес',
    salebot: 'от 590 ₽/мес',
  },
  {
    label: 'Поддержка',
    artel: 'всегда включена',
    freelancer: 'нет',
    chat2desk: 'платная',
    salebot: 'нет',
  },
  {
    label: 'SMM',
    artel: 'входит',
    freelancer: 'нет',
    chat2desk: 'нет',
    salebot: 'нет',
  },
  {
    label: 'Без техзнаний',
    artel: 'да',
    freelancer: 'нет',
    chat2desk: 'нет',
    salebot: 'клиент сам',
  },
  {
    label: 'Обновления',
    artel: 'включены',
    freelancer: 'платно',
    chat2desk: 'нет',
    salebot: 'нет',
  },
]

export default function Comparison() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Сравнение
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 text-gray-500 font-medium w-32"></th>
                <th className="py-3 px-4 text-center bg-brand-500 text-white rounded-t-xl font-bold">Артель</th>
                <th className="py-3 px-4 text-center text-gray-500 font-medium">Фрилансер</th>
                <th className="py-3 px-4 text-center text-gray-500 font-medium">Chat2Desk</th>
                <th className="py-3 px-4 text-center text-gray-500 font-medium">Salebot</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-3 px-4 font-medium text-gray-700">{row.label}</td>
                  <td className="py-3 px-4 text-center bg-brand-50 text-brand-700 font-semibold">{row.artel}</td>
                  <td className="py-3 px-4 text-center text-gray-500">{row.freelancer}</td>
                  <td className="py-3 px-4 text-center text-gray-500">{row.chat2desk}</td>
                  <td className="py-3 px-4 text-center text-gray-500">{row.salebot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
