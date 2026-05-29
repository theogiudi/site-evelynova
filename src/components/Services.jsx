import { useLanguage } from '../i18n/LanguageContext'
import './Services.css'

export default function Services() {
  const { t } = useLanguage()
  const s = t.services

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header reveal">
          <span className="section-label">{s.label}</span>
          <h2 className="services__title">
            {s.title.split('\n').map((line, i) => (
              <span key={i}>{line}{i < 1 && <br />}</span>
            ))}
          </h2>
          <p className="services__sub">{s.sub}</p>
        </div>

        <div className="services__grid">
          {s.items.map((item, i) => (
            <div key={item.num} className={`services__card reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="services__card-num">{item.num}</div>
              <h3 className="services__card-title">{item.title}</h3>
              <p className="services__card-desc">{item.desc}</p>
              <div className="services__card-tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="services__tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
