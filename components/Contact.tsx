import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" className="section bg-brand-700">
      <div className="container-narrow">
        <div className="text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Готовы начать?
          </h2>
          <p className="text-brand-200 text-lg mb-8 max-w-xl mx-auto">
            Оставьте заявку и мы свяжемся с вами в течение дня, чтобы обсудить ваш бизнес.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/start"
              className="bg-white text-brand-700 hover:bg-brand-50 transition-colors px-8 py-4 rounded-xl font-semibold text-base shadow-md font-semibold"
            >
              Оставить заявку
            </Link>
            <a
              href="mailto:artel.ai@yandex.com"
              className="border border-brand-400 text-white hover:bg-brand-600 transition-colors px-8 py-4 rounded-xl font-semibold text-base"
            >
              artel.ai@yandex.com
            </a>
          </div>

          {/* Contact details */}
          <div className="inline-flex items-center gap-2 text-brand-200 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Ответим в течение дня
          </div>
        </div>
      </div>
    </section>
  )
}
