import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Chevron } from './Shapes'
import { asset } from '../lib/assets'
import './Navbar.css'

type Child = { label: string; to: string }
type Item = { label: string; to: string; children?: Child[] }

const NAV: Item[] = [
  { label: 'Home', to: '/' },
  { label: 'Borneo Island', to: '/borneo-island' },
  { label: 'Tour', to: '/tour' },
  { label: 'Visa Center', to: '/visa-center' },
  { label: 'About Us', to: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [loc.pathname, loc.hash])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)
    return () => document.body.classList.remove('no-scroll')
  }, [open])

  return (
    <>
      <nav className={`nav ${scrolled || open ? 'is-scrolled' : ''}`}>
        <div className="nav__inner">
          <Link to="/" className="nav__brand" aria-label="Borneo Exploration — home">
            <img src={asset('home/assets/borneo-explorer-logo.png')} alt="Borneo Exploration hornbill logo" />
            <span className="nav__brand-text">
              <span className="nav__brand-name">Borneo Exploration</span>
              <span className="nav__brand-sub">Bumi Kenyalang · Est. 1991</span>
            </span>
          </Link>

          <ul className="nav__menu">
            {NAV.map((item) => (
              <li className="nav__item" key={item.label}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `nav__link ${isActive ? 'active' : ''}`}
                  end={item.to === '/'}
                >
                  {item.label}
                  {item.children && <Chevron className="chev" />}
                </NavLink>
                {item.children && (
                  <div className="nav__dropdown" role="menu">
                    {item.children.map((c) => (
                      <Link key={c.label} to={c.to} className="nav__drop-link" role="menuitem">
                        <span className="dot" />
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <Link to="/tour" className="btn nav__cta">
            Plan a Journey
          </Link>

          <button
            className={`nav__burger ${open ? 'open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`nav__sheet ${open ? 'open' : ''}`} role="dialog" aria-modal={open} aria-hidden={!open}>
        {NAV.map((item) => (
          <div key={item.label}>
            <Link to={item.to} className="nav__sheet-link">
              {item.label}
              <Chevron style={{ transform: 'rotate(-90deg)', opacity: 0.5 }} />
            </Link>
            {item.children && (
              <div className="nav__sheet-sub">
                {item.children.map((c) => (
                  <Link key={c.label} to={c.to}>
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
