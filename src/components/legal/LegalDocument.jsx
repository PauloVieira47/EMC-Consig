import { site } from '@/config/site'

export default function LegalDocument({ title, updated, sections }) {
  return (
    <article className="nn-legal">
      <div className="container nn-legal__container">
        <a className="nn-legal__back" href="#/">
          <i className="arrow_carrot-left" aria-hidden="true" /> Voltar ao site
        </a>
        <header className="nn-legal__head">
          <img
            className="nn-legal__logo nn-legal__logo--light"
            src={site.assets.logoLight}
            alt={site.brand.fullName}
            width="180"
            height="44"
            decoding="async"
          />
          <img
            className="nn-legal__logo nn-legal__logo--dark"
            src={site.assets.logoDark}
            alt={site.brand.fullName}
            width="180"
            height="44"
            decoding="async"
          />
          <h1 className="nn-legal__title">{title}</h1>
          <p className="nn-legal__updated">Atualizado em {updated}</p>
        </header>
        <div className="nn-legal__body">
          {sections.map((block) => (
            <section key={block.heading}>
              <h2>{block.heading}</h2>
              <p>{block.body}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}
