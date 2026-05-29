import { useLanguage } from '../i18n/LanguageContext'
import './Hero.css'

export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className="hero-section">
      <div className="hero-section__grain" aria-hidden="true" />
      <div className="hero-section__bg" aria-hidden="true" />

      <div className="hero">
        <div className="hero__content">
          <div className="hero__tag reveal">
            <span className="hero__dot"></span>
            {h.tag}
          </div>

          <h1 className="hero__title reveal reveal-delay-1">
            {h.title1}<br />
            <span className="hero__title--accent">{h.title2}</span><br />
            {h.title3}
          </h1>

          <p className="hero__subtitle reveal reveal-delay-2">{h.subtitle}</p>

          <div className="hero__actions reveal reveal-delay-3">
            <a href="#contacts" className="btn btn--primary">{h.btn1}</a>
            <a href="#domaine" className="btn btn--ghost">{h.btn2}</a>
          </div>

          <div className="hero__badges reveal reveal-delay-4">
            <div className="hero__badge"><span className="hero__badge-icon">✦</span>{h.badge1}</div>
            <div className="hero__badge"><span className="hero__badge-icon">✦</span>{h.badge2}</div>
            <div className="hero__badge"><span className="hero__badge-icon">✦</span>{h.badge3}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
