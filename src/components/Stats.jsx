import { useEffect, useRef, useState } from 'react'
import './Stats.css'

function Counter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const animate = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="stats" id="methode">
      <div className="container">
        <div className="stats__grid">
          <div className="stats__item reveal">
            <div className="stats__number">
              <Counter target={1} />
            </div>
            <div className="stats__label">Méthode</div>
          </div>
          <div className="stats__item reveal reveal-delay-1">
            <div className="stats__number">
              <Counter target={4} />
            </div>
            <div className="stats__label">Étapes</div>
          </div>
          <div className="stats__item reveal reveal-delay-2">
            <div className="stats__number">
              <Counter target={100} suffix="%" />
            </div>
            <div className="stats__label">Discrétion</div>
          </div>
          <div className="stats__item reveal reveal-delay-3">
            <div className="stats__number">
              <Counter target={3} suffix="x" />
            </div>
            <div className="stats__label">ROI moyen</div>
          </div>
        </div>

        <div className="stats__method reveal reveal-delay-1">
          <div className="stats__method-label">Notre méthode</div>
          <h2 className="stats__method-title">
            Une démarche itérative,<br />orientée valeur et simplicité d'usage.
          </h2>
          <p className="stats__method-sub">
            Comprendre &rarr; Cadrer &rarr; Prototyper &rarr; Déployer & améliorer.
          </p>
        </div>
      </div>
    </section>
  )
}
