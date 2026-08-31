import { FolderCode, Users, Wifi, Zap } from 'lucide-react'
import { discord } from '../config'
import { projects } from '../data/projects'
import { services } from '../data/services'
import { useDiscordStats } from '../hooks/useDiscordStats'
import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function DiscordCTA() {
  const { t } = useLang()
  const stats = useDiscordStats()

  const cards = [
    {
      icon: Wifi,
      label: t.discordCta.online,
      value: stats.available && stats.online != null ? stats.online.toLocaleString() : '●',
    },
    {
      icon: Users,
      label: t.discordCta.members,
      value: stats.available && stats.members != null ? stats.members.toLocaleString() : t.stats.unavailable,
    },
    { icon: Zap, label: t.discordCta.services, value: String(services.length) },
    { icon: FolderCode, label: t.discordCta.projects, value: String(projects.length) },
  ]

  return (
    <section id="discord" className="relative px-4 py-20 sm:px-6">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-vibe/10 to-transparent" />
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-vibe/30 bg-black/70 p-6 shadow-[0_0_80px_rgba(225,29,72,0.18)] sm:p-10 lg:p-14">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {t.discordCta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/60">
              {t.discordCta.subtitle}
            </p>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <div key={card.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <card.icon className="text-vibe" size={18} />
              <p className="mt-3 font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
                {card.label}
              </p>
              <p className="mt-1 text-xl font-semibold text-white">{card.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-start">
          <a
            href={discord.invite}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-vibe px-8 text-base font-semibold tracking-wide text-white red-glow-strong transition hover:scale-[1.02] hover:bg-crimson"
          >
            {t.discordCta.join}
          </a>
          {stats.widgetSrc ? (
            <iframe
              title="Discord"
              src={stats.widgetSrc}
              width="350"
              height="400"
              className="max-w-full rounded-2xl border border-white/10"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            />
          ) : null}
        </div>
      </div>
    </section>
  )
}
