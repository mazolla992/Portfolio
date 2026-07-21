export interface Pain {
  id: string
  text: string
  sub: string
  weights: { start: number; growth: number; full: number }
}

export const PAINS: Pain[] = [
  { id: 'lose_leads', text: 'Теряю заявки из директа', sub: 'Клиенты пишут — не успеваю ответить', weights: { start: 3, growth: 1, full: 0 } },
  { id: 'no_show', text: 'Клиенты не приходят — узнаю постфактум', sub: 'Записался и пропал, а я уже ждал', weights: { start: 3, growth: 1, full: 0 } },
  { id: 'no_smm', text: 'Соцсети заброшены — нет времени', sub: 'Последний пост был месяц назад', weights: { start: 0, growth: 3, full: 1 } },
  { id: 'no_return', text: 'Клиенты приходят один раз и не возвращаются', sub: 'База есть — работы с ней нет', weights: { start: 2, growth: 1, full: 1 } },
  { id: 'no_analytics', text: 'Не понимаю откуда приходят клиенты', sub: 'Нет данных — непонятно что работает', weights: { start: 0, growth: 1, full: 3 } },
  { id: 'bad_reviews', text: 'Плохие отзывы на Яндекс Картах', sub: 'Хочу управлять репутацией', weights: { start: 1, growth: 1, full: 1 } },
  { id: 'same_questions', text: 'Каждый день одни и те же вопросы', sub: 'Цены, адрес, время работы — снова и снова', weights: { start: 3, growth: 0, full: 0 } },
  { id: 'no_reminders', text: 'Клиенты забывают о записи и не приходят', sub: 'Нужны автоматические напоминания', weights: { start: 3, growth: 1, full: 0 } },
  { id: 'no_content_ideas', text: 'Не знаю о чём писать в соцсетях', sub: 'Нет идей — нет постов', weights: { start: 0, growth: 3, full: 0 } },
  { id: 'want_reports', text: 'Хочу видеть цифры по бизнесу каждую неделю', sub: 'Визиты, источники, возврат — в одном месте', weights: { start: 0, growth: 0, full: 3 } },
  { id: 'phone_overload', text: 'Не успеваю отвечать на звонки во время работы', sub: 'Теряю клиентов пока занят', weights: { start: 3, growth: 0, full: 0 } },
  { id: 'no_site', text: 'Нет сайта или он устарел', sub: 'Клиенты не могут найти меня в поиске', weights: { start: 1, growth: 2, full: 1 } },
  { id: 'manual_booking', text: 'Запись ведётся в блокноте или в голове', sub: 'Путаница, накладки, потери', weights: { start: 3, growth: 1, full: 0 } },
  { id: 'no_loyalty', text: 'Нет программы лояльности для постоянных клиентов', sub: 'Постоянные клиенты ничем не отличаются от новых', weights: { start: 1, growth: 2, full: 2 } },
  { id: 'slow_response', text: 'Долго отвечаю — клиенты уходят к конкурентам', sub: 'Пока я думал — они уже записались в другое место', weights: { start: 3, growth: 0, full: 0 } },
  { id: 'no_promo', text: 'Не знаю как запустить акцию или скидку', sub: 'Хочу увеличить поток в тихие дни', weights: { start: 0, growth: 3, full: 1 } },
  { id: 'staff_questions', text: 'Сотрудники тратят время на ответы клиентам', sub: 'Мастера отвечают в мессенджерах вместо работы', weights: { start: 3, growth: 0, full: 0 } },
  { id: 'no_followup', text: 'Не слежу за клиентами после визита', sub: 'Они ушли — и всё, контакт потерян', weights: { start: 2, growth: 1, full: 1 } },
  { id: 'inconsistent_smm', text: 'Пишу в соцсети нерегулярно', sub: 'То 3 поста в день то тишина месяц', weights: { start: 0, growth: 3, full: 0 } },
  { id: 'want_ai', text: 'Хочу использовать AI в своём бизнесе', sub: 'Слышал что это работает — не знаю с чего начать', weights: { start: 1, growth: 2, full: 2 } },
]
