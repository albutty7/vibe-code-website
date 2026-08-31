import { brand, discord, panel } from '../config'
import { useLang } from '../i18n/LanguageContext'

const links = [
  { href: '#home', key: 'home' },
  { href: '#services', key: 'services' },
  { href: '#pricing', key: 'pricing' },
  { href: '#showcase', key: 'showcase' },
  { href: '#about', key: 'about' },
  { href: '#panel', key: 'panel' },
  { href: '#discord', key: 'discord' },
]

export function Footer() {
  const { t } = useLang()

  return (
    <footer className="border-t border-white/10 px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-vibe">{brand.mark}</span>
            <span className="text-sm font-semibold tracking-[0.18em]">{brand.name}</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-white/45">{t.footer.description}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/55">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {t.nav[link.key]}
            </a>
          ))}
          <a href={panel.url} target="_blank" rel="noreferrer" className="hover:text-vibe">
            {t.nav.panel}
          </a>
          <a href={discord.invite} target="_blank" rel="noreferrer" className="hover:text-vibe">
            Discord
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-xs text-white/35">{t.footer.rights}</p>
    </footer>
  )
}
