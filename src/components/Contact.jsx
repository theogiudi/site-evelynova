import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici tu brancheras ton service d'envoi (Resend, EmailJS, Formspree...)
    console.log('Form submitted:', form)
    setSent(true)
  }

  return (
    <section className="contact" id="contacts">
      <div className="container">
        <div className="contact__header reveal">
          <span className="section-label">Contact</span>
          <h2 className="contact__title">
            <span className="contact__title--green">Parlons</span> de votre besoin
          </h2>
          <p className="contact__sub">
            Échange rapide pour cadrer le contexte et définir les prochaines étapes.
          </p>
        </div>

        <div className="contact__inner">
          {sent ? (
            <div className="contact__success reveal">
              <div className="contact__success-icon">✓</div>
              <h3>Message envoyé !</h3>
              <p>On vous répond sous 24h.</p>
            </div>
          ) : (
            <form className="contact__form reveal reveal-delay-1" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label htmlFor="nom">Nom</label>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  placeholder="Votre nom ou société"
                  value={form.nom}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Présentez brièvement votre demande (contexte, objectif, délai)..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="contact__submit">
                Envoyer
                <span>→</span>
              </button>
            </form>
          )}

          <div className="contact__info reveal reveal-delay-2">
            <div className="contact__info-item">
              <span className="contact__info-label">Email</span>
              <a href="mailto:admin@evelynova.com" className="contact__info-value">
                admin@evelynova.com
              </a>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-label">LinkedIn</span>
              <a href="#" className="contact__info-value">Evelynova</a>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-label">Disponibilité</span>
              <span className="contact__info-value contact__info-value--green">
                <span className="contact__dot"></span>
                Disponible pour nouveaux projets
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
