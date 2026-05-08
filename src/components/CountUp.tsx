import { useEffect, useMemo, useRef, useState } from 'react'

type Props = {
  end: number
  durationMs?: number
  suffix?: string
}

export default function CountUp({ end, durationMs = 1000, suffix = '' }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [started, setStarted] = useState(false)
  const [value, setValue] = useState(0)

  const target = useMemo(() => Math.max(0, Math.floor(end)), [end])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setStarted(true)
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let raf = 0
    const start = performance.now()

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs)
      const next = Math.round(target * t)
      setValue(next)
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [durationMs, started, target])

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      {value}
      {suffix}
    </span>
  )
}

