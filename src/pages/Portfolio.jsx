import { useLanguage } from '../i18n/LanguageContext'
import useReveal from '../hooks/useReveal'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Portfolio.css'

// Ajouter les projets ici au fur et à mesure
// Structure : { id, title, category, tags: [], image: '/images/...', url: 'https://...' }
const portfolioItems = []

export default function Portfolio() {
  useReveal()
  const { t } = useLanguage()
  const p = t.portfolio

  return (
    <>
      <Navbar />
      <main className="portfolio-page">
        <header className="portfolio-hero">
          <div className="container">
            <span className="section-label portfolio-hero__label">{p.label}</span>
            <h1 className="portfolio-hero__title">{p.title}</h1>
            <p className="portfolio-hero__sub">{p.sub}</p>
          </div>
        </header>

        <section className="portfolio-work">
          <div className="container">
            {portfolioItems.length === 0 ? (
              <div className="portfolio-empty reveal">
                <span className="portfolio-empty__star">✦</span>
                <h2 className="portfolio-empty__title">{p.emptyTitle}</h2>
                <p className="portfolio-empty__text">{p.emptyText}</p>
                <a href="/#contacts" className="btn btn--primary">{p.emptyCta}</a>
              </div>
            ) : (
              <div className="portfolio-grid">
                {portfolioItems.map((item, i) => (
                  <article
                    key={item.id}
                    className={`portfolio-card reveal reveal-delay-${Math.min(i + 1, 4)}${i === 0 ? ' portfolio-card--featured' : ''}`}
                  >
                    <div className="portfolio-card__inner">
                      <img src={item.image} alt={item.title} className="portfolio-card__img" />
                      <div className="portfolio-card__overlay">
                        <span className="portfolio-card__category">{item.category}</span>
                        <h3 className="portfolio-card__title">{item.title}</h3>
                        <div className="portfolio-card__tags">
                          {item.tags.map(tag => (
                            <span key={tag} className="portfolio-card__tag">{tag}</span>
                          ))}
                        </div>
                        {item.url && (
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="portfolio-card__link">
                            {p.visitSite} ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
