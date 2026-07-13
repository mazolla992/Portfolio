import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cases, getCase } from '@/lib/cases'

type CasePageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params
  const item = getCase(slug)

  if (!item) {
    return {
      title: 'Кейс не найден',
    }
  }

  return {
    title: `${item.title} — кейс`,
    description: item.summary,
  }
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params
  const item = getCase(slug)

  if (!item) {
    notFound()
  }

  const flatHero = item.slug === 'nice-one' || item.slug === 'revers3d'
  const caseImage = item.image as string | null
  const liveUrl = item.liveUrl as string | null

  return (
    <div className="min-h-screen bg-[#070807] px-4 pb-24 pt-32 text-white">
      <article className="mx-auto max-w-7xl">
        <Link
          href="/#works"
          className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-black text-white/60 transition hover:bg-white/10 hover:text-white"
        >
          Назад к работам
        </Link>

        <section className={`case-hero portfolio-reveal ${flatHero ? 'case-hero-wide' : ''}`}>
          <div className="case-hero-copy">
            <p className="portfolio-eyebrow">{item.eyebrow}</p>
            <h1>{item.title}</h1>
            <p>{item.summary}</p>
            <div className="case-stack">
              {item.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          {!flatHero && (
            <div className="case-visual">
              {caseImage ? (
                <img src={caseImage} alt={item.title} />
              ) : (
                <div className="case-visual-placeholder">
                  <span>изображение появится позже</span>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="case-grid">
          <div className="case-panel portfolio-reveal">
            <p>Задача</p>
            <h2>Что нужно было решить</h2>
            <span>{item.task}</span>
          </div>

          <div className="case-panel portfolio-reveal">
            <p>Результат</p>
            <h2>Что получилось</h2>
            <span>{item.result}</span>
          </div>
        </section>

        <section className="case-live portfolio-reveal">
          <div className="case-live-copy">
            <h2>Открыть проект в отдельном окне</h2>
          </div>

          {liveUrl ? (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="case-live-link">
              <span className="case-live-arrow">↗</span>
              <span className="case-live-label">Перейти на сайт</span>
            </a>
          ) : (
            <div className="case-live-link case-live-link-disabled" aria-disabled="true">
              <span className="case-live-arrow">↗</span>
              <span className="case-live-label">Ссылка появится здесь</span>
            </div>
          )}
        </section>

        <section className="case-cta portfolio-reveal">
          <h2>Хотите похожий сайт?</h2>
          <p>Напишите, что нужно собрать. Я помогу превратить идею в понятную страницу, которую не стыдно показать.</p>
          <Link href="/#contact">Написать Евгению</Link>
        </section>
      </article>
    </div>
  )
}
