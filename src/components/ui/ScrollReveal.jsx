import { useScrollReveal } from '@/hooks/useScrollReveal'

/**
 * Envolve blocos da página com fade ao entrar no viewport.
 * variant="fade" — só opacidade (seções grandes)
 * variant="rise" — fade + leve subida (cards, grids)
 */
export default function ScrollReveal({
  as: Tag = 'div',
  children,
  className = '',
  delay = 0,
  variant = 'fade',
  ...rest
}) {
  const ref = useScrollReveal({ rootMargin: '0px 0px -6% 0px', threshold: 0.08 })

  const classes = [
    'nn-scroll-reveal',
    variant === 'fade' ? 'nn-scroll-reveal--fade' : 'nn-scroll-reveal--rise',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag
      ref={ref}
      className={classes}
      style={{ '--nn-reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
