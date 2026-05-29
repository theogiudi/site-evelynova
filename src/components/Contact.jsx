import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const { t } = useLanguage()
  const c = t.contact

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', form)
    setSent(true)
  }

  return (
    <section className="contact" id="contacts">
      <div className="container">
        <div className="contact__header reveal">
          <span className="section-label">{c.label}</span>
          <h2 className="contact__title">
            <span className="contact__title--green">{c.titleGreen}</span> {c.titleRest}
          </h2>
          <p className="contact__sub">{c.sub}</p>
        </div>

        <div className="contact__inner">
          {sent ? (
            <div className="contact__success reveal">
              <div className="contact__success-icon">✓</div>
              <h3>{c.successTitle}</h3>
              <p>{c.successSub}</p>
            </div>
          ) : (
            <form className="contact__form reveal reveal-delay-1" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label htmlFor="nom">{c.labelNom}</label>
                <input id="nom" name="nom" type="text" placeholder={c.placeholderNom} value={form.nom} onChange={handleChange} required />
              </div>
              <div className="contact__field">
                <label htmlFor="email">{c.labelEmail}</label>
                <input id="email" name="email" type="email" placeholder="votre@email.com" value={form.email} onChange={handleChange} required />
              </div>
              <div className="contact__field">
                <label htmlFor="message">{c.labelMessage}</label>
                <textarea id="message" name="message" rows={5} placeholder={c.placeholderMessage} value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="contact__submit">
                {c.submit} <span>→</span>
              </button>
            </form>
          )}

          <div className="contact__info reveal reveal-delay-2">
            <div className="contact__info-item">
              <span className="contact__info-label">Email</span>
              <a href="mailto:admin@evelynova.com" className="contact__info-value">admin@evelynova.com</a>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-label">LinkedIn</span>
              <a href="https://www.linkedin.com/company/evelynova-corporation" target="_blank" rel="noopener noreferrer" className="contact__info-value">Evelynova</a>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-label">{c.infoDisponibilite}</span>
              <span className="contact__info-value contact__info-value--green">
                <span className="contact__dot"></span>
                {c.disponible}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
