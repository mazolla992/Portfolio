import Link from 'next/link'
import type { CSSProperties } from 'react'
import PortfolioWorkCard from './PortfolioWorkCard'

const works = [
  {
    title: 'Nice One',
    href: '/cases/nice-one',
    type: 'Сайт и бот для компьютерного клуба',
    description:
      'Витрина клуба, быстрые ответы на частые вопросы, заявки и сценарии возврата клиентов после визита.',
    image: '/найсван 1.jpg',
    accent: 'from-emerald-300 to-cyan-300',
  },
  {
    title: 'Revers3D',
    href: '/cases/revers3d',
    type: 'Сайт для проекта с 3D-печатью',
    description:
      'Аккуратная витрина услуги, визуальная подача продукта и понятный путь к обращению.',
    image: '/реверс3д 1.jpg',
    accent: 'from-lime-300 to-yellow-200',
  },
  {
    title: 'Parffman',
    href: '/cases/parffman',
    type: 'Личная витрина проекта',
    description:
      'Карточка подготовлена под будущую картинку: останется добавить визуал и раскрыть задачу.',
    accent: 'from-orange-300 to-rose-300',
  },
  {
    title: 'FarmCoPilot',
    href: '/cases/farmcopilot',
    type: 'Сервис для агро-процессов и управления фермой',
    description:
      'Витрина цифрового помощника для фермеров: понятная подача продукта, сценарии пользы и быстрый путь к обращению.',
    image: '/farmcopilot.jpg',
    accent: 'from-lime-300 to-emerald-400',
  },
]

const services = [
  {
    number: '01',
    title: 'Лендинги',
    text: 'Главный формат моей работы: сильный первый экран, понятный оффер, блоки доверия и путь до заявки без лишних шагов.',
    featured: true,
  },
  {
    number: '02',
    title: 'Интернет-магазины',
    text: 'Собираю витрину товаров, категории, карточки, корзину и понятный сценарий покупки.',
  },
  {
    number: '03',
    title: 'Портфолио',
    text: 'Упаковываю личный бренд, работы, процесс и контакт так, чтобы человеку было легко выбрать вас.',
  },
  {
    number: '04',
    title: 'Сайт под идею',
    text: 'Если нужен не просто лендинг, магазин или портфолио — соберу структуру, страницы и сценарий под вашу задачу.',
  },
]

const stack = ['Next.js', 'React', 'Tailwind CSS', 'TypeScript']
function TelegramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M21.9 4.1 18.7 20c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L6.1 13.5 1.2 12c-1.1-.3-1.1-1.1.2-1.6L20.5 3c.9-.3 1.7.2 1.4 1.1Z" />
    </svg>
  )
}

function YandexMailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" focusable="false">
      <path d="M6 17h52v34H6V17Z" fill="#FFD21E" />
      <path d="M6 17 32 37 58 17v34H6V17Z" fill="#F7C400" />
      <path d="M6 51 26.4 29.7 32 34l5.6-4.3L58 51H6Z" fill="#FFD83D" />
      <path d="M6 17h52L32 37 6 17Z" fill="#FC3F1D" />
    </svg>
  )
}

