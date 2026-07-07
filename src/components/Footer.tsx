import { SocialIcon, Waves } from './Shapes'
import { SOCIALS, CONTACT } from '../lib/site'
import { asset } from '../lib/assets'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__inner">
          <div className="footer__brand">
            <img src={asset('home/assets/borneo-explorer-logo.png')} alt="Borneo Exploration logo" />
            <h3>Borneo Exploration</h3>
            <p>
              Tours &amp; Travel Sdn Bhd — crafting journeys through the Land of the Hornbills and
              across the seven seas since 1991.
            </p>
            <Waves style={{ width: 120, color: 'var(--river)', opacity: 0.7 }} />
            <div className="footer__socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  className="footer__social"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                >
                  <SocialIcon name={s.name} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h4>Our Address</h4>
            <p>{CONTACT.address}</p>
            <a
              className="footer__map"
              href="https://www.google.com/maps/search/?api=1&query=Green+Heights+Commercial+Centre+Kuching+Sarawak"
              target="_blank"
              rel="noreferrer"
              aria-label="Find Borneo Exploration on Google Maps"
            >
              <span className="footer__map-grid" aria-hidden />
              <span className="footer__map-pin" aria-hidden />
              <span className="footer__map-label">Find us on Google Maps →</span>
            </a>
          </div>

          <div className="footer__col">
            <h4>Operating Hours</h4>
            {CONTACT.hours.map((h) => (
              <div className="row" key={h.day}>
                <strong>{h.day}</strong>
                {h.time}
              </div>
            ))}
          </div>

          <div className="footer__col">
            <h4>Contact Us</h4>
            <div className="row">
              <strong>Office</strong>
              <a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, '')}`}>{CONTACT.phone}</a>
            </div>
            {CONTACT.people.map((p) => (
              <div className="row" key={p.email}>
                <strong>{p.name}</strong>
                <a href={`mailto:${p.email}`}>{p.email}</a>
                <br />
                <a href={`tel:${p.phone.replace(/[^+\d]/g, '')}`}>{p.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bar">
        <span>{CONTACT.reg}</span>
        <span>Copyright © 2024 · Bumi Kenyalang</span>
      </div>
    </footer>
  )
}
