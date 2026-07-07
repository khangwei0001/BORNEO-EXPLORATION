import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { asset } from '../lib/assets'
import { useReveal } from '../lib/useReveal'
import { SOCIALS } from '../lib/site'
import Ambient from '../components/Ambient'
import Coverflow from '../components/Coverflow'
import {
  Search, SocialIcon, ArrowRight, Compass, Waves, Hornbill,
} from '../components/Shapes'
import './Home.css'

const VIDEOS = [
  { src: 'home/assets/greece.mp4', place: 'Greece', coord: '37°58′N 23°43′E' },
  { src: 'home/assets/south-africa.mp4', place: 'South Africa', coord: '33°55′S 18°25′E' },
  { src: 'home/assets/brazil.mp4', place: 'Brazil', coord: '22°54′S 43°12′W' },
  { src: 'home/assets/caucasus.mp4', place: 'Caucasus', coord: '42°18′N 43°21′E' },
]

const DESTINATIONS = [
  { img: 'home/assets/places1-Cappadocia.png', name: 'Cappadocia', country: 'Türkiye' },
  { img: 'home/assets/places2-Golden Bridge, Vietnam.png', name: 'Golden Bridge', country: 'Vietnam' },
  { img: 'home/assets/places4-Borobudur.png', name: 'Borobudur', country: 'Indonesia' },
  { img: 'home/assets/places5-Floating Market, Bangkok, Thailand.png', name: 'Floating Market', country: 'Bangkok, Thailand' },
  { img: 'home/assets/places7-Gyeongbokgung Palace, South Korea.png', name: 'Gyeongbokgung Palace', country: 'South Korea' },
  { img: 'home/assets/places6-Library of Celsus, Turkey.png', name: 'Library of Celsus', country: 'Türkiye' },
  { img: 'home/assets/places3-Marian Shrine, Indonesia.png', name: 'Marian Shrine', country: 'Indonesia' },
]

const POSTERS = [1, 2, 3, 4, 5].map((n) => `home/assets/promo-content-${n}.png`)

const SERVICES = [
  { title: 'Pilgrimage Tours', desc: 'Sacred journeys for peace, renewal and a deeper connection to your faith.', accent: 'var(--hornbill)' },
  { title: 'World Cruise Tours', desc: 'Sail the seven seas — we are Sarawak’s recognised cruise specialists.', accent: 'var(--river)' },
  { title: 'Ground Arrangement', desc: 'Handling agent for Golden Holidays, Jom Sarawak and major wholesalers.', accent: 'var(--kenyalang)' },
  { title: 'Visa Center', desc: 'Applications and documentation for destinations across the globe.', accent: 'var(--casque)' },
]

const CRUISES = [1, 2, 3, 4, 5].map((n) => ({
  src: asset(`home/assets/world-cruise-tour-${n}.png`),
  alt: `World cruise tour ${n}`,
}))

