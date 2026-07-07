import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { ArrowRight } from './Shapes'
import './Coverflow.css'

/**
 * 3D coverflow carousel for portrait posters. Active poster is centered and
 * upright; neighbours recede in depth. Auto-advances until interacted with.
 */
export default function Coverflow({
  items,
  fg = '#fff',
  autoPlay = true,
}: {
  items: { src: string; alt: string }[]
  fg?: string
  autoPlay?: boolean
}) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = items.length
  const wrapRef = useRef<HTMLDivElement>(null)

  const go = (dir: number) => setActive((a) => (a + dir + n) % n)

  useEffect(() => {
    if (!autoPlay || paused || n <= 1) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setActive((a) => (a + 1) % n), 4200)
    return () => window.clearInterval(id)
  }, [autoPlay, paused, n])

  const offsetOf = (i: number) => {
    let d = i - active
    if (d > n / 2) d -= n
    if (d < -n / 2) d += n
    return d
  }

  return (
    <div
      ref={wrapRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="coverflow" style={{ '--cf-fg': fg } as CSSProperties}>
        <div className="coverflow__track">
          {items.map((item, i) => {
            const d = offsetOf(i)
            const abs = Math.abs(d)
            const visible = abs <= 2
            const style: CSSProperties = {
              transform: `translateX(${d * 46}%) translateZ(${-abs * 160}px) rotateY(${d * -16}deg) scale(${d === 0 ? 1 : 0.9})`,
              opacity: visible ? (abs === 0 ? 1 : abs === 1 ? 0.85 : 0.4) : 0,
              zIndex: 10 - abs,
              pointerEvents: visible ? 'auto' : 'none',
            }
            return (
              <button
                key={i}
                className={`coverflow__item ${d === 0 ? 'is-active' : ''}`}
                style={style}
                onClick={() => (d === 0 ? undefined : setActive(i))}
                aria-label={d === 0 ? item.alt : `View ${item.alt}`}
                aria-current={d === 0}
                tabIndex={visible ? 0 : -1}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
              </button>
            )
          })}
        </div>
      </div>

      <div className="coverflow__nav">
        <button className="coverflow__arrow" onClick={() => go(-1)} aria-label="Previous" style={{ '--cf-fg': fg } as CSSProperties}>
          <ArrowRight style={{ transform: 'rotate(180deg)' }} />
        </button>
        <div className="coverflow__dots">
          {items.map((_, i) => (
            <button
              key={i}
              className={`coverflow__dot ${i === active ? 'active' : ''}`}
              style={{ '--cf-fg': fg } as CSSProperties}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button className="coverflow__arrow" onClick={() => go(1)} aria-label="Next" style={{ '--cf-fg': fg } as CSSProperties}>
          <ArrowRight />
        </button>
      </div>
    </div>
  )
}
