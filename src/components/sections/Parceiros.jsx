import { bancosParceiros } from '@/constants/parceiros'
import { useScrollRevealStagger } from '@/hooks/useScrollRevealStagger'
import Reveal from '@/components/ui/Reveal'

function BancoLogo({ banco, decorative = false }) {
  const logoClass = [
    'clients-logo img-fluid nn-bancos-marquee__logo',
    banco.lightOnDark ? 'nn-bancos-marquee__logo--light-on-dark' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="nn-bancos-marquee__item">
      <img
        className={logoClass}
        src={banco.src}
        alt={decorative ? '' : banco.alt}
        width="160"
        height="64"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

export default function Parceiros() {
  const sectionRef = useScrollRevealStagger()

  return (
    <section
      ref={sectionRef}
      className="saas-clients-logo bg-white pt-90 pb-85"
      id="parceiros"
      aria-label="Instituições parceiras"
    >
      <div className="container">
        <Reveal as="p" index={0} className="clients-logo-title nn-parceiros-intro">
          <span className="nn-parceiros-intro__kicker">Ecossistema financeiro</span>
          Operamos com <span className="nn-parceiros-gradient">grandes bancos e financeiras</span>, com
          transparência, segurança jurídica e condições alinhadas ao mercado de consignado.
        </Reveal>
        <Reveal index={1} className="nn-bancos-marquee-wrap">
          <div className="nn-bancos-marquee" role="region" aria-label="Logos de instituições financeiras parceiras">
            <div className="nn-bancos-marquee__rail">
              <div className="nn-bancos-marquee__group">
                {bancosParceiros.map((banco) => (
                  <BancoLogo key={banco.alt} banco={banco} />
                ))}
              </div>
              <div className="nn-bancos-marquee__group" aria-hidden="true">
                {bancosParceiros.map((banco) => (
                  <BancoLogo key={`dup-${banco.alt}`} banco={banco} decorative />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
