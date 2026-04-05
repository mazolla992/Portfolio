import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// ─── Data ──────────────────────────────────────────────────────────────────────

const HOW_TO_CONNECT = [
  {
    step: '01',
    title: 'Оставляете заявку',
    detail: 'Заполняете форму или пишете нам напрямую. Мы отвечаем в течение дня.',
  },
  {
    step: '02',
    title: 'Настраиваем под ваш бизнес',
    detail: 'Заполняете анкету — мы настраиваем бота, сценарии и расписание под вашу нишу.',
  },
  {
    step: '03',
    title: 'Запуск за 3 дня',
    detail: 'Бот выходит в работу. Все заявки приходят вам в Telegram. Ничего не теряется.',
  },
]

const PLANS = {
  start: {
    title: 'Тариф Старт',
    price: '2 900',
    forWho: 'Одиночный владелец без команды, который хочет чтобы клиенты не терялись.',
    features: [
      {
        icon: '🤖',
        title: 'Telegram-бот отвечает на вопросы 24/7',
        detail: 'Бот знает всё о вашем бизнесе: цены, расписание, услуги. Отвечает мгновенно в любое время суток.',
      },
      {
        icon: '📅',
        title: 'Запись клиентов через бота',
        detail: 'Клиент выбирает время прямо в диалоге. Запись приходит вам в уведомление.',
      },
      {
        icon: '⏰',
        title: 'Напоминание за 2 часа до визита',
        detail: 'Бот автоматически пишет клиенту перед визитом. Меньше забытых записей и пустых слотов.',
      },
      {
        icon: '🔄',
        title: 'Автовозврат клиентов через 21 день',
        detail: 'Если клиент не возвращается 21 день — бот пишет ему сам с напоминанием или акцией.',
      },
      {
        icon: '☁️',
        title: 'Хостинг и поддержка включены',
        detail: 'Никаких дополнительных расходов. Бот работает на наших серверах, мы следим за стабильностью.',
      },
    ],
    slug: 'start',
    planParam: 'Старт',
    ctaLabel: 'Выбрать Старт',
    prevPlan: null,
    nextPlan: { slug: 'rost', label: 'Тариф Рост →' },
  },
  rost: {
    title: 'Тариф Рост',
    price: '5 900',
    forWho: 'Владелец, который хочет активно привлекать новых клиентов через соцсети.',
    features: [
      {
        icon: '✅',
        title: 'Всё из тарифа Старт',
        detail: 'Бот, запись, напоминания, автовозврат и хостинг — всё включено.',
      },
      {
        icon: '✍️',
        title: '8 постов в месяц для ВКонтакте и Telegram-канала',
        detail: 'Два поста в неделю — достаточно, чтобы алгоритмы показывали вас новой аудитории.',
      },
      {
        icon: '🧠',
        title: 'Генерация контента через AI',
        detail: 'Тексты пишет AI на основе вашей ниши и актуальных тем. Без шаблонов и копипасты.',
      },
      {
        icon: '👁️',
        title: 'Согласование постов с владельцем',
        detail: 'Каждый пост присылаем вам на согласование перед публикацией. Правите — мы исправляем.',
      },
      {
        icon: '🕐',
        title: 'Автопостинг по расписанию',
        detail: 'Посты выходят в оптимальное время автоматически. Вам не нужно заходить в соцсети.',
      },
    ],
    slug: 'rost',
    planParam: 'Рост',
    ctaLabel: 'Выбрать Рост',
    prevPlan: { slug: 'start', label: '← Тариф Старт' },
    nextPlan: { slug: 'polny', label: 'Тариф Полный →' },
  },
  polny: {
    title: 'Тариф Полный',
    price: '9 900',
    forWho: 'Владелец, который хочет понимать что работает и принимать решения на основе данных.',
    features: [
      {
        icon: '✅',
        title: 'Всё из тарифа Рост',
        detail: 'Бот, контент для соцсетей, автопостинг — полный базовый пакет.',
      },
      {
        icon: '📊',
        title: 'Еженедельная AI-аналитика',
        detail: 'Каждую неделю — сводка: сколько обращений, откуда пришли, что сработало.',
      },
      {
        icon: '📍',
        title: 'Отчёт по источникам трафика',
        detail: 'Видите какой канал приносит клиентов: поиск, соцсети, бот, сарафан.',
      },
      {
        icon: '💡',
        title: 'AI-интерпретация результатов',
        detail: 'Не просто цифры — конкретные выводы и рекомендации что делать дальше.',
      },
    ],
    slug: 'polny',
    planParam: 'Полный',
    ctaLabel: 'Выбрать Полный',
    prevPlan: { slug: 'rost', label: '← Тариф Рост' },
    nextPlan: null,
  },
} as const

