import { site, whatsappLink } from '@/config/site'
import { useScrollRevealStagger } from '@/hooks/useScrollRevealStagger'
import Reveal from '@/components/ui/Reveal'

const LOJA_IMAGE = '/img/localizazao.png'

export default function Contato() {
  const sectionRef = useScrollRevealStagger()
  const { brand, contact, legal } = site

  return (
    <section ref={sectionRef} className="nn-mapa" id="localizacao" aria-labelledby="nn-mapa-titulo">
      <div className="container">
        <Reveal as="header" index={0} className="nn-mapa__head text-center">
          <p className="nn-mapa__kicker">Onde estamos</p>
          <h2 id="nn-mapa-titulo" className="nn-mapa__title">
            Nossa loja em <span>Quixadá</span>
          </h2>
          <p className="nn-mapa__sub">
            Atendimento presencial em {legal.city} ({legal.state}), com a mesma transparência do site.
          </p>
        </Reveal>

        <div className="nn-mapa__layout">
          <Reveal as="div" index={1} className="nn-mapa__frame">
            <iframe
              title={`Mapa ${brand.name}`}
              src={site.map.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>

          <Reveal as="div" index={2} className="nn-mapa__photo">
            <img
              src={LOJA_IMAGE}
              alt={`Loja física ${brand.name} em Quixadá, CE`}
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>

        <Reveal as="div" index={3} className="nn-mapa__bar">
          <div className="nn-mapa__bar-text">
            <p className="nn-mapa__info-label">Endereço</p>
            <p className="nn-mapa__address">{legal.address}</p>
          </div>

          <div className="nn-mapa__actions">
            <a
              className="nn-mapa__btn nn-mapa__btn--primary"
              href={site.map.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps
            </a>
            <a
              className="nn-mapa__btn nn-mapa__btn--ghost"
              href={whatsappLink(`Olá! Vim pelo site da ${brand.name} e gostaria de saber como chegar à loja.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a className="nn-mapa__phone" href={`tel:${contact.phoneTel}`}>
              {contact.phoneDisplay.trim()}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
