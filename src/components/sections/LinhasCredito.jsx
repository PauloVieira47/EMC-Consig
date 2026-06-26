import { linhasCredito, linhasCreditoSection } from '@/constants/linhasCredito'
import { useScrollRevealStagger } from '@/hooks/useScrollRevealStagger'
import Reveal from '@/components/ui/Reveal'

function ProdutoCard({ linha }) {
  return (
    <article className="nn-story-panel nn-produto-card w-100">
      {linha.badge ? <span className="nn-produto-badge">{linha.badge}</span> : null}
      <h3 className="nn-story-panel__title">
        {linha.title} <span>{linha.highlight}</span>
      </h3>
      <p className="nn-story-panel__lead">{linha.lead}</p>
      <ul className="nn-story-checks list-unstyled mb-0">
        {linha.checks.map((item) => (
          <li key={item}>
            <i className="icon_check_alt" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function LinhasCredito() {
  const sectionRef = useScrollRevealStagger()
  const { kicker, title, titleAccent, subtitle } = linhasCreditoSection
  const mainRow = linhasCredito.slice(0, 3)
  const lastRow = linhasCredito.slice(3)

  return (
    <section
      ref={sectionRef}
      className="nn-linhas-credito pt-90 pb-90"
      id="linhas-credito"
      aria-labelledby="nn-linhas-titulo"
    >
      <div className="container">
        <Reveal as="header" index={0} className="nn-linhas-credito__top text-center nn-story-head">
          <p className="nn-story-kicker" id="nn-linhas-kicker">
            {kicker}
          </p>
          <h2 id="nn-linhas-titulo">
            {title} <span>{titleAccent}</span>
          </h2>
          <p className="nn-story-sub">{subtitle}</p>
        </Reveal>

        <div className="nn-linhas-credito__grid">
          <div className="row g-3 g-lg-4 justify-content-center align-items-stretch">
            {mainRow.map((linha, index) => (
              <Reveal
                as="div"
                index={index + 1}
                key={linha.id}
                className="col-xl-4 col-md-6 d-flex"
              >
                <ProdutoCard linha={linha} />
              </Reveal>
            ))}
          </div>

          <div className="row g-3 g-lg-4 justify-content-center align-items-stretch nn-linhas-credito__row--last mt-1 mt-lg-2">
            {lastRow.map((linha, index) => (
              <Reveal
                as="div"
                index={mainRow.length + index + 1}
                key={linha.id}
                className="col-xl-4 col-md-6 d-flex"
              >
                <ProdutoCard linha={linha} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal as="p" index={linhasCredito.length + 1} className="text-center nn-linhas-credito__foot mb-0">
          <a className="theme-btn theme-btn-lg" href="#solicitar-simulacao">
            Simular meu perfil <i className="arrow_right-up" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
