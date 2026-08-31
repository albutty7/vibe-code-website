import { Bot, Code2, Cpu, Globe, Palette, Workflow } from 'lucide-react'
import { services } from '../data/services'
import { useLang } from '../i18n/LanguageContext'
import { DiscordButton } from './DiscordButton'
import { Reveal, SectionHeading } from './Reveal'

const icons = { Bot, Globe, Cpu, Workflow, Palette, Code2 }

export function Services() {
  const { lang, t } = useLang()

  return (
    <section id="services" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading title={t.services.title} subtitle={t.services.subtitle} />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon] || Code2
            const content = service[lang]
            return (
              <Reveal key={service.id} delay={index * 0.04}>
                <article className="group glass h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-vibe/40 hover:shadow-[0_0_32px_rgba(225,29,72,0.12)]">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-vibe transition group-hover:border-vibe/40">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{content.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">{content.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] tracking-wider text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <DiscordButton className="mt-6 w-full" variant="ghost">
                    {t.services.request} →
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
