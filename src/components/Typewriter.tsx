import { useEffect, useRef, useState } from 'react'

/**
 * Types `text` out left-to-right after a short delay.
 * A transparent "ghost" copy reserves the full line box up front, so the
 * surrounding layout never reflows while the characters appear.
 * Honours prefers-reduced-motion by showing the full text immediately.
 */
export default function Typewriter({
  text,
  startDelay = 700,
  className,
}: {
  text: string
  startDelay?: number
  className?: string
}) {
  const [count, setCount] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setCount(text.length)
      return
    }

    setCount(0)
    // Normalise total duration so short and long leads feel similar (~2.6s).
    const perChar = Math.min(26, Math.max(7, 2600 / Math.max(text.length, 1)))
    let startTs: number | null = null

    const timer = window.setTimeout(() => {
      const tick = (ts: number) => {
        if (startTs === null) startTs = ts
        const n = Math.min(text.length, Math.floor((ts - startTs) / perChar))
        setCount(n)
        if (n < text.length) rafRef.current = requestAnimationFrame(tick)
      }
      rafRef.current = requestAnimationFrame(tick)
    }, startDelay)

    return () => {
      window.clearTimeout(timer)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [text, startDelay])

  const typed = text.slice(0, count)
  const rest = text.slice(count)
  const done = count >= text.length

  return (
    <span className={`tw ${className ?? ''}`} aria-label={text}>
      <span aria-hidden="true">{typed}</span>
      {!done && <span className="tw__caret" aria-hidden="true" />}
      <span className="tw__ghost" aria-hidden="true">{rest}</span>
    </span>
  )
}
