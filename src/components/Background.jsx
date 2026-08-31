const symbols = ['</>', '{ }', '=>', '[]', 'fn']

const particles = Array.from({ length: 22 }, (_, index) => ({
  id: index,
  left: `${(index * 17 + 9) % 94}%`,
  delay: `${(index * 0.7) % 9}s`,
  duration: `${10 + (index % 7)}s`,
  size: index % 5 === 0 ? 3 : 2,
}))

const sparks = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  top: `${(index * 13 + 8) % 90}%`,
  left: `${(index * 19 + 6) % 92}%`,
  delay: `${(index * 0.45) % 4}s`,
}))

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#050506]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(225,29,72,0.12),transparent_55%)]" />

      <div className="orb-a absolute -left-24 top-[-10%] h-[460px] w-[460px] rounded-full bg-vibe/25 blur-[120px]" />
      <div className="orb-b absolute right-[-14%] top-[22%] h-[420px] w-[420px] rounded-full bg-crimson/20 blur-[130px]" />
      <div className="orb-c absolute bottom-[-16%] left-[22%] h-[320px] w-[320px] rounded-full bg-blood/40 blur-[110px]" />

      <div className="grid-bg absolute inset-0" />

      <div className="scan-line absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-vibe/15 to-transparent" />
      <div className="beam absolute top-[18%] h-px w-[55%] bg-gradient-to-r from-transparent via-vibe/50 to-transparent" />
      <div className="beam absolute top-[62%] right-0 h-px w-[45%] bg-gradient-to-r from-transparent via-crimson/40 to-transparent" style={{ animationDelay: '3.5s' }} />
      <div className="absolute start-[12%] top-0 h-full w-px bg-gradient-to-b from-transparent via-vibe/20 to-transparent" />
      <div className="absolute end-[18%] top-0 h-full w-px bg-gradient-to-b from-transparent via-vibe/12 to-transparent" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vibe/50 to-transparent" />

      {symbols.map((symbol, index) => (
        <span
          key={symbol}
          className="float-soft absolute font-mono text-xs text-vibe/25"
          style={{
            top: `${12 + index * 16}%`,
            left: index % 2 === 0 ? `${8 + index * 7}%` : 'auto',
            right: index % 2 === 1 ? `${10 + index * 6}%` : 'auto',
            animationDelay: `${index * 0.8}s`,
          }}
        >
          {symbol}
        </span>
      ))}

      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle absolute bottom-[-4%] rounded-full bg-vibe"
          style={{
            left: particle.left,
            width: particle.size,
            height: particle.size,
            boxShadow: '0 0 10px rgba(225,29,72,0.7)',
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}

      {sparks.map((spark) => (
        <span
          key={spark.id}
          className="spark absolute h-1 w-1 rounded-full bg-vibe"
          style={{
            top: spark.top,
            left: spark.left,
            animationDelay: spark.delay,
          }}
        />
      ))}
    </div>
  )
}
