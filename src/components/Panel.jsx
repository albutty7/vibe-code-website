import { ExternalLink, LayoutDashboard, Maximize2 } from 'lucide-react'
import { useState } from 'react'
import { panel } from '../config'
import { useLang } from '../i18n/LanguageContext'
import { Reveal, SectionHeading } from './Reveal'

export function Panel() {
  const { t } = useLang()
  const [loaded, setLoaded] = useState(false)

  return (
    <section id="panel" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={t.panel.eyebrow}
            title={t.panel.title}
            subtitle={t.panel.subtitle}
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-12 overflow-hidden rounded-[28px] border border-vibe/30 bg-black/70 shadow-[0_0_70px_rgba(225,29,72,0.16)]">
            <div className="flex flex-col gap-4 border-b border-white/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-vibe/30 bg-vibe/10 text-vibe">
                  <LayoutDashboard size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-wide text-white">{t.panel.windowTitle}</p>
                  <p className="font-mono text-[11px] text-white/40">{panel.host}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-vibe/30 bg-vibe/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.18em] text-vibe">
                  <span className="h-1.5 w-1.5 rounded-full bg-vibe shadow-[0_0_8px_#e11d48]" />
                  {t.panel.online}
                </span>
                <a
                  href={panel.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-vibe px-5 text-xs font-semibold tracking-wide text-white red-glow transition hover:bg-crimson"
                >
                  {t.panel.open}
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="relative bg-[#070708]">
              {!loaded ? (
                <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black/40">
                  <div className="rounded-2xl border border-white/10 bg-black/70 px-5 py-4 text-center">
                    <p className="font-mono text-xs tracking-[0.2em] text-vibe">{t.panel.loading}</p>
                    <p className="mt-2 text-sm text-white/50">{t.panel.loadingHint}</p>
                  </div>
                </div>
              ) : null}
              <iframe
                title={t.panel.windowTitle}
                src={panel.url}
                className="h-[70vh] min-h-[520px] w-full border-0 bg-[#070708]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allow="clipboard-write; fullscreen"
                onLoad={() => setLoaded(true)}
              />
            </div>

            <div className="flex flex-col gap-3 border-t border-white/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <p className="text-xs leading-6 text-white/40">{t.panel.note}</p>
              <a
                href={panel.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs text-white/60 transition hover:text-vibe"
              >
                <Maximize2 size={14} />
                {t.panel.fullscreen}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
