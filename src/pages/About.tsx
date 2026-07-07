import { type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { asset } from '../lib/assets'
import { useReveal } from '../lib/useReveal'
import Ambient from '../components/Ambient'
import { Compass, ArrowRight, Hornbill } from '../components/Shapes'
import './About.css'

const TIMELINE = [
  {
    year: '1991',
    title: 'A Borneo beginning',
    body: 'Borneo Exploration Tours & Travel Sdn Bhd opens its doors — a travel agent and consultant devoted to the wonders of Borneo.',
  },
  {
    year: '2000',
    title: 'Hornbill Tourism Award',
    body: 'Recognised as one of the Top 3 Tour Operators in Sarawak for the Hornbill Tourism Award 2000.',
  },
  {
    year: '2001–02',
    title: 'Beyond Borneo',
    body: 'Genting–Resort World Berhad honours us as “Best Supporting East Malaysia Agent 2001” and “Top Achievers for East Malaysia Operator 2002”. We become the cruise specialists and ground-handling agent for MAS “Golden Holidays”, AirAsia’s “Jom Sarawak” and Transmile Air’s “Budget Holidays”.',
  },
  {
    year: '2009/10',
    title: 'Sarawak Hornbill Tourism Award',
    body: 'Awarded the Sarawak Hornbill Tourism Award 2009/2010 — recognition of two decades of outstanding service.',
  },
  {
    year: '2015/16',
    title: 'Awarded again',
    body: 'Honoured once more with the Sarawak Hornbill Tourism Award 2015/2016, and appointed ground handler for the international arrivals of major KL and Singapore wholesalers.',
  },
  {
    year: 'Today',
    title: 'Licensed & trusted',
    body: 'Licensed by MOTAC under KKKP No. 2213 for inbound, outbound and ticketing — proud members of IATA, MATTA, the Sarawak Tourist Federation and ASIA.',
  },
]

const AWARDS = [
  { img: 'about-us/assets/SARAWAK HORNBILL TOURISM AWARD.avif', ribbon: 'Sarawak Hornbill Tourism Award', title: 'Outstanding Inbound Tour Operators' },
  { img: 'about-us/assets/SARAWAK HORNBILL TOURISM AWARD2.avif', ribbon: 'Sarawak Hornbill Tourism Award', title: 'Most Outstanding DMC (Domestic)' },
  { img: 'about-us/assets/TOURISM AWARDS 2011-2012.avif', ribbon: 'Tourism Awards 2011/2012', title: 'Outstanding Inbound Tour Operators' },
  { img: 'about-us/assets/TOURISM AWARDS  2015-2016.avif', ribbon: 'Tourism Awards 2015/2016', title: 'Most Outstanding DMC (Domestic)' },
]

export default function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div className="about" ref={ref}>
      <Ambient variant="sepia" leaves={false} />

      {/* ---------------- HERO ---------------- */}
      <header className="ab-hero">
        <div className="ab-hero__bg">
          <img src={asset('about-us/assets/background2.jpg')} alt="Antique nautical map of the age of exploration" />
        </div>
        <div className="ab-hero__inner">
          <span className="eyebrow ab-hero__eyebrow">Our Story · Est. 1991</span>
          <h1 className="display-xl">
            Three decades of <span className="accent">exploration</span>.
          </h1>
          <p className="ab-hero__lead">
            From a small consultancy on the banks of the Sarawak River to a full-service travel house
            trusted across the seven seas — this is the voyage of Borneo Exploration.
          </p>
          <span className="ab-hero__est"><span className="rule" /> Kuching · Sarawak · East Malaysia</span>
        </div>
      </header>

      {/* ---------------- STORY / TIMELINE ---------------- */}
      <section className="story">
        <div className="container">
          <div className="ab-rule reveal"><span className="l" /><Compass /><span className="l r" /></div>
          <div className="story__intro reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>The Voyage So Far</span>
            <p className="lead story__lead-first">
              First established in 1991, Borneo Exploration Tours & Travel Sdn Bhd has operated for more
              than two decades — beginning as a travel agent and consultant around Borneo. After a
              decade, we expanded our services throughout the world, specialising in every kind of
              tourism service: local and adventure tours, air-ticketing, hotel booking, cruise
              holidays and much more. We are also known as the Cruise Specialist for cruise vacations.
            </p>
          </div>

          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <div className="tl-row reveal" key={t.year} style={{ '--reveal-delay': `${i * 40}ms` } as CSSProperties}>
                <div className="tl-year">{t.year}</div>
                <div className="tl-body">
                  <h3>{t.title}</h3>
                  <p>{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- AWARDS ---------------- */}
      <section className="awards">
        <div className="container">
          <div className="story__intro reveal" style={{ marginBottom: '1rem' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Awards & Appreciation</span>
            <h2 className="display-l">Honoured, again and again.</h2>
            <p className="lead" style={{ marginInline: 'auto' }}>
              A cabinet of recognitions earned over the years — for inbound operations and
              destination management across Sarawak.
            </p>
          </div>
          <div className="awards__grid">
            {AWARDS.map((a, i) => (
              <article className="medal reveal" key={a.title + i} style={{ '--reveal-delay': `${i * 60}ms` } as CSSProperties}>
                <div className="medal__ribbon">Winner</div>
                <div className="medal__img">
                  <img src={asset(a.img)} alt={a.ribbon} loading="lazy" />
                </div>
                <h3>{a.ribbon}</h3>
                <p>{a.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- MEMBERSHIPS ---------------- */}
      <section className="members">
        <div className="container">
          <div className="ab-rule reveal"><span className="l" /><Hornbill style={{ width: 54 }} color="var(--gold)" /><span className="l r" /></div>
          <div className="reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Accreditations & Memberships</span>
            <h2 className="display-l">In good company.</h2>
          </div>
          <div className="members__row reveal">
            <div className="members__badge"><img src={asset('about-us/assets/IATA.avif')} alt="IATA" loading="lazy" /></div>
            <div className="members__badge"><img src={asset('about-us/assets/MATTA.avif')} alt="MATTA" loading="lazy" /></div>
            <div className="members__badge"><img src={asset('about-us/assets/ASIA.avif')} alt="Association of Sarawak Inbound Agencies" loading="lazy" /></div>
            <div className="members__badge text">Sarawak Tourist<br />Federation</div>
          </div>
          <p className="members__note">
            Approved members of the International Air Transport Association (IATA) and the Malaysian
            Association of Tour &amp; Travel Agents (MATTA); members of the Sarawak Tourist Federation
            (STF) and the Association of Sarawak Inbound Agencies (ASIA).
          </p>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="ab-cta">
        <div className="container">
          <div className="ab-cta__card reveal">
            <h2 className="display-l">Let’s write your chapter next.</h2>
            <p>
              Three decades of local know-how and worldwide reach, at your service. Tell us where
              you’re dreaming of — we’ll take care of the rest.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/tour" className="btn btn--gold">Explore our tours <ArrowRight /></Link>
              <Link to="/" className="btn btn--ghost on-dark">Get in touch</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
