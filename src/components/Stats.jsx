import { Bot, FolderCode, Users, Wifi } from 'lucide-react'
import { projects } from '../data/projects'
import { services } from '../data/services'
import { useCountUp } from '../hooks/useCountUp'
import { useDiscordStats } from '../hooks/useDiscordStats'
import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

function StatCard({ icon: Icon, label, value, fallback }) {
  const numeric = typeof value === 'number'
  const { ref, display } = useCountUp(numeric ? value : 0)

  return (
    <div ref={ref} className="glass rounded-2xl p-5">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-vibe/20 bg-vibe/10 text-vibe">
        <Icon size={18} />
      </div>
      <p className="font-mono text-xs tracking-[0.18em] text-white/40 uppercase">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-white">
        {numeric ? display.toLocaleString() : fallback}
      </p>
    </div>
  )
}

export function Stats() {
  const { t } = useLang()
  const discord = useDiscordStats()

  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-8">
            <p className="font-mono text-[11px] tracking-[0.28em] text-vibe uppercase">
              {t.stats.title}
            </p>
            <p className="mt-2 text-sm text-white/50">{t.stats.subtitle}</p>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={Users}
            label={t.stats.members}
            value={discord.available ? discord.members : null}
            fallback={t.stats.unavailable}
          />
          <StatCard
            icon={Wifi}
            label={t.stats.online}
            value={discord.available ? discord.online : null}
            fallback={t.stats.unavailable}
          />
          <StatCard icon={Bot} label={t.stats.services} value={services.length} />
          <StatCard icon={FolderCode} label={t.stats.projects} value={projects.length} />
        </div>
        {!discord.loading && !discord.available ? (
          <p className="mt-4 font-mono text-xs text-white/35">{t.stats.unavailableHint}</p>
        ) : null}
      </div>
    </section>
  )
}
