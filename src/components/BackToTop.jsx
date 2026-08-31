import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 end-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-vibe/40 bg-ink/80 text-vibe shadow-[0_0_24px_rgba(225,29,72,0.25)] transition hover:bg-vibe hover:text-white"
    >
      <ArrowUp size={18} />
    </button>
  )
}
