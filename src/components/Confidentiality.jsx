import { useLanguage } from '../i18n/LanguageContext'
import './Confidentiality.css'

export default function Confidentiality() {
  const { t } = useLanguage()
  const c = t.confidentiality

  return (
    <section className="confid">
      <div className="container">
        <div className="confid__inner reveal">
          <div className="confid__shapes">
            <span className="confid__shape confid__shape--sq"></span>
            <span className="confid__shape confid__shape--ci"></span>
            <span className="confid__shape confid__shape--tr"></span>
          </div>

          <div className="confid__content">
            <span className="section-label">{c.label}</span>
            <h2 className="confid__title">
              {c.title}
              {c.titleGray && <><br /><span className="confid__title--gray">{c.titleGray}</span></>}
            </h2>
            <p className="confid__text">{c.text}</p>
            <a href="#contacts" className="btn btn--primary">{c.btn}</a>
          </div>

          <div className="confid__visual">
            <div className="confid__card">
              <svg className="confid__card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span className="confid__card-label">{c.cardLabel}</span>
              <p className="confid__card-sub">{c.cardSub.split('\n').map((line, i) => (
                <span key={i}>{line}{i < 1 && <br />}</span>
              ))}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
