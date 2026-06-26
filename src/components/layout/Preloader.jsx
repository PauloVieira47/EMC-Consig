import { useCallback, useEffect, useState } from 'react'
import { useTheme } from '@/app/providers/theme-context'
import EmcPreloaderLogo from '@/components/layout/EmcPreloaderLogo'

const FADE_OUT_MS = 520

export default function Preloader() {
  const { isDark } = useTheme()
  const [visible, setVisible] = useState(true)
  const [loading, setLoading] = useState(true)
  const [pageReady, setPageReady] = useState(
    () => document.readyState === 'complete' || document.readyState === 'interactive',
  )
  const [drawReady, setDrawReady] = useState(false)

  useEffect(() => {
    if (pageReady) return undefined

    const markReady = () => setPageReady(true)

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', markReady, { once: true })
      return () => document.removeEventListener('DOMContentLoaded', markReady)
    }

    markReady()
    return undefined
  }, [pageReady])

  const handleDrawComplete = useCallback(() => {
    setDrawReady(true)
  }, [])

  useEffect(() => {
    if (!pageReady || !drawReady) return undefined

    const hideTimer = window.requestAnimationFrame(() => {
      setLoading(false)
    })

    const removeTimer = window.setTimeout(() => setVisible(false), FADE_OUT_MS + 50)

    return () => {
      window.cancelAnimationFrame(hideTimer)
      window.clearTimeout(removeTimer)
    }
  }, [pageReady, drawReady])

  if (!visible) return null

  return (
    <div
      id="preloader"
      className={`${loading ? 'loading' : ''} ${isDark ? 'preloader--dark' : ''}`}
      aria-busy={loading}
      aria-live="polite"
    >
      <div id="ctn-preloader" className="ctn-preloader ctn-preloader--emc">
        <EmcPreloaderLogo onComplete={handleDrawComplete} />
      </div>
    </div>
  )
}
