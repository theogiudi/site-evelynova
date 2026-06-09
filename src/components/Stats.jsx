import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
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

const targets = [6, 4, 2, 24]
const suffixes = ['', '', '', 'h']

export default function Stats() {
  const { t } = useLanguage()
  const s = t.stats

  return (
    <section className="stats" id="methode">
      <div className="container">
        <div className="stats__grid">
          {s.items.map((item, i) => (
            <div key={i} className={`stats__item reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
              <div className="stats__number">
                <Counter target={targets[i]} suffix={suffixes[i]} />
              </div>
              <div className="stats__label">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="stats__method reveal reveal-delay-1">
          <div className="stats__method-label">{s.methodLabel}</div>
          <h2 className="stats__method-title">
            {s.methodTitle.split('\n').map((line, i) => (
              <span key={i}>{line}{i < 1 && <br />}</span>
            ))}
          </h2>
          <p className="stats__method-sub">{s.methodSub}</p>
        </div>
      </div>
    </section>
  )
}
