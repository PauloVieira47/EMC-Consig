import { useEffect, useState } from 'react'
import { site } from '@/config/site'
import {
  defaultPreferences,
  getConsent,
  hasConsentChoice,
  saveConsent,
} from '@/lib/cookieConsent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [manageOpen, setManageOpen] = useState(false)
  const [prefs, setPrefs] = useState(defaultPreferences)

  useEffect(() => {
    const saved = getConsent()
    if (saved) {
      setPrefs({
        essential: true,
        analytics: saved.analytics,
        marketing: saved.marketing,
      })
      setVisible(false)
      return
    }
    setVisible(!hasConsentChoice())
  }, [])

  const closeWith = (nextPrefs, choice) => {
    saveConsent({ ...nextPrefs, choice })
    setPrefs(nextPrefs)
    setVisible(false)
    setManageOpen(false)
  }

  const acceptAll = () => {
    closeWith({ essential: true, analytics: true, marketing: true }, 'all')
  }

  const essentialOnly = () => {
    closeWith({ essential: true, analytics: false, marketing: false }, 'essential')
  }

  const savePreferences = () => {
    closeWith(prefs, 'custom')
  }

  if (!visible) return null

  return (
    <div className="nn-cookie" role="dialog" aria-modal="true" aria-labelledby="nn-cookie-title">
      <div className={`nn-cookie__panel${manageOpen ? ' nn-cookie__panel--manage' : ''}`}>
        <div className="nn-cookie__brand">
          <img src={site.assets.logoMark} alt="" className="nn-cookie__logo" width="44" height="44" />
          <div className="nn-cookie__brand-text">
            <h2 id="nn-cookie-title" className="nn-cookie__title">
              Privacidade e cookies
            </h2>
            <p className="nn-cookie__subtitle">
              {site.brand.name} · preferências salvas no seu navegador
            </p>
          </div>
          <span className="nn-cookie__icon" aria-hidden="true">
            <ion-icon name="shield-checkmark-outline" />
          </span>
        </div>

        {!manageOpen ? (
          <>
            <p className="nn-cookie__text">
              Usamos cookies essenciais para tema e funcionamento do site. Cookies opcionais de análise e marketing
              só são ativados com o seu consentimento, conforme a LGPD.
            </p>
            <div className="nn-cookie__actions">
              <button type="button" className="theme-btn nn-cookie__btn nn-cookie__btn--primary" onClick={acceptAll}>
                Aceitar todos
              </button>
              <button type="button" className="nn-cookie__btn nn-cookie__btn--ghost" onClick={essentialOnly}>
                Apenas essenciais
              </button>
              <button
                type="button"
                className="nn-cookie__btn nn-cookie__btn--link"
                onClick={() => setManageOpen(true)}
              >
                Gerenciar preferências
              </button>
            </div>
          </>
        ) : (
          <>
            <ul className="nn-cookie__prefs list-unstyled mb-0">
              <li className="nn-cookie__pref nn-cookie__pref--locked">
                <div>
                  <strong>Essenciais</strong>
                  <span>Tema, segurança e lembrar sua escolha de cookies.</span>
                </div>
                <span className="nn-cookie__pill">Sempre ativo</span>
              </li>
              <li className="nn-cookie__pref">
                <div>
                  <strong>Análise</strong>
                  <span>Estatísticas anônimas para melhorar o site.</span>
                </div>
                <label className="nn-cookie__switch">
                  <input
                    type="checkbox"
                    checked={prefs.analytics}
                    onChange={(e) => setPrefs((p) => ({ ...p, analytics: e.target.checked }))}
                  />
                  <span aria-hidden="true" />
                </label>
              </li>
              <li className="nn-cookie__pref">
                <div>
                  <strong>Marketing</strong>
                  <span>Conteúdo e campanhas personalizadas.</span>
                </div>
                <label className="nn-cookie__switch">
                  <input
                    type="checkbox"
                    checked={prefs.marketing}
                    onChange={(e) => setPrefs((p) => ({ ...p, marketing: e.target.checked }))}
                  />
                  <span aria-hidden="true" />
                </label>
              </li>
            </ul>
            <div className="nn-cookie__actions nn-cookie__actions--manage">
              <button type="button" className="theme-btn nn-cookie__btn nn-cookie__btn--primary" onClick={savePreferences}>
                Salvar preferências
              </button>
              <button type="button" className="nn-cookie__btn nn-cookie__btn--ghost" onClick={essentialOnly}>
                Recusar opcionais
              </button>
              <button type="button" className="nn-cookie__btn nn-cookie__btn--link" onClick={() => setManageOpen(false)}>
                Voltar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
