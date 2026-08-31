import { Check } from 'lucide-react'
import { pricing } from '../data/pricing'
import { useLang } from '../i18n/LanguageContext'
import { DiscordButton } from './DiscordButton'
import { Reveal, SectionHeading } from './Reveal'

export function Pricing() {
  const { lang, t } = useLang()

  return (
    <section id="pricing" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading title={t.pricing.title} subtitle={t.pricing.subtitle} />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricing.map((plan, index) => {
            const content = plan[lang]
            return (
              <Reveal key={plan.id} delay={index * 0.05}>
                <article
                  className={`relative h-full rounded-2xl p-7 ${
                    plan.featured
                      ? 'border border-vibe/50 bg-vibe/10 red-glow'
                      : 'glass'
                  }`}
                >
                  {plan.featured ? (
                    <span className="absolute -top-3 start-6 rounded-full bg-vibe px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-white">
                      {plan.badge[lang]}
                    </span>
                  ) : null}
                  <p className="font-mono text-xs tracking-[0.24em] text-white/45">{content.name}</p>
                  <p className="mt-4 text-sm text-white/55">{content.startingFrom}</p>
                  <p className="mt-1 text-2xl font-semibold text-white">{t.pricing.quotePlaceholder}</p>
                  <p className="mt-3 text-sm leading-7 text-white/50">{content.description}</p>
                  <ul className="mt-6 space-y-3">
                    {content.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-white/70">
                        <Check size={16} className="mt-0.5 shrink-0 text-vibe" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <DiscordButton className="mt-8 w-full" variant={plan.featured ? 'primary' : 'ghost'}>
                    {t.pricing.quote}
                  </DiscordButton>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
