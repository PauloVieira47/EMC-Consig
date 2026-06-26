import { useLayoutEffect, useRef } from 'react'
import { site } from '@/config/site'

const REVEAL_MS = 1900
const HOLD_AFTER_MS = 320

export default function EmcPreloaderLogo({ onComplete }) {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    let cancelled = false
    let holdTimer = null

    const finish = () => {
      if (cancelled) return
      root.classList.add('emc-logo-draw--filled')
      holdTimer = window.setTimeout(() => onComplete?.(), HOLD_AFTER_MS)
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      finish()
      return () => {
        cancelled = true
        window.clearTimeout(holdTimer)
      }
    }

    const revealTimer = window.requestAnimationFrame(() => {
      root.classList.add('emc-logo-draw--active')
    })

    const doneTimer = window.setTimeout(finish, REVEAL_MS)

    return () => {
      cancelled = true
      window.cancelAnimationFrame(revealTimer)
      window.clearTimeout(doneTimer)
      window.clearTimeout(holdTimer)
    }
  }, [onComplete])

  return (
    <div className="emc-logo-draw" ref={rootRef}>
      <img
        className="emc-logo-draw__img"
        src={site.assets.logoFull}
        alt=""
        width="320"
        height="340"
        decoding="async"
        fetchPriority="high"
      />
    </div>
  )
}
