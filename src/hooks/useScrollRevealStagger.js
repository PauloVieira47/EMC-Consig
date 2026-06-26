import { useEffect, useRef } from 'react'

/**
 * Observa a seção e aplica `.is-visible` nela quando entra no viewport.
 * Filhos com `[data-nn-reveal]` animam em sequência via CSS (--nn-reveal-i).
 */
export function useScrollRevealStagger(options = {}) {
  const ref = useRef(null)
  const { rootMargin = '0px 0px -8% 0px', threshold = 0.06, once = true } = options

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    node.classList.add('nn-reveal-section')

    const reveal = () => {
      node.classList.add('is-visible')
    }

    if (typeof IntersectionObserver === 'undefined') {
      reveal()
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        reveal()
        if (once) observer.disconnect()
      },
      { rootMargin, threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [rootMargin, threshold, once])

  return ref
}
