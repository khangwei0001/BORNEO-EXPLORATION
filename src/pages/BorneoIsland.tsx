import { useMemo, useRef, useState, type CSSProperties, type MouseEvent as ReactMouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { asset } from '../lib/assets'
import { useReveal } from '../lib/useReveal'
import Ambient from '../components/Ambient'
import { ArrowRight, BatikMotif, Hornbill } from '../components/Shapes'
import Typewriter from '../components/Typewriter'
import './BorneoIsland.css'

const CREATURES = [
  { img: 'animal - orang utan.png', name: 'Orangutan', tag: 'Pongo pygmaeus' },
  { img: 'animals - proboscis monkey.png', name: 'Proboscis Monkey', tag: 'Nasalis larvatus' },
  { img: 'animal - hornbill.avif', name: 'Rhinoceros Hornbill', tag: 'Buceros rhinoceros' },
  { img: 'animal - bearded pigs.png', name: 'Bearded Pig', tag: 'Sus barbatus' },
  { img: 'animal - irrawaddy dolphins.png', name: 'Irrawaddy Dolphin', tag: 'Orcaella brevirostris' },
]

type Cat = 'Nature & Wildlife' | 'City & River' | 'Heritage & Culture'
const PLACES: { id: string; name: string; img: string; cat: Cat }[] = [
  { id: 'bako', name: 'Bako National Park', img: 'places - bako national park.png', cat: 'Nature & Wildlife' },
  { id: 'semenggoh', name: 'Semenggoh Wildlife Centre', img: 'places - Semenggoh Wildlife Centre.avif', cat: 'Nature & Wildlife' },
  { id: 'blue-lake', name: 'Bau Blue Lake', img: 'places - bau blue lake.png', cat: 'Nature & Wildlife' },
  { id: 'bengoh', name: 'Bengoh Waterfall', img: 'places - bengoh waterfall.png', cat: 'Nature & Wildlife' },
  { id: 'clearwater', name: 'Clearwater Cave', img: 'places - clearwater cave.png', cat: 'Nature & Wildlife' },
  { id: 'kayak', name: 'Semadang Kayaking', img: 'places - semadan kayaking.png', cat: 'Nature & Wildlife' },
  { id: 'mangrove', name: 'Mangrove Wildlife Cruise', img: 'places - mangroove wildlife cruise.png', cat: 'Nature & Wildlife' },
  { id: 'waterfront', name: 'Kuching Waterfront', img: 'places - waterfront kuching.png', cat: 'City & River' },
  { id: 'darul-hana', name: 'Darul Hana Bridge', img: 'places - Darul Hana Bridge.png', cat: 'City & River' },
  { id: 'bazaar', name: 'Main Bazaar', img: 'places - main bazaar.png', cat: 'City & River' },
  { id: 'carpenter', name: 'Carpenter Street', img: 'places - carpenter street.png', cat: 'City & River' },
  { id: 'river-taxi', name: 'Sarawak River Taxi', img: 'places - river taxi.png', cat: 'City & River' },
  { id: 'cultural-village', name: 'Sarawak Cultural Village', img: 'places - sarawak cultural village.png', cat: 'Heritage & Culture' },
  { id: 'astana', name: 'The Astana', img: 'places - the astana.png', cat: 'Heritage & Culture' },
  { id: 'courthouse', name: 'Colonial Courthouse', img: 'places - colonial courthouse.png', cat: 'Heritage & Culture' },
  { id: 'museum', name: 'Chinese History Museum', img: 'places - chinese history museum.png', cat: 'Heritage & Culture' },
]

const TABS = ['All', 'Nature & Wildlife', 'City & River', 'Heritage & Culture'] as const

export default function BorneoIsland() {
  const ref = useReveal<HTMLDivElement>()
  const [tab, setTab] = useState<(typeof TABS)[number]>('All')
  const [activeId, setActiveId] = useState(PLACES[0].id)

  const filtered = useMemo(
    () => (tab === 'All' ? PLACES : PLACES.filter((p) => p.cat === tab)),
    [tab],
  )
  const active = PLACES.find((p) => p.id === activeId) ?? PLACES[0]

  const batikVars = {
    '--batik': `url(${asset('borneo-island/assets/background2.jpg')})`,
    '--batik-gold': `url(${asset('borneo-island/assets/background5.jpg')})`,
    '--floral': `url(${asset('borneo-island/assets/background4.jpg')})`,
    '--panel': `url(${asset('borneo-island/assets/background5.jpg')})`,
    // '--spirit': `url(${asset('borneo-island/assets/background6.webp')})`,
  } as CSSProperties

  // Cursor-reactive floral backdrop for the "Uncover the best of Sarawak" section.
  const exploreRef = useRef<HTMLElement>(null)
  const rafId = useRef<number | null>(null)

  const onExploreMove = (e: ReactMouseEvent<HTMLElement>) => {
    const el = exploreRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    if (rafId.current) cancelAnimationFrame(rafId.current)
    rafId.current = requestAnimationFrame(() => {
      el.style.setProperty('--mx', `${x.toFixed(2)}%`)
      el.style.setProperty('--my', `${y.toFixed(2)}%`)
      el.style.setProperty('--active', '1')
    })
  }
  const onExploreLeave = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current)
    exploreRef.current?.style.setProperty('--active', '0')
  }

  return (
    <div className="bi" ref={ref} style={batikVars}>
      <Ambient variant="batik" leaves />

      {/* ---------------- HERO / GATEWAY ---------------- */}
      <header className="bi-hero">
        <div className="bi-hero__bg">
          <img src={asset('places - sarawak cultural village.png')} alt="Sarawak Cultural Village" />
        </div>
        {/* <div className="bi-hero__batik" /> */}
        <div className="bi-hero__inner">
          <span className="eyebrow bi-hero__eyebrow hero-eyebrow">Sarawak · Sabah · Bumi Kenyalang</span>
          <h1 className="display-xl hero-title">
            Gateway to <span className="accent">Borneo</span>.
          </h1>
          <p className="bi-hero__lead">
            <Typewriter text="Discover the heart of Borneo through Sarawak and Sabah, where ancient rainforests, diverse cultures and extraordinary wildlife converge. From Sarawak’s enchanting traditions and hornbill-filled skies to Sabah’s majestic Mount Kinabalu and orangutan sanctuaries — this is your portal to adventure, nature and timeless heritage." />
          </p>
          <div className="bi-hero__actions">
            <Link to="/tour" className="btn btn--gold">Explore Tour Packages <ArrowRight /></Link>
            <a href="#explore" className="btn btn--ghost on-dark">See where to wander</a>
          </div>
          <div className="bi-hero__motifs">
            <BatikMotif />
            <span className="rule" />
            <Hornbill style={{ width: 64 }} color="var(--casque)" />
          </div>
        </div>
      </header>

      {/* ---------------- WILDLIFE ---------------- */}
      <section className="section wild" id="wildlife">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Creatures of the Canopy</span>
            <h2 className="display-l">A living field guide.</h2>
            <p className="lead">
              Borneo shelters some of the rarest creatures on earth. Meet a few of the neighbours
              you might just cross paths with on your journey through the rainforest and river.
            </p>
          </div>
          <div className="wild__grid">
            {CREATURES.map((c, i) => (
              <article className="creature reveal" key={c.name} style={{ '--reveal-delay': `${i * 60}ms` } as CSSProperties}>
                <img src={asset(c.img)} alt={c.name} loading="lazy" />
                <div className="creature__meta">
                  <div className="name">{c.name}</div>
                  <div className="tag">{c.tag}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="batik-divider">
          <span className="line" />
          <BatikMotif />
          <span className="line" />
        </div>
      </section>

      {/* ---------------- FEATURE SWITCHER ---------------- */}
      <section
        className="section explore"
        id="explore"
        ref={exploreRef}
        onMouseMove={onExploreMove}
        onMouseLeave={onExploreLeave}
      >
        {/* Cursor-reactive traditional-floral backdrop */}
        <div className="explore__decor" aria-hidden="true">
          <div className="explore__spirit" />
          <div className="explore__panel" />
          <div className="explore__floral explore__floral--base" />
          <div className="explore__floral explore__floral--glow" />
          <div className="explore__veil" />
        </div>
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow on-dark">Recommended Tours</span>
            <h2 className="display-l">Uncover the best of Sarawak.</h2>
            <p className="lead">
              Curated journeys that blend breathtaking nature, rich heritage and unforgettable
              experiences. From spotting orangutans in the wild to exploring ancient caves, vibrant
              markets and traditional longhouses — every journey is a story waiting to be told.
            </p>
          </div>

          <div className="explore__grid reveal">
            <div>
              <div className="explore__tabs">
                {TABS.map((t) => (
                  <button
                    key={t}
                    className={`explore__tab ${tab === t ? 'active' : ''}`}
                    onClick={() => {
                      setTab(t)
                      const first = t === 'All' ? PLACES[0] : PLACES.find((p) => p.cat === t)!
                      setActiveId(first.id)
                    }}
                  >
                    {t === 'All' ? 'All' : t.split(' ')[0]}
                  </button>
                ))}
              </div>
              <div className="explore__list">
                {filtered.map((p, i) => (
                  <button
                    key={p.id}
                    className={`explore__item ${p.id === activeId ? 'active' : ''}`}
                    onMouseEnter={() => setActiveId(p.id)}
                    onFocus={() => setActiveId(p.id)}
                    onClick={() => setActiveId(p.id)}
                  >
                    <span className="idx">{String(i + 1).padStart(2, '0')}</span>
                    <span className="nm">{p.name}</span>
                    <span className="ct">{p.cat.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="explore__stage">
              {PLACES.map((p) => (
                <img
                  key={p.id}
                  className={`explore__img ${p.id === activeId ? 'active' : ''}`}
                  src={asset(p.img)}
                  alt={p.name}
                  loading="lazy"
                />
              ))}
              <div className="explore__cap">
                <div className="coord">{active.cat} · Sarawak, Borneo</div>
                <div className="place">{active.name}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CLOSING CULTURAL BAND ---------------- */}
      <section className="section bi-cta grain">
        <div className="container bi-cta__grid">
          <div className="bi-cta__img reveal">
            <img src={asset('delicacy - kek lapis.png')} alt="Sarawak layer cake — kek lapis" loading="lazy" />
          </div>
          <div className="reveal" style={{ '--reveal-delay': '90ms' } as CSSProperties}>
            <span className="eyebrow on-dark">Taste · Craft · Celebration</span>
            <h2 className="display-l" style={{ margin: '1rem 0 0' }}>More than a destination — a feeling.</h2>
            <p>
              Layered kek lapis and unusual delicacies, hand-woven pua kumbu, and festivals that
              light up the year. Sarawak rewards the curious traveller at every turn. Tell us what
              moves you and we’ll weave it into your journey.
            </p>
            <div className="bi-cta__chips">
              {['Rainforest World Music Festival', 'Gawai Dayak', 'Kek Lapis', 'Pua Kumbu Weaving'].map((c) => (
                <span className="bi-cta__chip" key={c}>{c}</span>
              ))}
            </div>
            <Link to="/tour" className="btn btn--gold">More on our Tour Packages <ArrowRight /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
