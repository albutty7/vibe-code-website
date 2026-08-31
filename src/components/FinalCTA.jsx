import { ArrowRight } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { DiscordButton } from './DiscordButton'
import { Reveal } from './Reveal'

export function FinalCTA() {
  const { t } = useLang()

  return (
    <section className="px-4 pb-16 sm:px-6">
      <Reveal>
        <div className="mx-auto max-w-7xl rounded-[28px] border border-white/10 bg-gradient-to-r from-white/5 to-vibe/10 px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-semibold text-white sm:text-5xl">{t.cta.title}</h2>
          <p className="mt-4 text-white/55">{t.cta.subtitle}</p>
          <DiscordButton className="mt-8 min-h-12 px-8">
            {t.cta.button}
            <ArrowRight size={16} />
          </DiscordButton>
        </div>
      </Reveal>
    </section>
  )
}
