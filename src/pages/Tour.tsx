import { useState, type CSSProperties } from 'react'
import { asset } from '../lib/assets'
import { useReveal } from '../lib/useReveal'
import Ambient from '../components/Ambient'
import { ArrowRight, Compass, Waves, SocialIcon } from '../components/Shapes'
import './Tour.css'

const CONTINENTS = [
  { id: 'asia', label: 'Asia', img: 'series-group-tour/Asia.jpg', blurb: 'Temples at dawn, night markets and cities that never quite sleep.' },
  { id: 'europe', label: 'Europe', img: 'series-group-tour/europe.avif', blurb: 'Old-world capitals, storybook coastlines and a café on every corner.' },
  { id: 'africa', label: 'Africa', img: 'series-group-tour/africa.jpg', blurb: 'Wild savannahs, the thunder of great falls and skies full of stars.' },
  { id: 'americas', label: 'The Americas', img: 'series-group-tour/america.webp', blurb: 'From Andean peaks and Amazon green to the lights of Manhattan.' },
  { id: 'oceania', label: 'Australia & Oceania', img: 'series-group-tour/australia and oceania.jpg', blurb: 'Coral reefs, red deserts and the slow rhythm of island time.' },
]

const PILGRIMAGE = [1, 2, 3, 4, 5, 6, 7].map((n) => `pilgrimage-tour/pilgrimage-tour-${n}.png`)

const CRUISE_LOGOS = [
  { src: 'world-cruises-tour/disney cruise line logo.webp', alt: 'Disney Cruise Line' },
  { src: 'world-cruises-tour/resort world cruises logo.png', alt: 'Resorts World Cruises' },
  { src: 'world-cruises-tour/royal caribbean cruises logo.webp', alt: 'Royal Caribbean' },
  { src: 'world-cruises-tour/princess cruises logo.png', alt: 'Princess Cruises' },
]
const CRUISE_SHOTS = [
  'world-cruises-tour/world cruises tour 1.png',
  'world-cruises-tour/world cruises tour 2.png',
  'world-cruises-tour/world cruises tour 3.png',
  'world-cruises-tour/world cruises tour 4.png',
  'world-cruises-tour/world cruises tour 5.avif',
  'world-cruises-tour/world cruises tour 6.png',
]

const WHATSAPP = 'http://www.wasap.my/+60198888928'

