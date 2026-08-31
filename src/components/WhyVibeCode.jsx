import { Gem, ShieldCheck, Wrench, Zap } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { Reveal, SectionHeading } from './Reveal'

const icons = { Zap, Gem, Wrench, ShieldCheck }

export function WhyVibeCode() {
  const { t } = useLang()

  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading title={t.why.title} />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {t.why.items.map((item, index) => {
            const Icon = icons[item.icon] || Zap
            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="glass h-full rounded-2xl p-6">
                  <Icon className="text-vibe" size={22} />
                  <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">{item.text}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
