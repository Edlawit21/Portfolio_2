import { useEffect, useState } from 'react'

export default function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onLoad = () => setVisible(false)
    if (document.readyState === 'complete') {
      setVisible(false)
      return
    }
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  if (!visible) return null
  return <div id="preloader" aria-hidden="true" />
}

