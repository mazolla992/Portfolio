import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070807] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 font-black tracking-[-0.04em]">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-lime-300 text-sm text-black">m</span>
            <span className="text-lg">Евгений</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
            Личные сайты, лендинги, портфолио и интерфейсы с упором на визуальную подачу,
            скорость и понятный путь до заявки.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-white/40">Навигация</p>
          <nav className="flex flex-col gap-2 text-sm text-white/60">
            <Link href="/#works" className="transition hover:text-lime-200">Работы</Link>
            <Link href="/#services" className="transition hover:text-lime-200">Услуги</Link>
            <Link href="/#process" className="transition hover:text-lime-200">Процесс</Link>
          </nav>
        </div>

        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-white/40">Контакт</p>
          <div className="flex flex-col gap-2 text-sm text-white/60">
            <a href="https://t.me/gektorbarbossa0" className="transition hover:text-lime-200">Телеграм</a>
            <a href="https://vk.com/mazzola992" className="transition hover:text-lime-200">ВК</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Евгений. Сделано вручную.
      </div>
    </footer>
  )
}
