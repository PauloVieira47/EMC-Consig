/**
 * PONTO DE ENTRADA DO REACT
 * -------------------------
 * 1. main.jsx monta o app dentro de <div id="root"> (no index.html)
 * 2. AppProviders = tema claro/escuro
 * 3. App = casca (header, footer) + HomePage (seções)
 *
 * Guia completo: docs/GUIA.md
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/app/App'
import { AppProviders } from '@/app/providers/AppProviders'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
)
