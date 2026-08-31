import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { brand, discord } from '../config'
import { useLang } from '../i18n/LanguageContext'

const links = [
  { href: '#home', key: 'home' },
  { href: '#services', key: 'services' },
  { href: '#pricing', key: 'pricing' },
  { href: '#showcase', key: 'showcase' },
  { href: '#about', key: 'about' },
  { href: '#discord', key: 'discord' },
]

export function Navbar() {
  const { t, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-black/70 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2 text-white">
          <span className="font-mono text-vibe">{brand.mark}</span>
          <span className="text-sm font-semibold tracking-[0.18em]">{brand.name}</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-white/70 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggle}
            className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/70 hover:border-vibe/40 hover:text-white"
          >
            {t.lang}
          </button>
          <a
            href={discord.invite}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-vibe px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-white red-glow transition hover:bg-crimson hover:red-glow-strong"
          >
            {t.nav.join}
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-black/90 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-white/80 hover:bg-white/5"
              >
                {t.nav[link.key]}
              </a>
            ))}
            <button
              type="button"
              onClick={toggle}
              className="rounded-xl border border-white/10 px-3 py-3 text-start text-white/80"
            >
              {t.lang}
            </button>
            <a
              href={discord.invite}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-vibe px-3 py-3 text-center font-semibold text-white red-glow"
            >
              {t.nav.join}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
