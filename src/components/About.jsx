import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function About() {
  const { t } = useLang()

  return (
    <section id="about" className="px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {t.about.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-white/60">{t.about.p1}</p>
            <p className="mt-4 text-base leading-8 text-white/50">{t.about.p2}</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="glass overflow-hidden rounded-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 font-mono text-xs text-white/40">
              <span className="text-vibe">src</span>
              <span>/</span>
              <span>vibe.code</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-white/75">
{`const vibe = {
  brand: "VIBE CODE",
  stack: ["React", "Node.js", "Discord"],
  focus: ["bots", "web", "automation"],
}

export function build(idea) {
  return ship(idea, { quality: "premium" })
}`}
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
