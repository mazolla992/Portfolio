import type { Metadata } from 'next'
import PortfolioHome from '@/components/PortfolioHome'

export const metadata: Metadata = {
  title: 'Евгений — портфолио веб-разработчика',
  description:
    'Портфолио Евгения: красивые сайты, лендинги, интерфейсы и страницы под идею.',
  openGraph: {
    title: 'Евгений — портфолио веб-разработчика',
    description:
      'Работы, подход и форматы проектов: сайты, лендинги, интерфейсы и страницы под идею.',
    url: 'https://artel-ai.ru',
  },
}

export default function HomePage() {
  return <PortfolioHome />
}
