import { comoFuncionaSteps } from '@/constants/steps'
import { useScrollRevealStagger } from '@/hooks/useScrollRevealStagger'
import Reveal from '@/components/ui/Reveal'

export default function ComoFunciona() {
  const sectionRef = useScrollRevealStagger()

  return (
    <section
      ref={sectionRef}
      className="nn-como-funciona pt-90 pb-95"
      id="como-funciona"
      aria-labelledby="nn-como-titulo"
    >
      <img
        className="nn-como-funciona__grid"
        src="/img/saas-app/grid.png"
        alt=""
        width="1920"
        height="1080"
        decoding="async"
      />
      <div className="container position-relative">
        <Reveal as="header" index={0} className="text-center mb-55 nn-story-head nn-como-funciona__top">
          <p className="nn-story-kicker">Do primeiro contato ao crédito</p>
          <h2 id="nn-como-titulo">
            Como <span>funciona</span>
          </h2>
          <p className="nn-story-sub">
            Transparência em cada etapa — da simulação à assinatura, com suporte em portabilidade quando fizer sentido.
          </p>
        </Reveal>
        <ol className="row g-4 nn-steps list-unstyled mb-0 justify-content-center">
          {comoFuncionaSteps.map((step, index) => (
            <Reveal as="li" index={index + 1} key={step.num} className="col-md-6 col-xl-4">
              <div className="nn-step-card h-100">
                <span className="nn-step-card__num" aria-hidden="true">
                  {step.num}
                </span>
                <h3 className="nn-step-card__title">{step.title}</h3>
                <p className="nn-step-card__text">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <Reveal as="p" index={comoFuncionaSteps.length + 1} className="text-center nn-como-foot mt-45 mb-0">
          <a className="theme-btn theme-btn-lg" href="#solicitar-simulacao">
            Simular agora <i className="arrow_right-up" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
