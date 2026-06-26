import { estruturaSection, estruturaTagline } from '@/constants/estrutura'
import { site } from '@/config/site'
import { useScrollRevealStagger } from '@/hooks/useScrollRevealStagger'
import { EstruturaIcon } from '@/components/ui/EstruturaIcons'
import Reveal from '@/components/ui/Reveal'

export default function Estrutura() {
  const sectionRef = useScrollRevealStagger()
  const { title, titleAccent, highlights } = estruturaSection

  return (
    <section ref={sectionRef} className="nn-estrutura" id="estrutura" aria-labelledby="nn-estrutura-title">
      <div className="container">
        <Reveal as="div" index={0} className="nn-estrutura__card">
          <div className="nn-estrutura__main">
            <div className="nn-estrutura__content">
              <h2 id="nn-estrutura-title" className="nn-estrutura__title">
                {title} <span>{titleAccent}</span>
              </h2>

              <ul className="nn-estrutura__highlights list-unstyled mb-0">
                {highlights.map((item) => (
                  <li key={item.id} className="nn-estrutura__highlight">
                    <span className="nn-estrutura__icon" aria-hidden="true">
                      <EstruturaIcon id={item.id} />
                    </span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nn-estrutura__media">
              <img
                src={site.assets.loja}
                alt={`Ambiente de atendimento da ${site.brand.name}`}
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="nn-estrutura__footer">
            <span className="nn-estrutura__brand">EMC CONSIG</span>
            <span className="nn-estrutura__tagline">{estruturaTagline}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
