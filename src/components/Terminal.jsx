import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'

export function Terminal() {
  const { t } = useLang()
  const [text, setText] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const full = `${t.terminal.lines.join('\n')}\n\n${t.terminal.status}\n${t.terminal.community}\n${t.terminal.services}`
    setText('')
    setDone(false)
    let i = 0
    const timer = setInterval(() => {
      i += 1
      setText(full.slice(0, i))
      if (i >= full.length) {
        setDone(true)
        clearInterval(timer)
      }
    }, 18)
    return () => clearInterval(timer)
  }, [t])

  return (
    <div className="glass red-glow relative overflow-hidden rounded-2xl">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ms-3 font-mono text-[11px] tracking-[0.18em] text-white/45">
          {t.terminal.title}
        </span>
      </div>
      <pre className="min-h-[280px] whitespace-pre-wrap p-5 font-mono text-[13px] leading-7 text-white/80 sm:min-h-[320px] sm:text-sm">
        {text}
        <span className={`cursor-blink text-vibe ${done ? 'opacity-100' : ''}`}>█</span>
      </pre>
    </div>
  )
}
