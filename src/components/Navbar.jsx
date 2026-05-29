import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">
          <img
            src={scrolled ? '/Logo_Noir.svg' : '/Logo_Blanc.svg'}
            alt="Evelynova"
            height="26"
            className="navbar__logo-img"
          />
        </a>

        <div className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          <a href="#domaine" onClick={() => setMenuOpen(false)}>{t.nav.domaines}</a>
          <a href="#methode" onClick={() => setMenuOpen(false)}>{t.nav.methode}</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>{t.nav.services}</a>
          <a href="#contacts" className="navbar__cta" onClick={() => setMenuOpen(false)}>{t.nav.cta}</a>
          <div className="navbar__lang">
            <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>FR</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
        </div>

        <button className="navbar__burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}
