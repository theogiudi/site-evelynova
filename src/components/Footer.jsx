import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()
  const f = t.footer

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img src="/Logo_Blanc.svg" alt="Evelynova" height="24" />
            </Link>
            <p className="footer__tagline">{f.tagline}</p>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <span className="footer__col-title">{f.colLinks}</span>
              <Link to="/mentions-legales">{f.mentions}</Link>
              <Link to="/politique-confidentialite">{f.politique}</Link>
              <a href="https://www.linkedin.com/company/evelynova-corporation" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="footer__col">
              <span className="footer__col-title">{f.colContact}</span>
              <a href="mailto:admin@evelynova.com">admin@evelynova.com</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Evelynova. {f.copyright}</span>
        </div>
      </div>
    </footer>
  )
}
