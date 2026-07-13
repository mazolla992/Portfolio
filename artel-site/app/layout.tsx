import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import PortfolioMotion from '@/components/PortfolioMotion'

export const metadata: Metadata = {
  metadataBase: new URL('https://artel-ai.ru'),
  icons: {
    icon: '/portfolio_favicon_transparent.png',
    shortcut: '/portfolio_favicon_transparent.png',
    apple: '/portfolio_favicon_transparent.png',
  },
  title: {
    default: 'Евгений — портфолио веб-разработчика',
    template: '%s | Евгений',
  },
  description:
    'Портфолио Евгения: сайты, лендинги, интерфейсы и страницы под идею.',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Евгений',
    title: 'Евгений — портфолио веб-разработчика',
    description:
      'Красивые сайты, портфолио, лендинги и интерфейсы с фокусом на доверие и заявки.',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="flex min-h-screen flex-col">
        <PortfolioMotion />
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
