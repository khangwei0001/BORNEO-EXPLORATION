import { useMemo } from 'react'
import { Monstera, Fern, Hibiscus } from './Shapes'
import './Ambient.css'

type Variant = 'forest' | 'ocean' | 'batik' | 'sepia'

const PALETTES: Record<Variant, { mist: string[]; leaf: string; fly: string }> = {
  forest: {
    mist: ['rgba(14,158,87,0.20)', 'rgba(242,169,59,0.16)', 'rgba(21,154,156,0.16)'],
    leaf: 'var(--kenyalang)',
    fly: '#f6c877',
  },
  ocean: {
    mist: ['rgba(21,154,156,0.22)', 'rgba(20,120,160,0.18)', 'rgba(246,200,119,0.12)'],
    leaf: 'var(--river)',
    fly: '#bfeef0',
  },
  batik: {
    mist: ['rgba(42,26,69,0.24)', 'rgba(226,58,46,0.16)', 'rgba(21,154,156,0.16)'],
    leaf: 'var(--hornbill)',
    fly: '#f2a93b',
  },
  sepia: {
    mist: ['rgba(183,130,58,0.20)', 'rgba(120,80,40,0.16)', 'rgba(60,40,24,0.14)'],
    leaf: 'var(--sepia)',
    fly: '#e8cfa0',
  },
}

const LEAVES = [
  { left: '6%', dur: 30, delay: 0, size: 58, drift: 60, spin: 200, kind: 0, op: 0.22 },
  { left: '22%', dur: 38, delay: 6, size: 40, drift: -50, spin: -260, kind: 1, op: 0.16 },
  { left: '44%', dur: 26, delay: 12, size: 34, drift: 80, spin: 320, kind: 2, op: 0.18 },
  { left: '63%', dur: 42, delay: 3, size: 66, drift: -70, spin: 180, kind: 0, op: 0.2 },
  { left: '78%', dur: 34, delay: 15, size: 46, drift: 50, spin: -220, kind: 1, op: 0.15 },
  { left: '90%', dur: 30, delay: 9, size: 38, drift: -40, spin: 300, kind: 2, op: 0.18 },
]

const FLIES = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 53 + 17) % 100}%`,
  dur: 5 + (i % 5),
  delay: (i % 7) * 0.9,
  fx: `${((i % 3) - 1) * 18}px`,
  fy: `${-14 - (i % 4) * 6}px`,
}))

export default function Ambient({
  variant = 'forest',
  hornbill = false,
  leaves = true,
}: {
  variant?: Variant
  hornbill?: boolean
  leaves?: boolean
}) {
  const pal = PALETTES[variant]

  const mistBlobs = useMemo(
    () => [
      { bg: pal.mist[0], w: 620, top: '-8%', left: '-6%', dur: 30 },
      { bg: pal.mist[1], w: 520, top: '40%', left: '68%', dur: 38 },
      { bg: pal.mist[2], w: 460, top: '72%', left: '12%', dur: 34 },
    ],
    [pal],
  )

  return (
    <div className="ambient" aria-hidden>
      {mistBlobs.map((b, i) => (
        <div
          key={i}
          className="ambient__mist"
          style={
            {
              width: b.w,
              height: b.w,
              top: b.top,
              left: b.left,
              background: `radial-gradient(circle, ${b.bg} 0%, transparent 68%)`,
              '--mist-dur': `${b.dur}s`,
              animationDelay: `${i * -7}s`,
            } as React.CSSProperties
          }
        />
      ))}

      {leaves &&
        LEAVES.map((l, i) => {
          const Leaf = l.kind === 0 ? Monstera : l.kind === 1 ? Fern : Hibiscus
          return (
            <div
              key={i}
              className="drift-leaf"
              style={
                {
                  left: l.left,
                  width: l.size,
                  height: l.size,
                  color: pal.leaf,
                  '--leaf-dur': `${l.dur}s`,
                  '--leaf-delay': `${l.delay}s`,
                  '--leaf-drift': `${l.drift}px`,
                  '--leaf-spin': `${l.spin}deg`,
                  '--leaf-opacity': l.op,
                } as React.CSSProperties
              }
            >
              <Leaf style={{ width: '100%', height: '100%' }} />
            </div>
          )
        })}

      {FLIES.map((f, i) => (
        <span
          key={i}
          className="firefly"
          style={
            {
              left: f.left,
              top: f.top,
              '--fly-color': pal.fly,
              '--fly-dur': `${f.dur}s`,
              '--fly-delay': `${f.delay}s`,
              '--fx': f.fx,
              '--fy': f.fy,
            } as React.CSSProperties
          }
        />
      ))}

      {hornbill && (
        <div
          className="hornbill-fly"
          style={{ '--fly-path-dur': '24s' } as React.CSSProperties}
        >
          <svg viewBox="0 0 120 64" fill="currentColor" width="92">
            <path d="M2 40c9-3 18-5 27-4 6 .6 11 3 17 4 3-8 9-14 18-16 4-1 8-1 12 .5-2 1.4-4 2.4-6 3 3 .3 5 1.4 7 3-2 .8-4 1-6 .9 1.6 1.7 2.4 3.7 2.6 6 5-3.4 10-6.7 16-8.4 5-1.5 10-1.8 15-.7-4 2-8 4-11 7 4-.6 8-.4 12 .8-5 1.6-9 3.8-13 6.6 3 .2 6 1 8 2.6-6 1.2-12 1.3-18 .2-7-1.3-12-4.7-19-5.6-8-1-15 1.7-22 5.3-6 3-12 6.2-19 6.6-8 .5-16-1.7-22-6.9 1.2-1 2.5-1.9 3.8-2.6-6-.2-11-1.9-16-5.6z" />
          </svg>
        </div>
      )}
    </div>
  )
}
