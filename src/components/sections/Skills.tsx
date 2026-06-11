import { motion } from 'framer-motion'
import { skills } from '../../data/profile'
import { SectionHeading } from '../ui/SectionHeading'

const allSkills = skills.flatMap((group) => group.items)

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items]

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0a0a0b] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0a0a0b] to-transparent" />

      <motion.div
        className="flex w-max gap-3"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="shrink-0 rounded-full border border-white/8 bg-white/[0.04] px-5 py-2.5 font-mono text-sm text-zinc-300 backdrop-blur-sm transition-colors hover:border-violet-400/30 hover:text-white"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function Skills() {
  const row1 = allSkills.filter((_, i) => i % 2 === 0)
  const row2 = allSkills.filter((_, i) => i % 2 === 1)

  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Tech Stack"
          title="Skills"
          description="Languages, frameworks, and tools I use to ship production-ready applications."
        />

        {/* Category grid */}
        <motion.div
          className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: 'spring', stiffness: 120, damping: 20 },
                },
              }}
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 backdrop-blur-xl"
            >
              <h3 className="mb-3 text-sm font-medium text-violet-400">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/6 bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee */}
        <div className="space-y-4">
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </div>
      </div>
    </section>
  )
}
