import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main className="page__main" id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
