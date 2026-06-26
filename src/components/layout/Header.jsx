import { useEffect, useState } from 'react'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { site } from '@/config/site'
import { navLinks } from '@/constants/navigation'
import { useActiveNav } from '@/hooks/useActiveNav'
import { useStickyHeader } from '@/hooks/useStickyHeader'

export default function Header() {
  const isScrolled = useStickyHeader()
  const { activeId, activate } = useActiveNav()
  const [menuOpen, setMenuOpen] = useState(false)
  const { assets, brand } = site

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 992) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const stickyClass = [
    'header-menu header-menu-2 nn-header--light-look',
    isScrolled ? 'navbar_fixed' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const closeMenu = (id) => {
    if (id) activate(id)
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className={stickyClass} id="sticky">
        <nav className="navbar navbar-expand-lg nn-navbar">
          <div className="container">
            <a className="navbar-brand" href="#/">
              <img
                className="navbar-brand-logo-emc"
                src={assets.logo}
                alt={brand.fullName}
                width="56"
                height="56"
                decoding="async"
              />
            </a>

            <button
              type="button"
              className={`navbar-toggler nn-navbar-toggler d-lg-none${menuOpen ? ' is-open' : ''}`}
              aria-controls="navbarSupportedContent"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="nn-navbar-toggler__bar" aria-hidden="true" />
            </button>

            <div
              className={`collapse navbar-collapse flex-lg-grow-1${menuOpen ? ' show' : ''}`}
              id="navbarSupportedContent"
            >
              <div className="nn-navbar__cluster d-flex flex-column flex-lg-row align-items-center justify-content-lg-center gap-3 mx-lg-auto py-2 py-lg-0 w-100">
                <ul className="navbar-nav menu nn-nav-simple mb-0 text-center text-lg-start">
                  {navLinks.map((link) => (
                    <li className="nav-item" key={link.id}>
                      <a
                        className={`nav-link${link.id === activeId ? ' active' : ''}`}
                        href={link.href}
                        aria-current={link.id === activeId ? 'page' : undefined}
                        onClick={() => closeMenu(link.id)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <ThemeToggle />
                <a
                  className="theme-btn nn-navbar__cta flex-shrink-0"
                  href="#solicitar-simulacao"
                  onClick={() => closeMenu('solicitar-simulacao')}
                >
                  Simular crédito
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
