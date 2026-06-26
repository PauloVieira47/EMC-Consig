import { useTheme } from '@/app/providers/theme-context'

/**
 * No HTML: checkbox + labels com jQuery .change() em custom.js
 * No React: controlled input ligado ao ThemeContext
 */
export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="nn-navbar__theme flex-shrink-0" title="Alternar tema claro ou escuro">
      <div className="js-darkmode-btn">
        <label htmlFor="nn-dark-toggle" className="tab-btn tab-btns">
          <ion-icon name="sunny" aria-hidden="true" />
        </label>
        <label htmlFor="nn-dark-toggle" className="tab-btn">
          <ion-icon name="moon" aria-hidden="true" />
        </label>
        <label className="ball" htmlFor="nn-dark-toggle" />
        <input
          type="checkbox"
          id="nn-dark-toggle"
          className="dark_mode_switcher"
          aria-label="Ativar tema escuro"
          checked={isDark}
          onChange={toggleTheme}
        />
      </div>
    </div>
  )
}