export default function PortfolioHome() {
  return (
    <div className="portfolio-shell overflow-hidden bg-[#070807] text-white">
      <section className="portfolio-hero-section relative min-h-screen px-4 pb-10 pt-28 sm:pt-32 lg:pt-28">
        <div className="portfolio-grid-bg absolute inset-0" />
        <div className="portfolio-grain absolute inset-0" />
        <div className="portfolio-hero-rings" aria-hidden="true" />
        <div className="portfolio-hero-lines" aria-hidden="true" />
        <div className="portfolio-hero-scan" aria-hidden="true" />
        <div className="portfolio-hero-portrait" aria-hidden="true">
          <img src="/бюст на сайт мягкий контур.png" alt="" />
        </div>

        <div className="portfolio-hero-stage relative mx-auto max-w-7xl">
          <div className="portfolio-hero-copy">
            <div className="portfolio-hero-kicker">
              <span>портфолио</span>
            </div>

            <h1 className="portfolio-hero-title max-w-6xl text-[clamp(3.4rem,8.8vw,8.8rem)] font-black leading-[0.85] tracking-[-0.065em]">
              <span className="portfolio-title-main">Сайты,</span>
              <span className="portfolio-title-muted block">которые</span>
              <span className="portfolio-text-shine block">запоминаются</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              Я Евгений. Делаю выразительные сайты для людей и малого бизнеса:
              быстро, аккуратно, с фокусом на заявки и доверие.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="portfolio-button-primary">
                Написать
              </Link>
            </div>

            <div className="portfolio-stack-panel" aria-label="Технологии">
              {stack.map((item) => (
                <div key={item} className="portfolio-mini-cell">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="works" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="portfolio-eyebrow portfolio-reveal portfolio-reveal-left">Кейсы</p>
              <h2
                className="portfolio-section-title portfolio-reveal portfolio-reveal-left"
                style={{ '--reveal-delay': '90ms' } as CSSProperties}
              >
                Мои работы
              </h2>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {works.map((work, index) => (
              <PortfolioWorkCard key={work.title} work={work} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="portfolio-services-section px-4 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="portfolio-eyebrow portfolio-reveal portfolio-reveal-right portfolio-reveal-fast">Что я делаю</p>
              <h2
                className="portfolio-section-title portfolio-reveal portfolio-reveal-right portfolio-reveal-fast"
                style={{ '--reveal-delay': '60ms' } as CSSProperties}
              >
                От идеи до готовой страницы
              </h2>
            </div>
          </div>

          <div className="portfolio-services-panel portfolio-reveal portfolio-reveal-right portfolio-reveal-fast">
            <div className="grid gap-5 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className={`portfolio-service-card ${service.featured ? 'portfolio-service-card-featured' : ''}`}
                >
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="portfolio-eyebrow portfolio-reveal portfolio-reveal-left">Процесс</p>
            <h2
              className="portfolio-section-title portfolio-reveal portfolio-reveal-left"
              style={{ '--reveal-delay': '80ms' } as CSSProperties}
            >
              Делаю сайт как продукт, а не как картинку
            </h2>
          </div>

          <div className="space-y-4">
            {[
              ['01', 'Понимаю задачу бизнеса', 'Разбираю, что должен сделать сайт: вызвать доверие, показать работы, объяснить услугу или привести к заявке.'],
              ['02', 'Собираю понятный сценарий', 'Продумываю путь посетителя: что он видит первым, где принимает решение и как быстро доходит до контакта.'],
              ['03', 'Делаю визуал и верстку', 'Собираю страницу так, чтобы она выглядела аккуратно, быстро открывалась и нормально работала на телефоне.'],
              ['04', 'Готовлю к показу клиентам', 'Проверяю детали, адаптив, кнопки и формы, чтобы сайт можно было спокойно отправлять людям.'],
            ].map(([num, title, text], index) => (
              <div
                key={num}
                className="portfolio-process-row portfolio-reveal portfolio-reveal-left"
                style={{ '--reveal-delay': `${index * 70}ms` } as CSSProperties}
              >
                <div>{num}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-24">
        <div className="portfolio-contact portfolio-reveal portfolio-reveal-bottom mx-auto max-w-7xl">
          <div>
            <h2 className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.9] tracking-[-0.07em] text-black">
              Сделаю сайт, который хочется показать
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-5">
            <p className="portfolio-contact-copy">
              Напишите, что нужно собрать: портфолио, лендинг, сайт для бизнеса или интерфейс.
              Я помогу с реализацией.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="https://t.me/gektorbarbossa0" className="portfolio-contact-button portfolio-contact-button-telegram">
                <span><TelegramIcon /></span>
                Телеграм
              </a>
              <a href="mailto:artel.ai@yandex.com" className="portfolio-contact-button portfolio-contact-button-yandex">
                <span><YandexMailIcon /></span>
                Yandex.ru
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
