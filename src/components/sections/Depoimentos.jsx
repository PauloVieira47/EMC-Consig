import { useCallback, useEffect, useState } from 'react'
import { depoimentos, depoimentosSection } from '@/constants/depoimentos'
import { useScrollRevealStagger } from '@/hooks/useScrollRevealStagger'
import Reveal from '@/components/ui/Reveal'

const AUTO_MS = 6000

function StarRating({ count }) {
  return (
    <div className="nn-depoimentos__stars" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`nn-depoimentos__star${i < count ? ' is-filled' : ''}`}
          viewBox="0 0 20 20"
          width="15"
          height="15"
          aria-hidden="true"
        >
          <path d="M10 2.5l2.1 4.26 4.7.68-3.4 3.32.8 4.68L10 13.77l-4.2 2.21.8-4.68-3.4-3.32 4.7-.68L10 2.5z" />
        </svg>
      ))}
    </div>
  )
}

function DepoimentoCard({ item }) {
  return (
    <article className="nn-depoimentos__card">
      <div className="nn-depoimentos__card-top">
        <StarRating count={item.rating} />
        <span className="nn-depoimentos__product">{item.product}</span>
      </div>

      <blockquote className="nn-depoimentos__quote">
        <span className="nn-depoimentos__mark" aria-hidden="true">
          “
        </span>
        <p className="nn-depoimentos__text">{item.quote}</p>
      </blockquote>

      <footer className="nn-depoimentos__author">
        <span className="nn-depoimentos__avatar" aria-hidden="true">
          {item.initials}
        </span>
        <div className="nn-depoimentos__meta">
          <cite className="nn-depoimentos__name">{item.name}</cite>
          <span className="nn-depoimentos__role">{item.location}</span>
        </div>
      </footer>
    </article>
  )
}

export default function Depoimentos() {
  const sectionRef = useScrollRevealStagger()
  const { kicker, title, titleAccent, subtitle } = depoimentosSection
  const [offset, setOffset] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = depoimentos.length
  const current = depoimentos[offset]

  const goTo = useCallback(
    (index) => {
      setOffset((index + total) % total)
    },
    [total],
  )

  const goPrev = useCallback(() => {
    goTo(offset - 1)
  }, [goTo, offset])

  const goNext = useCallback(() => {
    goTo(offset + 1)
  }, [goTo, offset])

  useEffect(() => {
    if (paused) return undefined

    const id = window.setInterval(() => {
      setOffset((currentIndex) => (currentIndex + 1) % total)
    }, AUTO_MS)

    return () => window.clearInterval(id)
  }, [paused, total])

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goPrev()
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goNext()
    }
  }

  return (
    <section
      ref={sectionRef}
      className="nn-depoimentos"
      id="depoimentos"
      aria-labelledby="nn-depoimentos-titulo"
    >
      <div className="container">
        <Reveal as="header" index={0} className="nn-depoimentos__head text-center">
          <p className="nn-depoimentos__kicker">{kicker}</p>
          <h2 id="nn-depoimentos-titulo" className="nn-depoimentos__title">
            {title} <span>{titleAccent}</span>
          </h2>
          <p className="nn-depoimentos__sub">{subtitle}</p>
        </Reveal>

        <Reveal as="div" index={1} className="nn-depoimentos__slider-wrap">
          <div
            className="nn-depoimentos__slider"
            tabIndex={0}
            role="region"
            aria-label="Carrossel de depoimentos"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
            onKeyDown={handleKeyDown}
          >
            <button
              type="button"
              className="nn-depoimentos__nav nn-depoimentos__nav--prev"
              aria-label="Depoimento anterior"
              onClick={goPrev}
            >
              <i className="arrow_left" aria-hidden="true" />
            </button>

            <div key={current.id} className="nn-depoimentos__stage" aria-live="polite">
              <DepoimentoCard item={current} />
            </div>

            <button
              type="button"
              className="nn-depoimentos__nav nn-depoimentos__nav--next"
              aria-label="Próximo depoimento"
              onClick={goNext}
            >
              <i className="arrow_right" aria-hidden="true" />
            </button>
          </div>

          <div className="nn-depoimentos__controls">
            <button
              type="button"
              className="nn-depoimentos__nav nn-depoimentos__nav--prev nn-depoimentos__nav--mobile"
              aria-label="Depoimento anterior"
              onClick={goPrev}
            >
              <i className="arrow_left" aria-hidden="true" />
            </button>

            <div className="nn-depoimentos__dots" role="tablist" aria-label="Depoimentos">
              {depoimentos.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  className={`nn-depoimentos__dot${index === offset ? ' is-active' : ''}`}
                  aria-selected={index === offset}
                  onClick={() => goTo(index)}
                >
                  <span className="visually-hidden">{item.name}</span>
                </button>
              ))}
            </div>

            <button
              type="button"
              className="nn-depoimentos__nav nn-depoimentos__nav--next nn-depoimentos__nav--mobile"
              aria-label="Próximo depoimento"
              onClick={goNext}
            >
              <i className="arrow_right" aria-hidden="true" />
            </button>

            <p className="nn-depoimentos__counter" aria-hidden="true">
              {String(offset + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
