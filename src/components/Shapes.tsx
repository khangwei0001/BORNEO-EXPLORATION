import type { CSSProperties } from 'react'

type SP = { className?: string; style?: CSSProperties; color?: string }

/* ---- Hornbill in flight — the Kenyalang, icon of Sarawak ---- */
export function Hornbill({ className, style, color = 'currentColor' }: SP) {
  return (
    <svg viewBox="0 0 120 64" className={className} style={style} fill={color} aria-hidden>
      <path d="M2 40c9-3 18-5 27-4 6 .6 11 3 17 4 3-8 9-14 18-16 4-1 8-1 12 .5-2 1.4-4 2.4-6 3 3 .3 5 1.4 7 3-2 .8-4 1-6 .9 1.6 1.7 2.4 3.7 2.6 6 5-3.4 10-6.7 16-8.4 5-1.5 10-1.8 15-.7-4 2-8 4-11 7 4-.6 8-.4 12 .8-5 1.6-9 3.8-13 6.6 3 .2 6 1 8 2.6-6 1.2-12 1.3-18 .2-7-1.3-12-4.7-19-5.6-8-1-15 1.7-22 5.3-6 3-12 6.2-19 6.6-8 .5-16-1.7-22-6.9 1.2-1 2.5-1.9 3.8-2.6-6-.2-11-1.9-16-5.6z" />
      <circle cx="88" cy="26" r="1.6" fill="var(--ink)" opacity="0.85" />
    </svg>
  )
}

/* ---- Monstera leaf ---- */
export function Monstera({ className, style, color = 'currentColor' }: SP) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} fill={color} aria-hidden>
      <path d="M50 4C24 12 6 34 6 60c0 20 14 36 44 36 8 0 8-8 0-9C28 85 18 72 18 58c0-4 4-6 8-4 6 3 6 12 14 12 5 0 6-6 1-9-8-5-9-15-3-19 4-3 9 1 11 7 2 6 9 6 9-1 0-7-6-11-3-17 2-4 8-3 12 2 3 4 10 2 8-5-2-8-10-15-24-15h-1z" />
    </svg>
  )
}

/* ---- Fern frond ---- */
export function Fern({ className, style, color = 'currentColor' }: SP) {
  return (
    <svg viewBox="0 0 60 100" className={className} style={style} stroke={color} fill="none" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M30 98C30 70 30 40 34 10" />
      {[...Array(9)].map((_, i) => {
        const y = 14 + i * 9
        const len = 6 + (9 - i) * 2.2
        return (
          <g key={i}>
            <path d={`M${32 - i * 0.4} ${y}C${32 - len} ${y - 2} ${34 - len} ${y - 8} ${34 - len - 2} ${y - 12}`} />
            <path d={`M${32 + i * 0.4} ${y + 2}C${32 + len} ${y} ${30 + len} ${y - 6} ${30 + len + 2} ${y - 10}`} />
          </g>
        )
      })}
    </svg>
  )
}

/* ---- Hibiscus (Bunga Raya) ---- */
export function Hibiscus({ className, style, color = 'currentColor' }: SP) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden>
      <g fill={color}>
        {[0, 72, 144, 216, 288].map((deg) => (
          <path key={deg} transform={`rotate(${deg} 50 50)`} d="M50 50c-6-14-4-30 0-42 4 12 6 28 0 42z" opacity="0.92" />
        ))}
      </g>
      <circle cx="50" cy="50" r="6" fill="var(--casque)" />
      <line x1="50" y1="50" x2="50" y2="18" stroke="var(--casque)" strokeWidth="2" />
    </svg>
  )
}

/* ---- Pua Kumbu batik motif (spiral-hook ikat unit) ---- */
export function BatikMotif({ className, style, color = 'currentColor' }: SP) {
  return (
    <svg viewBox="0 0 120 120" className={className} style={style} fill="none" stroke={color} strokeWidth="2.2" aria-hidden>
      <path d="M60 8c-14 0-24 10-24 24 0 10 7 18 17 18 7 0 12-5 12-11 0-5-4-8-8-8-3 0-5 2-5 4" />
      <path d="M60 112c14 0 24-10 24-24 0-10-7-18-17-18-7 0-12 5-12 11 0 5 4 8 8 8 3 0 5-2 5-4" />
      <path d="M8 60c0-14 10-24 24-24 10 0 18 7 18 17 0 7-5 12-11 12-5 0-8-4-8-8" strokeOpacity="0.55" />
      <path d="M112 60c0 14-10 24-24 24-10 0-18-7-18-17 0-7 5-12 11-12 5 0 8 4 8 8" strokeOpacity="0.55" />
      <circle cx="60" cy="60" r="5" fill={color} stroke="none" />
    </svg>
  )
}

/* ---- Compass rose (exploration / cartography) ---- */
export function Compass({ className, style, color = 'currentColor' }: SP) {
  return (
    <svg viewBox="0 0 120 120" className={className} style={style} aria-hidden>
      <circle cx="60" cy="60" r="54" fill="none" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <circle cx="60" cy="60" r="44" fill="none" stroke={color} strokeWidth="1" opacity="0.3" strokeDasharray="2 4" />
      <path d="M60 10L70 60 60 110 50 60z" fill={color} opacity="0.9" />
      <path d="M10 60L60 50 110 60 60 70z" fill={color} opacity="0.45" />
      <circle cx="60" cy="60" r="4" fill={color} />
    </svg>
  )
}

