import { useEffect, useMemo, useState } from 'react'

type Options = {
  sectionIds: string[]
  offset?: number
}

export function useScrollSpy({ sectionIds, offset = 200 }: Options) {
  const ids = useMemo(() => sectionIds.filter(Boolean), [sectionIds])
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const getActive = () => {
      const position = window.scrollY + offset
      let current: string | null = null

      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue

        const top = el.offsetTop
        const bottom = top + el.offsetHeight
        if (position >= top && position <= bottom) {
          current = id
          break
        }
      }

      setActiveId(current)
    }

    getActive()
    window.addEventListener('scroll', getActive, { passive: true })
    return () => window.removeEventListener('scroll', getActive)
  }, [ids, offset])

  return activeId
}

