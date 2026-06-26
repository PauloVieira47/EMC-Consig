import { site, whatsappLink } from '@/config/site'
import { footerNav } from '@/constants/footer'

export default function Footer() {
  const { brand, legal, contact, social, assets } = site

  return (
    <footer className="nn-footer">
      <div className="container">
        <div className="nn-footer__grid">
          <div className="nn-footer__brand-col">
            <a className="nn-footer__logo-link" href="#/">
              <img
                className="nn-footer__logo"
                src={assets.logo}
                alt={brand.fullName}
                width="56"
                height="56"
                decoding="async"
              />
            </a>
            <p className="nn-footer__tagline">
              Crédito consignado com transparência em todo o Brasil.
            </p>
            <a
              className="nn-footer__social"
              href={social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="social_instagram" aria-hidden="true" />
              {social.instagram.handle}
            </a>
          </div>

          <nav className="nn-footer__col" aria-label="Navegação do site">
            <h3 className="nn-footer__heading">Navegação</h3>
            <ul className="nn-footer__links list-unstyled mb-0">
              {footerNav.site.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              <li>
                <a href="#depoimentos">Depoimentos</a>
              </li>
            </ul>
          </nav>

          <nav className="nn-footer__col" aria-label="Informações legais">
            <h3 className="nn-footer__heading">Legal</h3>
            <ul className="nn-footer__links list-unstyled mb-0">
              {footerNav.legal.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nn-footer__col">
            <h3 className="nn-footer__heading">Contato</h3>
            <ul className="nn-footer__contact list-unstyled mb-0">
              <li>
                <a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay.trim()}</a>
              </li>
              <li>
                <a href={whatsappLink(`Olá! Vim pelo site da ${brand.name}.`)} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="nn-footer__bar">
          <p className="nn-footer__copy mb-0">{legal.copyright}</p>
          <p className="nn-footer__cnpj mb-0">CNPJ {legal.cnpj}</p>
        </div>
      </div>
    </footer>
  )
}
