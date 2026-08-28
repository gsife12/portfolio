import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { RESUME_PATH } from '../../constants'

const navLinks = [
  { to: '/',             label: 'Home'       },
  { to: '/experience',   label: 'Experience' },
  { to: '/projects',     label: 'Projects'   },
  { to: '/skills',       label: 'Skills'     },
  { to: '/education',    label: 'Education'  },
]

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

export function Nav() {
  const { theme, toggle } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const activeLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'relative font-sans text-sm font-medium transition-colors duration-150 no-underline',
      isActive
        ? 'text-gs-blue after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-gs-blue'
        : 'text-gs-t2 hover:text-gs-t1',
    ].join(' ')

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gs-border/50 bg-gs-bg/90 backdrop-blur-sm">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <NavLink
            to="/"
            className="font-display text-xl text-gs-t1 no-underline transition-opacity hover:opacity-80"
            aria-label="Gideon Sife — home"
          >
            GS
          </NavLink>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex" role="list">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={activeLinkClass} end={to === '/'}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Theme toggle — always visible */}
            <button
              onClick={toggle}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              className="flex h-9 w-9 items-center justify-center rounded-md text-gs-t2 transition-colors hover:bg-gs-border/20 hover:text-gs-t1"
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>

            {/* Résumé — desktop only */}
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-md border border-gs-blue px-4 py-1.5 font-sans text-sm font-medium text-gs-blue no-underline transition-colors hover:bg-gs-blue hover:text-white md:inline-flex"
            >
              Résumé
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="flex h-9 w-9 items-center justify-center rounded-md text-gs-t2 transition-colors hover:bg-gs-border/20 hover:text-gs-t1 md:hidden"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={[
          'fixed right-0 top-0 z-40 flex h-full w-72 flex-col border-l border-gs-border bg-gs-surface px-6 py-8 shadow-xl',
          'transition-transform duration-300 ease-smooth md:hidden',
          mobileOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="font-display text-xl text-gs-t1">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-md text-gs-t2 hover:text-gs-t1"
          >
            <CloseIcon />
          </button>
        </div>

        <ul className="flex flex-col gap-1" role="list">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  [
                    'block rounded-md px-3 py-2.5 font-sans text-base font-medium no-underline transition-colors',
                    isActive
                      ? 'bg-gs-blue/10 text-gs-blue'
                      : 'text-gs-t2 hover:bg-gs-border/10 hover:text-gs-t1',
                  ].join(' ')
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-gs-border pt-6">
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-md border border-gs-blue px-4 py-2.5 text-center font-sans text-sm font-medium text-gs-blue no-underline transition-colors hover:bg-gs-blue hover:text-white"
          >
            View Résumé
          </a>
        </div>
      </div>
    </>
  )
}
