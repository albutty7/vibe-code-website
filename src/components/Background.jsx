export function Background() {
  const symbols = ['</>', '{ }', '=>', '[]', 'fn']

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#050506]" />
      <div className="orb absolute -left-24 top-[-8%] h-[420px] w-[420px] rounded-full bg-vibe/20 blur-[120px]" />
      <div className="orb absolute right-[-10%] top-[28%] h-[380px] w-[380px] rounded-full bg-blood/40 blur-[130px]" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[-10%] left-[30%] h-[280px] w-[280px] rounded-full bg-crimson/10 blur-[110px]" />
      <div className="grid-bg absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vibe/40 to-transparent" />
      {symbols.map((symbol, index) => (
        <span
          key={symbol}
          className="float-soft absolute font-mono text-xs text-vibe/20"
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
      {Array.from({ length: 18 }).map((_, index) => (
        <span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-vibe/30"
          style={{
            top: `${(index * 17) % 100}%`,
            left: `${(index * 23) % 100}%`,
            opacity: 0.25,
          }}
        />
      ))}
    </div>
  )
}
