import './Services.css'

const services = [
  {
    num: '01',
    title: 'SEO & Référencement naturel',
    desc: 'Stratégie de contenu, optimisation technique, netlinking — positionnez-vous durablement sur Google et générez du trafic qualifié.',
    tags: ['Audit SEO', 'On-page', 'Netlinking', 'Contenu'],
  },
  {
    num: '02',
    title: 'Marketing digital',
    desc: 'Campagnes Google Ads, réseaux sociaux, emailing — une stratégie multicanal orientée conversion et ROI mesurable.',
    tags: ['Google Ads', 'Social Ads', 'Email', 'Analytics'],
  },
  {
    num: '03',
    title: 'Applications web & mobile',
    desc: 'Conception et développement de produits digitaux sur-mesure : interfaces claires, architectures solides, expériences fluides.',
    tags: ['React', 'Mobile', 'UX/UI', 'API'],
  },
  {
    num: '04',
    title: 'Portails & dashboards',
    desc: 'Espaces de gestion métier, tableaux de bord analytiques, portails clients — adaptés à vos processus internes.',
    tags: ['B2B', 'Data viz', 'Personnalisé'],
  },
  {
    num: '05',
    title: 'Digitalisation & automatisation',
    desc: 'Transformation de vos processus métier en flux digitaux efficaces, avec intégrations et automatisations sur-mesure.',
    tags: ['Workflow', 'Intégrations', 'No-code', 'API'],
  },
  {
    num: '06',
    title: 'Stratégie & conseil',
    desc: 'Cadrage, audit, feuille de route produit — un regard externe expert pour aligner vision business et exécution digitale.',
    tags: ['Audit', 'Roadmap', 'Conseil'],
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header reveal">
          <span className="section-label">Nos services</span>
          <h2 className="services__title">
            Nous intervenons dans des<br />contextes variés.
          </h2>
          <p className="services__sub">
            En adaptant la solution au métier, aux contraintes et aux utilisateurs.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`services__card reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className="services__card-num">{s.num}</div>
              <h3 className="services__card-title">{s.title}</h3>
              <p className="services__card-desc">{s.desc}</p>
              <div className="services__card-tags">
                {s.tags.map((t) => (
                  <span key={t} className="services__tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
