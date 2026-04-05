import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Niches from '@/components/Niches'
import CasesTeaser from '@/components/CasesTeaser'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Артель — AI-автоматизация для малого бизнеса',
  description:
    'Сайт привлекает, AI-бот конвертирует, клиенты возвращаются. Подключите автоматизацию для своего бизнеса от 2 900 ₽/мес.',
  openGraph: {
    title: 'Артель — AI-автоматизация для малого бизнеса',
    description:
      'Сайт привлекает, AI-бот конвертирует, клиенты возвращаются. Подключите автоматизацию для своего бизнеса от 2 900 ₽/мес.',
    url: 'https://artel.ai',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Pricing />
      <Niches />
      <CasesTeaser />
      <Contact />
    </>
  )
}
