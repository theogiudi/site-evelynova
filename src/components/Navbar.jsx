import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState('FR')
  const [menuOpen, setMenuOpen] = useState(false)

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
          <a href="#domaine" onClick={() => setMenuOpen(false)}>Domaines</a>
          <a href="#methode" onClick={() => setMenuOpen(false)}>Méthode</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#contacts" className="navbar__cta" onClick={() => setMenuOpen(false)}>Nous contacter</a>
          <div className="navbar__lang">
            <button className={lang === 'FR' ? 'active' : ''} onClick={() => setLang('FR')}>FR</button>
            <button className={lang === 'EN' ? 'active' : ''} onClick={() => setLang('EN')}>EN</button>
          </div>
        </div>

        <button className="navbar__burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}
