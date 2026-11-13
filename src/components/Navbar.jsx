import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import { profile, themes } from '../data/portfolioData'

const navLinks = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Certificates', '#certificates'],
  ['Education', '#education'],
  ['Contact', '#contact'],
]

export default function Navbar({ activeTheme, onThemeChange, onResume }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [themesOpen, setThemesOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const sections = navLinks.map(([, href]) => document.querySelector(href)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, .15, .4] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setThemesOpen(false)
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${profile.name} home`}>
        <span className="brand-mark">GD</span>
        <span className="brand-lockup"><strong>A. GOWRI DEVI</strong><small>DEVELOPER · PORTFOLIO</small></span>
      </a>
      <button type="button" className="mobile-menu-toggle icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
        {menuOpen ? <X size={19} /> : <Menu size={19} />}
      </button>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        {navLinks.map(([label, href]) => {
          const section = href.slice(1)
          return <a key={href} href={href} className={activeSection === section ? 'is-active' : ''} aria-current={activeSection === section ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>
        })}
      </nav>
      <div className={`header-actions ${menuOpen ? 'is-open' : ''}`}>
        <div className="theme-picker-wrap">
          <button type="button" className="theme-picker" onClick={() => setThemesOpen(!themesOpen)} aria-expanded={themesOpen} aria-label="Change accent theme">
            <span className="theme-dot" style={{ backgroundColor: themes.find((theme) => theme.id === activeTheme)?.color }} /><ChevronDown size={13} />
          </button>
          {themesOpen && <div className="theme-menu">
            <span className="theme-menu-heading">ACCENT COLOR</span>
            {themes.map((theme) => <button type="button" key={theme.id} onClick={() => { onThemeChange(theme.id); setThemesOpen(false) }}><span className="theme-dot" style={{ backgroundColor: theme.color }} />{theme.name}{activeTheme === theme.id && <span className="theme-selected">Active</span>}</button>)}
          </div>}
        </div>
        <button type="button" className="button button-ink nav-resume" onClick={() => { onResume(); setMenuOpen(false) }}>View Resume <ArrowUpRight size={16} /></button>
      </div>
    </header>
  )
}
