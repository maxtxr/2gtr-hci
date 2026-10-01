import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import Icon from './Icons.jsx'
import site from '../data/site.js'

const linkClass = ({ isActive }) => 'nav-link' + (isActive ? ' is-active' : '')

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <NavLink to="/" className="brand">
          <span className="brand__mark" aria-hidden="true">
            <Logo size={30} />
          </span>
          <span>
            {site.name}
            <span className="brand__sub">HCI project</span>
          </span>
        </NavLink>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
        </button>

        <nav
          id="primary-nav"
          className={'site-nav' + (menuOpen ? ' is-open' : '')}
          aria-label="Primary"
        >
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/project" className={linkClass}>
            The product
          </NavLink>

          <NavLink to="/stages" className={linkClass}>
            Stages
          </NavLink>

          <NavLink to="/assignments" className={linkClass}>
            Assignments
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