/* ---- Wave line (ocean / cruise) ---- */
export function Waves({ className, style, color = 'currentColor' }: SP) {
  return (
    <svg viewBox="0 0 240 24" className={className} style={style} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" aria-hidden preserveAspectRatio="none">
      <path d="M0 12c20-12 40 12 60 0s40-12 60 0 40 12 60 0 40-12 60 0" />
    </svg>
  )
}

/* ============ UI ICONS ============ */
export function ArrowRight({ className, style, color = 'currentColor' }: SP) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" className={`arrow ${className ?? ''}`} style={style} fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
export function Search({ className, style, color = 'currentColor' }: SP) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className={className} style={style} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" aria-hidden>
      <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
    </svg>
  )
}
export function Chevron({ className, style, color = 'currentColor' }: SP) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" className={className} style={style} fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

/* ---- Social icons ---- */
export function SocialIcon({ name, color = 'currentColor' }: { name: string; color?: string }) {
  const p: Record<string, string> = {
    whatsapp: 'M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2zm0 2a8 8 0 0 1 6.7 12.3l-.3.5.6 2.3-2.4-.6-.4.2A8 8 0 1 1 12 4zm-3.4 3.9c-.2 0-.5 0-.7.4-.3.4-1 1-1 2.3s1 2.7 1.2 2.9c.1.2 2 3.1 4.9 4.2 2.4.9 2.9.7 3.4.7.5 0 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-1.5-.8c-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.5-1.8-.1-.2 0-.4.1-.5l.4-.5c.1-.2.1-.3.2-.5 0-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4z',
    facebook: 'M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z',
    instagram: 'M12 2c2.7 0 3 0 4.1.1 1.1 0 1.8.2 2.5.5.7.3 1.2.6 1.8 1.2.6.6.9 1.1 1.2 1.8.3.7.5 1.4.5 2.5.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1.1-.2 1.8-.5 2.5-.3.7-.6 1.2-1.2 1.8-.6.6-1.1.9-1.8 1.2-.7.3-1.4.5-2.5.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1.1 0-1.8-.2-2.5-.5-.7-.3-1.2-.6-1.8-1.2-.6-.6-.9-1.1-1.2-1.8-.3-.7-.5-1.4-.5-2.5C2 15 2 14.7 2 12s0-3 .1-4.1c0-1.1.2-1.8.5-2.5.3-.7.6-1.2 1.2-1.8.6-.6 1.1-.9 1.8-1.2.7-.3 1.4-.5 2.5-.5C9 2 9.3 2 12 2zm0 1.8c-2.7 0-3 0-4 .1-1 0-1.5.2-1.9.3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.4-.3.9-.3 1.9-.1 1-.1 1.3-.1 4s0 3 .1 4c0 1 .2 1.5.3 1.9.2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.1.9.3 1.9.3 1 .1 1.3.1 4 .1s3 0 4-.1c1 0 1.5-.2 1.9-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.4.3-.9.3-1.9.1-1 .1-1.3.1-4s0-3-.1-4c0-1-.2-1.5-.3-1.9-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.1-.9-.3-1.9-.3-1-.1-1.3-.1-4-.1zm0 3.1a5.1 5.1 0 1 1 0 10.2 5.1 5.1 0 0 1 0-10.2zm0 1.8a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6zm5.3-3.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z',
    youtube: 'M23 8.5c-.2-1.3-.9-2.2-2.2-2.4C18.9 5.7 12 5.7 12 5.7s-6.9 0-8.8.4C1.9 6.3 1.2 7.2 1 8.5.6 10.4.6 12 .6 12s0 1.6.4 3.5c.2 1.3.9 2.2 2.2 2.4 1.9.4 8.8.4 8.8.4s6.9 0 8.8-.4c1.3-.2 2-1.1 2.2-2.4.4-1.9.4-3.5.4-3.5s0-1.6-.4-3.5zM9.7 15.4V8.6l5.8 3.4-5.8 3.4z',
    x: 'M18.2 2h3.3l-7.2 8.2L23 22h-6.6l-5.2-6.8L5.2 22H1.9l7.7-8.8L1.4 2h6.8l4.7 6.2L18.2 2zm-1.2 18h1.8L7.1 3.8H5.2L17 20z',
  }
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill={color} aria-hidden>
      <path d={p[name]} />
    </svg>
  )
}

/* ---- Logo swoosh accent (echoes the brand mark) ---- */
export function Swoosh({ className, style }: SP) {
  return (
    <svg viewBox="0 0 200 120" className={className} style={style} fill="none" aria-hidden>
      <path d="M6 60C40 14 120 6 194 24c-40-2-96 8-120 40 34-18 78-22 118-8-48 4-92 22-120 52 22-40 68-56 108-56-58-8-112 4-152 32z" fill="var(--hornbill)" opacity="0.9" />
      <path d="M6 96C46 60 122 52 196 74c-42-6-98 2-124 32 36-14 80-14 118 2-50-2-94 12-124 40 26-34 70-46 110-42-56-14-112-6-150 26-8 6-14 12-20 20z" fill="var(--kenyalang)" opacity="0.85" />
    </svg>
  )
}