export default function Tour() {
  const ref = useReveal<HTMLDivElement>()
  const [cont, setCont] = useState(0)
  const active = CONTINENTS[cont]

  return (
    <div className="tour" ref={ref}>
      <Ambient variant="ocean" leaves />

      {/* ---------------- HERO ---------------- */}
      <header className="tour-hero">
        <div className="tour-hero__bg">
          <img src={asset('series-group-tour/continents.avif')} alt="Destinations across the world" />
        </div>
        <div className="tour-hero__inner">
          <span className="eyebrow" style={{ color: 'var(--casque)' }}>Series Group · Pilgrimage · World Cruises</span>
          <h1 className="display-xl">
            One agency, <span className="accent">seven</span> continents.
          </h1>
          <p className="tour-hero__lead">
            Planning your next adventure? Our Series Group Tours span Asia, Africa, North and South
            America, Antarctica, Europe and Australia / Oceania. If planning the trip seems like more
            work than the holiday itself — you’ve come to the right place. Our travel executives are
            ready to serve you.
          </p>
          <nav className="tour-hero__jump">
            <a href="#continents">Series Group Tours</a>
            <a href="#pilgrimage">Pilgrimage Tours</a>
            <a href="#cruises">World Cruises</a>
          </nav>
        </div>
      </header>

      {/* ---------------- CONTINENTS ---------------- */}
      <section className="section continents" id="continents">
        <div className="container">
          <div className="sec-head center reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Series Group Tours</span>
            <h2 className="display-l">Pick a continent. We’ll handle the rest.</h2>
            <p className="lead mx-auto" style={{ textAlign: 'center' }}>
              Download our travel itineraries to learn more about your favourite destination — or let
              our professional executives make the reservations while you get on with relaxing.
            </p>
          </div>

          <div className="continents__stage reveal">
            {CONTINENTS.map((c) => (
              <img
                key={c.id}
                className={`continents__img ${c.id === active.id ? 'active' : ''}`}
                src={asset(c.img)}
                alt={c.label}
                loading="lazy"
              />
            ))}
            <div className="continents__cap">
              <div className="idx">Destination {String(cont + 1).padStart(2, '0')} / 05</div>
              <h3>{active.label}</h3>
              <p>{active.blurb}</p>
              <button className="btn btn--gold">Download Itinerary <ArrowRight /></button>
            </div>
          </div>

          <div className="continents__orbs">
            {CONTINENTS.map((c, i) => (
              <button
                key={c.id}
                className={`orb ${i === cont ? 'active' : ''}`}
                onClick={() => setCont(i)}
                onMouseEnter={() => setCont(i)}
                aria-label={`Show ${c.label}`}
              >
                <span className="orb__ring"><img src={asset(c.img)} alt="" /></span>
                <span className="orb__label">{c.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PILGRIMAGE ---------------- */}
      <section className="section pilg" id="pilgrimage">
        <div className="container">
          <div className="pilg__grid">
            <div className="pilg__poster reveal">
              <img src={asset('pilgrimage-tour/pilgrimage tour poster.avif')} alt="Pilgrimage tour" loading="lazy" />
            </div>
            <div className="pilg__copy reveal" style={{ '--reveal-delay': '90ms' } as CSSProperties}>
              <span className="eyebrow">Pilgrimage Tours · 2025 / 2026 / 2027</span>
              <h2 className="display-l">Embark on a sacred journey.</h2>
              <p>
                Experience a pilgrimage like never before with our carefully curated spiritual tours.
                Whether you seek peace, renewal or a deeper connection to your faith, we provide
                seamless travel experiences designed to enrich your soul and uplift your spirit.
              </p>
              <div className="pilg__years">
                <span className="pilg__year">2025</span>
                <span className="pilg__year">2026</span>
                <span className="pilg__year">2027</span>
              </div>
              <p className="pilg__note">📍 Reserve your pilgrimage with us today and travel with purpose.</p>
              <a className="btn btn--gold" href={WHATSAPP} target="_blank" rel="noreferrer">
                <SocialIcon name="whatsapp" /> Inquire on WhatsApp
              </a>
            </div>
          </div>

          <div className="pilg__gallery">
            {PILGRIMAGE.slice(0, 4).map((p, i) => (
              <div className="pilg__shot reveal" key={p} style={{ '--reveal-delay': `${i * 60}ms` } as CSSProperties}>
                <img src={asset(p)} alt={`Pilgrimage destination ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WORLD CRUISES ---------------- */}
      <section className="section wcruise" id="cruises">
        <div className="container">
          <div className="sec-head center reveal">
            <span className="eyebrow on-dark" style={{ justifyContent: 'center' }}>World Cruises Tours</span>
            <h2 className="display-l">Board the world’s most beloved ships.</h2>
            <p className="lead mx-auto" style={{ textAlign: 'center' }}>
              As Sarawak’s recognised cruise specialists, we sail you across the seven seas with the
              names travellers trust most. Choose your fleet — we’ll chart the course.
            </p>
          </div>
          <div className="wcruise__logos reveal">
            {CRUISE_LOGOS.map((l) => (
              <div className="wcruise__logo" key={l.alt}>
                <img src={asset(l.src)} alt={l.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <div className="wcruise__strip reveal">
          {CRUISE_SHOTS.map((s, i) => (
            <div className="wcruise__card" key={s}>
              <img src={asset(s)} alt={`Cruise ship ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
        <div className="container">
          <div className="wcruise__cta reveal">
            <Waves style={{ width: 160, color: 'rgba(255,255,255,0.4)', margin: '0 auto 1.5rem' }} />
            <a className="btn btn--gold" href={WHATSAPP} target="_blank" rel="noreferrer">
              Plan your cruise <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