export default function Home() {
  const ref = useReveal<HTMLDivElement>()
  const [activeVideo, setActiveVideo] = useState(0)
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <div ref={ref}>
      <Ambient variant="forest" hornbill />

      {/* ---------------- HERO ---------------- */}
      <header className="hero">
        <div className="hero__bg">
          <img src={asset('home/assets/background1.avif')} alt="Rainforest canopy over Borneo" />
        </div>
        <svg className="hero__ribbon" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden>
          <path d="M-50 640 C 300 560, 520 760, 820 620 S 1300 460, 1520 600" fill="none" stroke="var(--hornbill)" strokeWidth="3" opacity="0.5" />
          <path d="M-50 690 C 320 620, 560 820, 860 680 S 1320 520, 1520 660" fill="none" stroke="var(--kenyalang)" strokeWidth="3" opacity="0.5" />
        </svg>
        <Hornbill className="hero__hornbill" color="var(--casque)" />

        <div className="hero__inner">
          <span className="eyebrow hero__eyebrow">01°33′N · 110°20′E · Kuching, Sarawak</span>
          <h1 className="display-xl">
            Chase the hornbill across <span className="accent">Borneo</span> &amp; beyond.
          </h1>
          <p className="hero__sub">Borneo Exploration · Tours &amp; Travel Sdn Bhd</p>
          <p className="hero__lead">
            Ancient rainforests, longhouses full of stories, and horizons that stretch to the
            seven seas. Since 1991 we’ve turned wanderlust into journeys worth remembering.
          </p>

          <form className="hero__search" onSubmit={(e) => e.preventDefault()} role="search">
            <Search />
            <input type="text" placeholder="Search a destination, tour or experience…" aria-label="Search destinations" />
            <button className="btn btn--gold" type="submit">
              Explore <ArrowRight />
            </button>
          </form>

          <div className="hero__socials">
            <span className="hero__socials-label">Our Social Media</span>
            <div className="hero__socials-list">
              {SOCIALS.map((s) => (
                <a key={s.name} className="hero__social" href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  <SocialIcon name={s.name} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hero__scrollcue">
          <span>Scroll</span>
          <span className="line" />
        </div>
      </header>

      {/* ---------------- PROMO VIDEOS ---------------- */}
      <section className="section promo grain">
        <div className="container promo__grid">
          <div className="promo__copy reveal">
            <span className="eyebrow on-dark">Section 01 — The World Awaits</span>
            <h2 className="display-l" style={{ marginTop: '1rem' }}>
              Discover the <span className="serif-italic" style={{ color: 'var(--casque)' }}>greatness</span> of this world.
            </h2>
            <p className="lead" style={{ marginTop: '1.2rem' }}>
              From beautiful sceneries and great landmarks to remarkable food and living legends —
              experience the history, stories and culture from all across the world with us.
            </p>
            <p className="lead">
              Walk the path of legends in Greece, feel the wild in South Africa, find your balance in
              South America and dance with the culture of the Caucasus. Borneo Exploration can make
              your dreams come true.
            </p>
            <div className="promo__tabs">
              {VIDEOS.map((v, i) => (
                <button
                  key={v.place}
                  className={`promo__tab ${i === activeVideo ? 'active' : ''}`}
                  onClick={() => setActiveVideo(i)}
                >
                  {v.place}
                </button>
              ))}
            </div>
          </div>

          <div className="promo__stage reveal" style={{ '--reveal-delay': '90ms' } as React.CSSProperties}>
            {VIDEOS.map((v, i) => (
              <video
                key={v.src}
                className={`promo__video ${i === activeVideo ? 'active' : ''}`}
                src={asset(v.src)}
                autoPlay muted loop playsInline
                preload={i === 0 ? 'auto' : 'metadata'}
              />
            ))}
            <div className="promo__caption">
              <div className="coord">{VIDEOS[activeVideo].coord}</div>
              <div className="place">{VIDEOS[activeVideo].place}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FEATURED DESTINATIONS ---------------- */}
      <section className="section dest">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Where will you wander?</span>
            <h2 className="display-l">A world of wonders, curated.</h2>
            <p className="lead">
              Seven horizons to start you dreaming. Slide through a handful of the places our
              travellers fall in love with — then let us build the journey around you.
            </p>
          </div>
        </div>
        <div className="dest__strip reveal">
          {DESTINATIONS.map((d, i) => (
            <article className="dest__card" key={d.name}>
              <img src={asset(d.img)} alt={`${d.name}, ${d.country}`} loading="lazy" />
              <div className="dest__meta">
                <div className="dest__num">Destination {String(i + 1).padStart(2, '0')}</div>
                <div className="dest__name">{d.name}</div>
                <div className="dest__country">{d.country}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="dest__hint">
          <span>Drag / scroll to explore</span>
          <span className="track" />
          <ArrowRight />
        </div>
      </section>

      {/* ---------------- TOUR PACKAGES (poster wall) ---------------- */}
      <section className="section posters">
        <div className="container">
          <div className="sec-head center reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Recommended Packages</span>
            <h2 className="display-l">Fresh off the noticeboard.</h2>
            <p className="lead mx-auto" style={{ textAlign: 'center' }}>
              Explore the beauty of the world with our recommended tour packages — stunning
              attractions, beautiful sceneries, and something for everyone. Got a dream? Make it
              happen. Explore, experience, fly and cruise with us around the entire world.
            </p>
          </div>
        </div>
        <div className="posters__rack reveal">
          {POSTERS.map((p, i) => (
            <div className="poster" key={p} style={{ '--tilt': `${(i % 2 ? 1 : -1) * (1 + (i % 3))}deg` } as React.CSSProperties}>
              <img src={asset(p)} alt={`Tour package promotion ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
        <div className="posters__hint">
          <span className="track" />
          <span>Current promotions · pinned fresh</span>
          <span className="track" />
        </div>
      </section>

      {/* ---------------- SARAWAK MORE TO DISCOVER ---------------- */}
      <section className="section sarawak" id="sarawak">
        <div className="container sarawak__grid">
          <div className="sarawak__img reveal">
            <span className="sarawak__badge">Land of the Hornbills</span>
            <img src={asset('home/assets/sarawak-more-to-discover.png')} alt="Sarawak scenery" loading="lazy" />
          </div>
          <div className="reveal" style={{ '--reveal-delay': '90ms' } as React.CSSProperties}>
            <span className="eyebrow">Sarawak · More to Discover</span>
            <h2 className="display-l" style={{ margin: '1rem 0 1.2rem' }}>
              There’s always one more adventure.
            </h2>
            <p className="lead">
              Discover and experience more of what Sarawak has to offer. From a ton of adventures to
              choose from and an abundance of breathtaking scenery, to a variety of delicious and
              unusual delicacies and unique festivals held every year — get in touch and we’ll book
              you an amazing trip.
            </p>
            <Link to="/borneo-island" className="btn" style={{ marginTop: '1.8rem' }}>
              Explore Borneo Island <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- WELCOME TO BORNEO ---------------- */}
      <section className="section welcome grain">
        <div className="container welcome__grid">
          <div className="welcome__map reveal">
            <img src={asset('home/assets/borneo-map.jpg')} alt="Topographic map of Borneo" loading="lazy" />
            <span className="coord-pin" />
            <Compass className="compass" />
          </div>
          <div className="reveal" style={{ '--reveal-delay': '90ms' } as React.CSSProperties}>
            <span className="eyebrow on-dark">Welcome to Borneo</span>
            <h2 className="display-l" style={{ margin: '1rem 0 1.2rem' }}>
              Bumi Kenyalang — the Land of the Hornbills.
            </h2>
            <p>
              Sarawak, one of Malaysia’s largest states on Borneo Island, is home to over 34 ethnic
              tribes speaking 45 dialects — each with its own stories, beliefs, traditions and
              cultures. Divided into 12 administrative divisions, it offers an authentic,
              off-the-beaten-path experience far from the usual tourist clichés.
            </p>
            <p>
              From UNESCO-listed Mulu and Niah, to Bako National Park and the Semenggoh Nature
              Reserve, Sarawak is a haven for nature lovers — and host to some of Malaysia’s most
              iconic festivals.
            </p>
            <div className="welcome__stats">
              <div className="welcome__stat"><div className="n">34+</div><div className="l">Ethnic tribes</div></div>
              <div className="welcome__stat"><div className="n">45</div><div className="l">Living dialects</div></div>
              <div className="welcome__stat"><div className="n">12</div><div className="l">Divisions</div></div>
            </div>
            <div className="welcome__fests">
              {['Rainforest World Music Festival', 'Borneo Jazz Festival', 'Rainforest Fringe Festival'].map((f) => (
                <span className="welcome__fest" key={f}>{f}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- OUR SERVICES ---------------- */}
      <section className="section">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Our Services · Travel Agents Do It Better</span>
            <h2 className="display-l">The team that makes booking a pleasure.</h2>
            <p className="lead">
              Everyone travels differently. Our people bring varied areas of expertise to every
              client’s needs — whether you’re planning for work or leisure, we make the booking
              process easy and enjoyable. Call us today and start travelling.
            </p>
          </div>
          <div className="services__grid">
            {SERVICES.map((s, i) => (
              <article className="service reveal" key={s.title} style={{ '--accent': s.accent, '--reveal-delay': `${i * 60}ms` } as React.CSSProperties}>
                <span className="service__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="service__icon"><Compass style={{ width: 26, height: 26 }} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- LET'S TRAVEL CTA ---------------- */}
      <section className="section cta">
        <div className="cta__bg">
          <img src={asset('home/assets/lets-travel-with-us.avif')} alt="Travel with us" loading="lazy" />
        </div>
        <div className="container cta__inner reveal">
          <p className="cta__sub">Let’s Travel With Us!</p>
          <h2 className="display-l">Travel the world, your way.</h2>
          <p className="lead mx-auto">
            At Borneo Exploration Tours &amp; Travel Sdn Bhd, we believe you deserve to see the world
            on your own terms. Explore our journeys and get in touch to turn your dream trip into
            reality.
          </p>
          <div className="cta__actions">
            <Link to="/tour" className="btn btn--gold">Plan a Journey <ArrowRight /></Link>
            <Link to="/about" className="btn btn--ghost on-dark">Our Story</Link>
          </div>
        </div>
      </section>

      {/* ---------------- WORLD CRUISE ---------------- */}
      <section className="section cruise" id="cruises">
        <div className="container">
          <div className="sec-head center reveal">
            <span className="eyebrow on-dark" style={{ justifyContent: 'center' }}>World Cruise Tours</span>
            <h2 className="display-l">Sail the seven seas.</h2>
            <p className="lead mx-auto" style={{ textAlign: 'center' }}>
              Dreams come true aboard an exquisite cruise across the world. Explore lively cities,
              intriguing landscapes and astounding cultures while sailing — a thrill not to be
              missed. Get in touch to arrange an amazing journey.
            </p>
          </div>
          <Coverflow items={CRUISES} fg="#ffffff" />
          <Waves className="cruise__wave" />
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section className="section contact grain" id="contact">
        <div className="container contact__grid">
          <div className="reveal">
            <span className="eyebrow on-dark">Got a question?</span>
            <h2 className="display-l" style={{ margin: '1rem 0 0' }}>Send us a message.</h2>
            <p className="contact__lead lead">
              Tell us where you’re dreaming of — our travel executives will help shape the trip
              around you. We usually reply within one working day.
            </p>
            <div className="contact__side" style={{ marginTop: '2rem' }}>
              <div className="contact__card">
                <h4>Talk to a human</h4>
                <p>Chris · <a href="mailto:chris@borneoexplorer.com.my">chris@borneoexplorer.com.my</a></p>
                <p>Celine · <a href="mailto:celine@borneoexplorer.com.my">celine@borneoexplorer.com.my</a></p>
              </div>
            </div>
          </div>

          <form className="contact__form reveal" onSubmit={onSubmit} style={{ '--reveal-delay': '90ms' } as React.CSSProperties}>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" required placeholder="you@example.com" />
            </div>
            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" required placeholder="A pilgrimage tour for two…" />
            </div>
            <div className="field">
              <label htmlFor="message">Your message</label>
              <textarea id="message" required placeholder="Tell us your dates, budget and what you’d love to see." />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn btn--gold" type="submit">Send message <ArrowRight /></button>
              <span className={`contact__sent ${sent ? 'show' : ''}`}>
                ✓ Thank you — we’ll be in touch shortly.
              </span>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
