import { useState } from 'react'
import { faqColuna1, faqColuna2, faqSection } from '@/constants/faq'
import { useScrollRevealStagger } from '@/hooks/useScrollRevealStagger'
import Reveal from '@/components/ui/Reveal'

function FaqAccordion({ items, groupId }) {
  const defaultOpen = items.find((i) => i.defaultOpen)?.id ?? null
  const [openId, setOpenId] = useState(defaultOpen)

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <div className="accordion" id={groupId}>
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div className="faq_item" key={item.id}>
            <div className="faq-header" id={item.heading}>
              <h6
                className={`mb-0${isOpen ? '' : ' collapsed'}`}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={item.id}
                onClick={() => toggle(item.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggle(item.id)
                  }
                }}
              >
                {item.question}
                <i className="icon_plus" />
                <i className="icon_minus-06" />
              </h6>
            </div>
            <div
              id={item.id}
              className={`collapse${isOpen ? ' show' : ''}`}
              aria-labelledby={item.heading}
            >
              <div className="faq-body">
                {item.answerHtml ? (
                  <p dangerouslySetInnerHTML={{ __html: item.answer }} />
                ) : (
                  <p>{item.answer}</p>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function Faq() {
  const sectionRef = useScrollRevealStagger()

  return (
    <section ref={sectionRef} className="saas-faq-area bg-white nn-faq" id="faq" aria-labelledby="nn-faq-titulo">
      <div className="container">
        <Reveal as="div" index={0} className="saas-section-title text-center mb-60">
          <h2 id="nn-faq-titulo">
            Perguntas <span>frequentes</span>
          </h2>
          <p className="nn-faq__intro">{faqSection.intro}</p>
        </Reveal>
        <div className="row">
          <Reveal as="div" index={1} className="col-lg-6">
            <FaqAccordion items={faqColuna1} groupId="accordionFaqNn" />
          </Reveal>
          <Reveal as="div" index={2} className="col-lg-6">
            <FaqAccordion items={faqColuna2} groupId="accordionFaqNn2" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
