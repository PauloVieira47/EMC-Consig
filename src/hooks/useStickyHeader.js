import { useEffect, useState } from 'react'

/**
 * Substitui o menu fixo no scroll do site HTML original.
 * No React: useState atualiza classes do header conforme scrollY.
 */
export function useStickyHeader(threshold = 56) {
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsFixed(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return isFixed
}
