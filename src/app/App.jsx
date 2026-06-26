import { useEffect } from 'react'
import BackToTop from '@/components/layout/BackToTop'
import CookieConsent from '@/components/layout/CookieConsent'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Preloader from '@/components/layout/Preloader'
import { useHashRoute } from '@/hooks/useHashRoute'
import HomePage from '@/pages/HomePage'
import PrivacidadePage from '@/pages/PrivacidadePage'
import TermosPage from '@/pages/TermosPage'

/**
 * Casca do site: layout fixo (header, footer) + página principal ou legal (#/privacidade, #/termos).
 */
export default function App() {
  const hash = useHashRoute()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [hash])

  let page = <HomePage key="home" />
  if (hash === '#/privacidade') page = <PrivacidadePage key="privacidade" />
  if (hash === '#/termos') page = <TermosPage key="termos" />

  return (
    <>
      <Preloader />
      <Header />
      <main>{page}</main>
      <Footer />
      <BackToTop />
      <CookieConsent />
    </>
  )
}
