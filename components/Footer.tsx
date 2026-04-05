import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center font-bold text-lg mb-3">
              <span style={{ color: '#000000' }}>Ар</span>
              <span style={{ color: '#2d5a27' }}>тель</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              AI-автоматизация для малого бизнеса. Помогаем привлекать и удерживать клиентов.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-semibold text-gray-700 mb-3 text-sm">Навигация</p>
            <nav className="flex flex-col gap-2 text-sm text-gray-500">
              <Link href="/#how" className="hover:text-brand-700 transition-colors">Как работает</Link>
              <Link href="/#pricing" className="hover:text-brand-700 transition-colors">Тарифы</Link>
              <Link href="/cases" className="hover:text-brand-700 transition-colors">Кейсы</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-gray-700 mb-3 text-sm">Контакты</p>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <a href="mailto:artel.ai@yandex.com" className="hover:text-brand-700 transition-colors">
                artel.ai@yandex.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Артель. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
