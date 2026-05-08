import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useHashScroll() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return

    const scrollMarginTop = getComputedStyle(el).scrollMarginTop
    const top = el.getBoundingClientRect().top + window.scrollY - parseInt(scrollMarginTop || '0', 10)

    window.scrollTo({ top, behavior: 'smooth' })
  }, [location.hash, location.pathname, location.search])
}

