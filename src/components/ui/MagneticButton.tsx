import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  strength?: number
  type?: 'button' | 'submit' | 'reset'
}

export function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  strength = 0.35,
  type = 'button',
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMove = (event: React.MouseEvent) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2

    x.set(offsetX * strength)
    y.set(offsetY * strength)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  const motionProps = {
    ref,
    style: { x: springX, y: springY },
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 25 },
    className,
  }

  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  )
}
