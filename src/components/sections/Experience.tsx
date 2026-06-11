import { motion, useScroll, useTransform } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { useRef } from 'react'
import { education, experience } from '../../data/profile'
import { SectionHeading } from '../ui/SectionHeading'

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.4'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-3xl">
        <SectionHeading
          label="Career"
          title="Experience & Education"
          description="Hands-on full-stack development and professional internship experience."
        />

        <div ref={containerRef} className="relative">
          {/* Background track */}
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-white/8 sm:left-[23px]" />

          {/* Animated fill line */}
          <motion.div
            className="absolute left-[19px] top-0 w-px origin-top bg-gradient-to-b from-violet-500 via-fuchsia-400 to-cyan-400 shadow-[0_0_12px_rgba(139,92,246,0.6)] sm:left-[23px]"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.article
                key={item.id}
                className="relative pl-12 sm:pl-14"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  type: 'spring',
                  stiffness: 120,
                  damping: 20,
                  delay: index * 0.1,
                }}
              >
                <div className="absolute left-0 top-1 flex size-10 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 sm:size-12">
                  <Briefcase className="size-4 text-violet-400 sm:size-5" />
                </div>

                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-xl">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                      <p className="text-violet-400">{item.company}</p>
                    </div>
                    <time className="mt-1 font-mono text-sm text-zinc-500 sm:mt-0">
                      {item.period}
                    </time>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {item.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-400"
                      >
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}

            <motion.article
              className="relative pl-12 sm:pl-14"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.15 }}
            >
              <div className="absolute left-0 top-1 flex size-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 sm:size-12">
                <GraduationCap className="size-4 text-cyan-400 sm:size-5" />
              </div>

              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-xl">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{education.degree}</h3>
                    <p className="text-zinc-400">{education.school}</p>
                  </div>
                  <time className="mt-1 font-mono text-sm text-zinc-500 sm:mt-0">
                    {education.period}
                  </time>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  )
}
