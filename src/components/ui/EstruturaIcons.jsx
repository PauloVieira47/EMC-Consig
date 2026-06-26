const iconProps = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
}

export function IconSeguranca(props) {
  return (
    <svg {...iconProps} {...props}>
      <path
        d="M12 3.5 5.5 6.2v5.8c0 4.1 2.8 7.9 6.5 8.8 3.7-.9 6.5-4.7 6.5-8.8V6.2L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m9.2 12.1 1.9 1.9 4.2-4.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconAtendimento(props) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="9" cy="9" r="2.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.5" cy="10" r="2.1" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4.5 18.5c.8-2.4 2.6-3.8 4.5-3.8s3.7 1.4 4.5 3.8M13.5 17.8c.6-1.7 1.8-2.8 3-2.8 1.4 0 2.6 1.2 3.2 2.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconTransparencia(props) {
  return (
    <svg {...iconProps} {...props}>
      <path
        d="M12 5.5c3.8 2.2 6 5.4 6 8.8 0 3.4-2.2 6.6-6 8.8-3.8-2.2-6-5.4-6-8.8 0-3.4 2.2-6.6 6-8.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="14.2" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="14.2" r=".75" fill="currentColor" />
    </svg>
  )
}

const ICON_MAP = {
  seguranca: IconSeguranca,
  atendimento: IconAtendimento,
  transparencia: IconTransparencia,
}

export function EstruturaIcon({ id, ...props }) {
  const Icon = ICON_MAP[id]
  return Icon ? <Icon {...props} /> : null
}
