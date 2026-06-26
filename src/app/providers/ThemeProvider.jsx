import { useEffect, useState } from 'react'
import { readCookie, writeCookie } from '@/lib/cookies'
import { ThemeContext } from '@/app/providers/theme-context'

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = readCookie('body_dark')
    if (saved === 'true') return true
    if (saved === 'false') return false
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
  })

  useEffect(() => {
    document.body.classList.toggle('body_dark', isDark)
    writeCookie('body_dark', isDark, 999)
  }, [isDark])

  const toggleTheme = () => setIsDark((prev) => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
