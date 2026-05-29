import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img src="/Logo_Blanc.svg" alt="Evelynova" height="24" />
            </Link>
            <p className="footer__tagline">
              Solutions digitales · Marketing · Référencement
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <span className="footer__col-title">Liens</span>
              <Link to="/mentions-legales">Mentions légales</Link>
              <Link to="/politique-confidentialite">Politique de confidentialité</Link>
              <a href="https://www.linkedin.com/company/evelynova-corporation" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="footer__col">
              <span className="footer__col-title">Contact</span>
              <a href="mailto:admin@evelynova.com">admin@evelynova.com</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Evelynova. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  )
}
