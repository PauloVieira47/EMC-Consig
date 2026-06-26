const illustrations = {
  simulacao: (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="40" y="24" width="240" height="192" rx="20" className="nn-dif-svg__panel" />
      <rect x="64" y="52" width="88" height="12" rx="6" className="nn-dif-svg__muted" />
      <rect x="64" y="76" width="140" height="8" rx="4" className="nn-dif-svg__muted" opacity="0.6" />
      <rect x="64" y="112" width="52" height="72" rx="8" className="nn-dif-svg__bar" />
      <rect x="128" y="136" width="52" height="48" rx="8" className="nn-dif-svg__bar nn-dif-svg__bar--mid" />
      <rect x="192" y="120" width="52" height="64" rx="8" className="nn-dif-svg__bar nn-dif-svg__bar--hi" />
      <circle cx="248" cy="56" r="22" className="nn-dif-svg__accent-ring" />
      <path
        d="M240 56l6 6 12-12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="nn-dif-svg__check"
      />
    </svg>
  ),
  humano: (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="160" cy="108" r="56" className="nn-dif-svg__panel" />
      <circle cx="160" cy="96" r="22" className="nn-dif-svg__accent" />
      <path
        d="M118 148c8-18 28-28 42-28s34 10 42 28"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        className="nn-dif-svg__accent"
      />
      <rect x="48" y="168" width="108" height="48" rx="16" className="nn-dif-svg__bubble" />
      <rect x="68" y="184" width="68" height="8" rx="4" className="nn-dif-svg__muted" />
      <rect x="68" y="198" width="48" height="6" rx="3" className="nn-dif-svg__muted" opacity="0.6" />
      <rect x="164" y="148" width="108" height="48" rx="16" className="nn-dif-svg__bubble nn-dif-svg__bubble--alt" />
      <rect x="184" y="164" width="72" height="8" rx="4" className="nn-dif-svg__bar" />
      <rect x="184" y="178" width="52" height="6" rx="3" className="nn-dif-svg__bar nn-dif-svg__bar--mid" opacity="0.7" />
    </svg>
  ),
  perfil: (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="56" y="40" width="128" height="160" rx="14" className="nn-dif-svg__panel" />
      <rect x="76" y="64" width="88" height="10" rx="5" className="nn-dif-svg__muted" />
      <rect x="76" y="84" width="64" height="8" rx="4" className="nn-dif-svg__muted" opacity="0.55" />
      <rect x="76" y="108" width="88" height="6" rx="3" className="nn-dif-svg__bar" />
      <rect x="76" y="122" width="72" height="6" rx="3" className="nn-dif-svg__bar nn-dif-svg__bar--mid" />
      <rect x="76" y="136" width="80" height="6" rx="3" className="nn-dif-svg__bar nn-dif-svg__bar--hi" />
      <rect x="76" y="156" width="56" height="28" rx="8" className="nn-dif-svg__accent" opacity="0.2" />
      <rect x="84" y="166" width="40" height="8" rx="4" className="nn-dif-svg__accent" />
      <rect x="200" y="72" width="64" height="128" rx="12" className="nn-dif-svg__panel" />
      <rect x="214" y="92" width="36" height="36" rx="8" className="nn-dif-svg__accent-ring" />
      <path
        d="M224 110h16M232 102v16"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="nn-dif-svg__check"
      />
      <rect x="214" y="140" width="36" height="6" rx="3" className="nn-dif-svg__muted" />
      <rect x="214" y="154" width="28" height="6" rx="3" className="nn-dif-svg__muted" opacity="0.6" />
    </svg>
  ),
}

export default function DiferencialIllustration({ name }) {
  return (
    <div className="nn-diferenciais__visual">{illustrations[name] ?? illustrations.simulacao}</div>
  )
}
