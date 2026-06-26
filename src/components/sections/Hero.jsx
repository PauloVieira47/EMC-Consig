import { heroCopy } from '@/constants/hero'
import { site } from '@/config/site'

export default function Hero() {
  const { subtitle, titleLines, lead } = heroCopy

  return (
    <section className="banner-saas-area" id="inicio" aria-label="Apresentação">
      <img className="shape_img" src={site.assets.grid} alt="" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="nn-hero-content text-center">
            <h5 className="nn-hero-badge">{subtitle}</h5>
            <h1 className="nn-hero-title">
              {titleLines.map((line, index) => {
                if (typeof line === 'string') {
                  return (
                    <span className="nn-hero-title__line" key={index}>
                      {line}
                    </span>
                  )
                }

                return (
                  <span className="nn-hero-title__line" key={index}>
                    <span className="nn-hero-title__accent">{line.accent}</span>
                  </span>
                )
              })}
            </h1>
            <div className="nn-hero-text">
              <p className="nn-hero-lead">{lead}</p>
            </div>
            <div className="nn-hero-actions d-flex flex-column flex-sm-row justify-content-center">
              <a href="#solicitar-simulacao" className="theme-btn theme-btn-lg">
                Simular agora <i className="arrow_right-up" />
              </a>
              <a href="#como-funciona" className="theme-btn theme-btn-lg nn-hero-btn-secondary">
                Como funciona
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
