import { useCallback, useEffect, useState } from 'react'
import { navLinks } from '@/constants/navigation'

const SCROLL_OFFSET = 140

function resolveActiveFromScroll() {
  let current = navLinks[0]?.id ?? 'inicio'

  for (const link of navLinks) {
    const sectionId = link.href.replace('#', '')
    const el = document.getElementById(sectionId)
    if (!el) continue

    if (window.scrollY >= el.offsetTop - SCROLL_OFFSET) {
      current = link.id
    }
  }

  return current
}

export function useActiveNav() {
  const [activeId, setActiveId] = useState(navLinks[0]?.id ?? 'inicio')

  useEffect(() => {
    const onScroll = () => {
      setActiveId(resolveActiveFromScroll())
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('hashchange', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('hashchange', onScroll)
    }
  }, [])

  const activate = useCallback((id) => {
    setActiveId(id)
  }, [])

  return { activeId, activate }
}
