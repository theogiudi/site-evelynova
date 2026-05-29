import './Confidentiality.css'

export default function Confidentiality() {
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
            <span className="section-label">Discrétion & confidentialité</span>
            <h2 className="confid__title">
              Références sur demande<br />
              <span className="confid__title--gray">(NDA possible)</span>
            </h2>
            <p className="confid__text">
              Les informations sur nos projets et nos références sont partagées uniquement sur demande.
              Si nécessaire, nous pouvons signer un accord de confidentialité (NDA) avant tout échange.
            </p>
            <a href="#contacts" className="btn btn--primary">Demander des références</a>
          </div>

          <div className="confid__visual">
            <div className="confid__card">
              <svg className="confid__card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span className="confid__card-label">NDA disponible</span>
              <p className="confid__card-sub">Accord de confidentialité<br />signé avant tout échange</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
