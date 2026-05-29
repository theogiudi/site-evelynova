import { Link } from 'react-router-dom'
import '../styles/globals.css'
import './LegalPage.css'

export default function PolitiqueConfidentialite() {
  return (
    <>
      <div className="legal-nav">
        <Link to="/" className="legal-nav__back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
          Retour
        </Link>
        <img src="/Logo_Noir.svg" alt="Evelynova" height="22" />
      </div>

      <main className="legal">
        <div className="legal__container">
          <h1 className="legal__title">Politique de confidentialité</h1>

          <section className="legal__section">
            <h2>Données collectées</h2>
            <p>Dans le cadre de l'utilisation de ce site, Evelynova peut collecter les informations suivantes via le formulaire de contact : nom, adresse email, contenu du message. Ces données sont utilisées uniquement pour répondre à vos demandes.</p>
          </section>

          <section className="legal__section">
            <h2>Finalité du traitement</h2>
            <p>Les données collectées sont traitées dans le seul but de vous répondre et de gérer la relation commerciale. Elles ne sont pas transmises à des tiers.</p>
          </section>

          <section className="legal__section">
            <h2>Durée de conservation</h2>
            <p>Les données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact.</p>
          </section>

          <section className="legal__section">
            <h2>Vos droits</h2>
            <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données. Pour exercer ces droits, contactez-nous à : <a href="mailto:admin@evelynova.com">admin@evelynova.com</a></p>
          </section>

          <section className="legal__section">
            <h2>Cookies</h2>
            <p>Ce site n'utilise pas de cookies de suivi ou de publicité. Aucune donnée de navigation n'est collectée à des fins analytiques ou commerciales.</p>
          </section>
        </div>
      </main>
    </>
  )
}
