import { useEffect, useRef } from 'react'

/**
 * Adds `.is-visible` to elements with `.reveal` once they scroll into view.
 * A single shared observer walks the subtree of the returned ref.
 * One-shot: once revealed, elements stay revealed (no flicker on scroll-up).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const targets = Array.from(root.querySelectorAll<HTMLElement>('.reveal, .reveal-stagger'))
    if (!targets.length) return

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      targets.forEach((t) => t.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    )

    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  return ref
}
