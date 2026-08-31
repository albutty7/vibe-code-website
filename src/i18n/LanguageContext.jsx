import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { copy } from './copy'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('vibe-lang')
    return saved === 'ar' || saved === 'en' ? saved : 'ar'
  })

  const t = copy[lang]

  useEffect(() => {
    localStorage.setItem('vibe-lang', lang)
    document.documentElement.lang = t.locale
    document.documentElement.dir = t.dir
  }, [lang, t.dir, t.locale])

  const value = useMemo(
    () => ({
      lang,
      t,
      toggle: () => setLang((prev) => (prev === 'ar' ? 'en' : 'ar')),
    }),
    [lang, t],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
