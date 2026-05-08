import { useScrollY } from '../hooks/useScrollY'

export default function ScrollTopButton() {
  const scrollY = useScrollY()
  const active = scrollY > 100

  return (
    <a
      href="#top"
      id="scroll-top"
      className={`scroll-top d-flex align-items-center justify-content-center${active ? ' active' : ''}`}
      onClick={(e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
      aria-label="Scroll to top"
    >
      <i className="bi bi-arrow-up-short" />
    </a>
  )
}

