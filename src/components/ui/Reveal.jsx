/**
 * Marca um bloco para animar quando a seção pai (.nn-reveal-section) entrar no viewport.
 */
export default function Reveal({
  as: Tag = 'div',
  index = 0,
  children,
  className = '',
  ...rest
}) {
  return (
    <Tag
      data-nn-reveal
      className={className}
      style={{ '--nn-reveal-i': index }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
