import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-section__grain" aria-hidden="true" />
      <div className="hero-section__bg" aria-hidden="true" />

      <div className="hero">
        <div className="hero__content">
          <div className="hero__tag reveal">
            <span className="hero__dot"></span>
            Solutions digitales · Marketing · Référencement
          </div>

          <h1 className="hero__title reveal reveal-delay-1">
            Votre croissance<br />
            <span className="hero__title--accent">digitale,</span><br />
            de A à Z.
          </h1>

          <p className="hero__subtitle reveal reveal-delay-2">
            Stratégie marketing, référencement naturel et solutions digitales B2B & B2C —
            une approche centrée sur vos métiers et vos utilisateurs.
          </p>

          <div className="hero__actions reveal reveal-delay-3">
            <a href="#contacts" className="btn btn--primary">Parlons de votre projet</a>
            <a href="#domaine" className="btn btn--ghost">Découvrir nos services</a>
          </div>

          <div className="hero__badges reveal reveal-delay-4">
            <div className="hero__badge">
              <span className="hero__badge-icon">✦</span>
              SEO & Référencement
            </div>
            <div className="hero__badge">
              <span className="hero__badge-icon">✦</span>
              Marketing digital
            </div>
            <div className="hero__badge">
              <span className="hero__badge-icon">✦</span>
              Produits sur-mesure
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