type PlanSlug = keyof typeof PLANS

export function generateStaticParams() {
  return Object.keys(PLANS).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const plan = PLANS[slug as PlanSlug]
  if (!plan) return {}
  return {
    title: plan.title,
    description: `${plan.title} — ${plan.price} ₽/мес. ${plan.forWho}`,
    openGraph: {
      title: `${plan.title} | Артель`,
      description: `${plan.title} — ${plan.price} ₽/мес. ${plan.forWho}`,
      url: `https://artel.ai/plan/${slug}`,
    },
  }
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function PlanPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const plan = PLANS[slug as PlanSlug]
  if (!plan) notFound()

  return (
    <div className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto">

        {/* Back link */}
        <Link
          href="/#pricing"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-700 mb-10 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Назад к тарифам
        </Link>

        {/* Hero card */}
        <div className="bg-brand-700 rounded-2xl p-8 text-white mb-6">
          <p className="text-brand-300 text-sm font-semibold mb-1">Артель</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">{plan.title}</h1>
          <div className="flex items-baseline gap-1 mb-5">
            <span className="text-5xl font-extrabold">{plan.price}</span>
            <span className="text-brand-300 text-xl">₽/мес</span>
          </div>
          <div className="flex items-start gap-2 bg-white/10 rounded-xl px-4 py-3">
            <svg className="w-4 h-4 text-brand-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <p className="text-sm text-brand-100 leading-relaxed">{plan.forWho}</p>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-5">Что входит</h2>
          <ul className="flex flex-col divide-y divide-gray-50">
            {plan.features.map((f) => (
              <li key={f.title} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                <span className="text-2xl flex-shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">{f.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* How to connect */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-1">Как подключиться</h2>
          <p className="text-sm text-gray-500 mb-5">Процесс одинаковый для всех тарифов</p>
          <ol className="flex flex-col gap-4">
            {HOW_TO_CONNECT.map((s) => (
              <li key={s.step} className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-lg bg-brand-700 text-white text-xs font-extrabold flex items-center justify-center flex-shrink-0">
                  {s.step}
                </span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">{s.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <Link
          href={`/start?plan=${plan.planParam}`}
          className="btn-primary w-full py-4 text-base text-center block mb-6"
        >
          Оставить заявку
        </Link>

        {/* Prev / Next navigation */}
        {(plan.prevPlan || plan.nextPlan) && (
          <div className="flex items-center justify-between gap-4">
            {plan.prevPlan ? (
              <Link
                href={`/plan/${plan.prevPlan.slug}`}
                className="text-sm text-brand-700 hover:text-brand-600 font-medium transition-colors"
              >
                {plan.prevPlan.label}
              </Link>
            ) : (
              <span />
            )}
            {plan.nextPlan ? (
              <Link
                href={`/plan/${plan.nextPlan.slug}`}
                className="text-sm text-brand-700 hover:text-brand-600 font-medium transition-colors"
              >
                {plan.nextPlan.label}
              </Link>
            ) : (
              <span />
            )}
          </div>
        )}

      </div>
    </div>
  )
}
