import { useLanguage } from '../i18n/LanguageContext'
import './Approach.css'

const cardImgs = [
  'https://framerusercontent.com/images/wwonRy6qyjAK6Kr68jA50W244I8.png',
  'https://framerusercontent.com/images/Z7x2ZctumeLJz05aYhx7srdVb0.png',
  'https://framerusercontent.com/images/rJbleMiN9xYgwxGiguh1IhR0Tg.png',
]

export default function Approach() {
  const { t } = useLanguage()
  const a = t.approach

  return (
    <section className="approach" id="domaine">
      <div className="container">
        <div className="approach__header reveal">
          <span className="section-label">{a.label}</span>
          <h2 className="approach__title">{a.title.split('\n').map((line, i) => (
            <span key={i}>{line}{i < 1 && <br />}</span>
          ))}</h2>
          <p className="approach__sub">{a.sub}</p>
        </div>

        <div className="approach__cards">
          {a.cards.map((card, i) => (
            <div key={i} className={`approach__card reveal reveal-delay-${i + 1}`}>
              <img src={cardImgs[i]} alt={card.title} className="approach__card-img" />
              <div className="approach__card-overlay">
                <span className="approach__card-tag">{card.tag}</span>
                <h3 className="approach__card-title">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="approach__icons reveal reveal-delay-1">
          <div className="approach__icon-item">
            <svg className="approach__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
            </svg>
            <span className="approach__icon-label">{a.icons[0]}</span>
          </div>
          <div className="approach__icon-item">
            <svg className="approach__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/>
            </svg>
            <span className="approach__icon-label">{a.icons[1]}</span>
          </div>
          <div className="approach__icon-item">
            <svg className="approach__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span className="approach__icon-label">{a.icons[2]}</span>
          </div>
          <div className="approach__icon-item">
            <svg className="approach__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span className="approach__icon-label">{a.icons[3]}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
