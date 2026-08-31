import { discord } from '../config'

export function DiscordButton({
  children,
  className = '',
  variant = 'primary',
}) {
  const styles =
    variant === 'primary'
      ? 'bg-vibe text-white red-glow hover:bg-crimson hover:red-glow-strong'
      : 'border border-white/15 bg-white/5 text-white hover:border-vibe/60 hover:text-white'

  return (
    <a
      href={discord.invite}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold tracking-wide transition duration-200 ${styles} ${className}`}
    >
      {children}
    </a>
  )
}
