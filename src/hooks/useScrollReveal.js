import { useEffect, useRef } from 'react'

/**
 * Adiciona `.is-visible` quando o elemento entra no viewport (animação CSS).
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const { rootMargin = '0px 0px -8% 0px', threshold = 0.12, once = true } = options

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible')
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        node.classList.add('is-visible')
        if (once) observer.disconnect()
      },
      { rootMargin, threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [rootMargin, threshold, once])

  return ref
}
