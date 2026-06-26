import { useScrollRevealStagger } from '@/hooks/useScrollRevealStagger'
import Reveal from '@/components/ui/Reveal'

export default function Sobre() {
  const sectionRef = useScrollRevealStagger()

  return (
    <section ref={sectionRef} className="saas-features-area bg-white nn-sobre" id="sobre">
      <div className="container">
        <div className="saas-features-item row align-items-center">
          <Reveal as="div" index={0} className="col-lg-6">
            <div className="saas-features-img">
              <img
                className="nn-sobre__visual"
                src="/img/saas-app/dashboard.png"
                width="506"
                height="429"
                alt="Painel de acompanhamento financeiro"
              />
            </div>
          </Reveal>
          <div className="col-lg-6">
            <Reveal index={1} className="saas-features-content">
              <div className="saas-section-title mb-50">
                <h2>
                  Consignado com <span>transparência</span> e segurança
                </h2>
                <p>
                  A EMC - Consig reúne parceiros bancários de confiança — da simulação à assinatura, com linguagem
                  clara e suporte humano em todo o Brasil.
                </p>
              </div>
            </Reveal>
            <div className="d-flex flex-wrap nn-sobre__features">
              <Reveal index={2} className="features-icon-box">
                <div className="round_icon">
                  <img src="/img/saas-app/hand.png" alt="" />
                </div>
                <div className="text">
                  <h4>Desconto em folha</h4>
                  <p>Parcela previsível, descontada do benefício ou salário.</p>
                </div>
              </Reveal>
              <Reveal index={3} className="features-icon-box two">
                <div className="round_icon">
                  <img src="/img/saas-app/travel_explore.png" alt="" />
                </div>
                <div className="text">
                  <h4>Prazos competitivos</h4>
                  <p>INSS e convênios públicos com condições alinhadas ao seu perfil.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
