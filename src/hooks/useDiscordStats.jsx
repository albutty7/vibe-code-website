import { createContext, useContext, useEffect, useState } from 'react'

const DiscordStatsContext = createContext(null)

export function DiscordStatsProvider({ children }) {
  const [state, setState] = useState({
    loading: true,
    available: false,
    members: null,
    online: null,
    widgetSrc: null,
  })

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const [statsRes, widgetRes] = await Promise.all([
          fetch('/api/discord/stats'),
          fetch('/api/discord/widget'),
        ])

        const stats = statsRes.ok ? await statsRes.json() : { available: false }
        const widget = widgetRes.ok ? await widgetRes.json() : { available: false }

        if (cancelled) return

        setState({
          loading: false,
          available: Boolean(stats.available),
          members: stats.members ?? null,
          online: stats.online ?? null,
          widgetSrc: widget.available ? widget.iframeSrc : null,
        })
      } catch {
        if (!cancelled) {
          setState({
            loading: false,
            available: false,
            members: null,
            online: null,
            widgetSrc: null,
          })
        }
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <DiscordStatsContext.Provider value={state}>{children}</DiscordStatsContext.Provider>
  )
}

export function useDiscordStats() {
  const ctx = useContext(DiscordStatsContext)
  if (!ctx) {
    throw new Error('useDiscordStats must be used within DiscordStatsProvider')
  }
  return ctx
}
