import { type CSSProperties } from 'react'
import { asset } from '../lib/assets'
import { useReveal } from '../lib/useReveal'
import Ambient from '../components/Ambient'
import { Compass, ArrowRight } from '../components/Shapes'
import Typewriter from '../components/Typewriter'
import './VisaCenter.css'

// Rotating rubber-stamp inks per card for that hand-stamped passport feel.
const INKS = ['#b4271f', '#0e6f70', '#2a1a45', '#0a7642', '#9a5a12']

const COUNTRIES = [
  { name: 'Australia', img: 'visa-center/assets/australia.avif', code: 'AUS', kind: 'eVisa' },
  { name: 'Bhutan', img: 'visa-center/assets/bhutan.avif', code: 'BTN', kind: 'Visa' },
  { name: 'Canada', img: 'visa-center/assets/canada.avif', code: 'CAN', kind: 'eTA' },
  { name: 'China', img: 'visa-center/assets/chinia.avif', code: 'CHN', kind: 'Visa' },
  { name: 'Colombia', img: 'visa-center/assets/colombia.avif', code: 'COL', kind: 'Visa' },
  { name: 'ETIAS · Europe', img: 'visa-center/assets/etias.avif', code: 'EUR', kind: 'ETIAS' },
  { name: 'India', img: 'visa-center/assets/india.avif', code: 'IND', kind: 'eVisa' },
  { name: 'Japan', img: 'visa-center/assets/japan.avif', code: 'JPN', kind: 'Visa' },
  { name: 'Myanmar', img: 'visa-center/assets/myanmar.avif', code: 'MMR', kind: 'eVisa' },
  { name: 'Nepal', img: 'visa-center/assets/nepal.avif', code: 'NPL', kind: 'Visa' },
  { name: 'Russia', img: 'visa-center/assets/russia.avif', code: 'RUS', kind: 'eVisa' },
  { name: 'South Korea', img: 'visa-center/assets/south korea.avif', code: 'KOR', kind: 'K-ETA' },
  { name: 'Taiwan', img: 'visa-center/assets/taiwan.avif', code: 'TWN', kind: 'Visa' },
  { name: 'United States', img: 'visa-center/assets/usa.avif', code: 'USA', kind: 'ESTA' },
]

export default function VisaCenter() {
  const ref = useReveal<HTMLDivElement>()
  const passportVar = { '--passport': `url(${asset('visa-center/assets/background.avif')})` } as CSSProperties

  return (
    <div className="visa" ref={ref} style={passportVar}>
      <div className="visa__texture" />
      <Ambient variant="sepia" leaves={false} />

      <div className="visa__inner">
        <header className="visa-hero">
          <div className="visa-hero__top">
            <div>
              <span className="eyebrow visa-hero__eyebrow hero-eyebrow">Visa Center · Passport to the World</span>
              <h1 className="display-xl hero-title">
                Get <span className="accent">stamped</span> for anywhere.
              </h1>
              <p className="visa-hero__lead">
                <Typewriter text="Entry rules change, paperwork tangles — we untangle it. Pick a destination below and we’ll guide your visa from application to approval, so all that’s left to pack is excitement." />
              </p>
            </div>
            <div className="visa-hero__seal">
              <Compass />
              <div>Approved Agent</div>
              <div>KKKP · 2213</div>
            </div>
          </div>
        </header>

        <div className="visa__grid">
          {COUNTRIES.map((c, i) => {
            const ink = INKS[i % INKS.length]
            const rot = ((i * 37) % 7) - 3
            return (
              <article
                className="stamp reveal"
                key={c.code}
                style={{ '--stamp-ink': ink, '--rot': `${rot}deg`, '--reveal-delay': `${(i % 6) * 45}ms` } as CSSProperties}
              >
                <div className="stamp__head">
                  <span className="stamp__code">NO. {c.code}-{String(2213 + i)}</span>
                  <span className="stamp__type">{c.kind}</span>
                </div>
                <div className="stamp__ring">
                  <img src={asset(c.img)} alt={`${c.name} visa`} loading="lazy" />
                </div>
                <div className="stamp__name">{c.name}</div>
                <div className="stamp__meta">Entry · Tourist · Business</div>
                <button className="stamp__apply">
                  Apply Now <ArrowRight color="currentColor" style={{ width: 15, height: 15 }} />
                </button>
              </article>
            )
          })}
        </div>

        <div className="visa__foot">
          <div className="visa__foot-card reveal">
            <div>
              <h3 className="display-m">Not sure what you need?</h3>
              <p>
                Licensed by MOTAC under KKKP No. 2213 for inbound, outbound and ticketing — our team
                will check requirements for your nationality and route, and handle the paperwork end
                to end.
              </p>
            </div>
            <a className="btn btn--gold" href="http://www.wasap.my/+60198888928/Visa" target="_blank" rel="noreferrer">
              Ask our visa team <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
