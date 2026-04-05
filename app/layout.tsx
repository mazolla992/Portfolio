import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://artel.ai'),
  title: {
    default: 'Артель — AI-автоматизация для малого бизнеса',
    template: '%s | Артель',
  },
  description:
    'Помогаем малому бизнесу привлекать клиентов и автоматизировать продажи с помощью AI-ботов и умных сайтов.',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Артель',
    title: 'Артель — AI-автоматизация для малого бизнеса',
    description:
      'Помогаем малому бизнесу привлекать клиентов и автоматизировать продажи с помощью AI-ботов и умных сайтов.',
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
    <html lang="ru" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
