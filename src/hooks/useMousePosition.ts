import { useEffect, useState } from 'react'

interface MousePosition {
  x: number
  y: number
}

export function useMousePosition(ref?: React.RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    const element = ref?.current ?? window

    const handleMove = (event: MouseEvent) => {
      const rect = ref?.current?.getBoundingClientRect()
      setPosition({
        x: rect ? event.clientX - rect.left : event.clientX,
        y: rect ? event.clientY - rect.top : event.clientY,
      })
    }

    element.addEventListener('mousemove', handleMove as EventListener)
    return () => element.removeEventListener('mousemove', handleMove as EventListener)
  }, [ref])

  return position
}
