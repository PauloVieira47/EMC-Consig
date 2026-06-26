import { diferenciais, diferenciaisSection } from '@/constants/diferenciais'
import DiferencialIllustration from '@/components/ui/DiferencialIllustration'
import { useScrollRevealStagger } from '@/hooks/useScrollRevealStagger'
import Reveal from '@/components/ui/Reveal'

export default function Experiencia() {
  const sectionRef = useScrollRevealStagger()
  const { kicker, title, titleAccent, subtitle } = diferenciaisSection

  return (
    <section
      ref={sectionRef}
      className="nn-diferenciais"
      id="experiencia"
      aria-labelledby="nn-diferenciais-titulo"
    >
      <div className="container">
        <Reveal as="header" index={0} className="nn-diferenciais__head text-center">
          <p className="nn-diferenciais__kicker">{kicker}</p>
          <h2 id="nn-diferenciais-titulo" className="nn-diferenciais__title">
            {title} <span>{titleAccent}</span>
          </h2>
          <p className="nn-diferenciais__sub">{subtitle}</p>
        </Reveal>

        <ul className="nn-diferenciais__strip list-unstyled mb-0">
          {diferenciais.map((item, index) => (
            <Reveal as="li" index={index + 1} key={item.id} className="nn-diferenciais__item">
              <DiferencialIllustration name={item.illustration} />
              <h3 className="nn-diferenciais__item-title">{item.title}</h3>
              <p className="nn-diferenciais__item-text">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
