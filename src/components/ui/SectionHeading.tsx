import { motion } from 'framer-motion'

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-12 text-center md:mb-16"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
        {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400">{description}</p>
      )}
    </motion.div>
  )
}
