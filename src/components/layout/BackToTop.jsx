import { useBackToTop } from '@/hooks/useBackToTop'

export default function BackToTop() {
  const { visible, scrollToTop } = useBackToTop()

  return (
    <a
      id="back-to-top"
      title="Back to Top"
      href="#inicio"
      className={visible ? 'show' : ''}
      onClick={scrollToTop}
      style={{ display: visible ? undefined : 'none' }}
    />
  )
}
