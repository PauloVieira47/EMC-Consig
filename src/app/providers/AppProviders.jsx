import { ThemeProvider } from '@/app/providers/ThemeProvider'

/**
 * Agrupa todos os providers do app (tema, futuros contextos, etc.).
 * main.jsx envolve o App com este componente.
 */
export function AppProviders({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
