import { Link } from 'react-router-dom'
import '../styles/globals.css'
import './LegalPage.css'

export default function MentionsLegales() {
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
          <h1 className="legal__title">Mentions légales</h1>

          <section className="legal__section">
            <h2>Éditeur du site</h2>
            <p><strong>Evelynova</strong><br />
            SASU au capital social fixe de 1 000,00 €<br />
            229 RUE SAINT-HONORÉ, 75001 PARIS<br />
            SIRET : 989 364 708 00010<br />
            Email : <a href="mailto:admin@evelynova.com">admin@evelynova.com</a></p>
          </section>

          <section className="legal__section">
            <h2>Hébergement</h2>
            <p><strong>Vercel Inc.</strong><br />
            340 Pine Street, Suite 801<br />
            San Francisco, CA 94104, États-Unis<br />
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></p>
          </section>

          <section className="legal__section">
            <h2>Propriété intellectuelle</h2>
            <p>L'ensemble des contenus présents sur ce site (textes, images, visuels) sont la propriété exclusive d'Evelynova et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
          </section>

          <section className="legal__section">
            <h2>Responsabilité</h2>
            <p>Evelynova s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Evelynova ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.</p>
          </section>
        </div>
      </main>
    </>
  )
}
