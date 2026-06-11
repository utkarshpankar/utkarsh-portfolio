import { motion, type Variants } from 'framer-motion'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'p' | 'span'
}

const containerVariants: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      staggerChildren: 0.035,
      delayChildren: delay,
    },
  }),
}

const wordVariants: Variants = {
  hidden: {
    y: '110%',
    opacity: 0,
    rotateX: -40,
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 18,
      mass: 0.8,
    },
  },
}

export function SplitText({
  text,
  className = '',
  delay = 0.2,
  as: Tag = 'h1',
}: SplitTextProps) {
  const words = text.split(' ')

  return (
    <motion.div
      className={`perspective-[1200px] ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={delay}
    >
      <Tag className="flex flex-wrap gap-x-[0.28em] gap-y-1">
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block origin-bottom"
              variants={wordVariants}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  )
}
