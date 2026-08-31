import { ArrowRight } from 'lucide-react'
import { discord } from '../config'
import { useLang } from '../i18n/LanguageContext'
import { DiscordButton } from './DiscordButton'
import { Terminal } from './Terminal'

export function Hero() {
  const { t } = useLang()

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 sm:pt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-vibe/30 bg-vibe/10 px-3 py-1.5 font-mono text-[11px] tracking-[0.2em] text-vibe">
            <span className="h-1.5 w-1.5 rounded-full bg-vibe shadow-[0_0_10px_#e11d48]" />
            {t.hero.badge}
          </div>
          <h1 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            {t.hero.titleLead}{' '}
            <span className="text-vibe" style={{ textShadow: '0 0 28px rgba(225,29,72,0.55)' }}>
              {t.hero.titleAccent}
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/65 sm:text-lg">
            {t.hero.subtitle}
          </p>
          <p className="mt-3 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
            {t.hero.subtitleArNote}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              {t.hero.getStarted}
              <ArrowRight size={16} />
            </a>
            <DiscordButton className="min-h-12">{t.hero.join}</DiscordButton>
          </div>
          <a
            href={discord.invite}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block font-mono text-xs text-white/30 hover:text-vibe"
          >
            discord.gg/PCUn8Mw4K
          </a>
        </div>
        <Terminal />
      </div>
    </section>
  )
}
