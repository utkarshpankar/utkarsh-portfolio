import { motion } from 'framer-motion'
import { ExternalLink, Receipt, Sparkles } from 'lucide-react'
import { GitHubIcon } from '../ui/BrandIcons'
import { projects } from '../../data/profile'
import { SectionHeading } from '../ui/SectionHeading'
import { TiltCard } from '../ui/TiltCard'

const icons = {
  receipt: Receipt,
  sparkles: Sparkles,
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 18 },
  },
}

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Featured Work"
          title="Projects"
          description="Full-stack applications with AI integration, deployed on Vercel and Render."
        />

        <motion.div
          className="grid gap-4 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project) => {
            const Icon = icons[project.icon as keyof typeof icons] ?? Sparkles

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className={project.span === 'lg' ? 'md:col-span-1' : ''}
              >
                <TiltCard className="h-full">
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors hover:border-white/16 sm:p-8">
                    <div
                      aria-hidden
                      className={`pointer-events-none absolute -right-12 -top-12 size-48 rounded-full bg-gradient-to-br ${project.gradient} blur-3xl transition-opacity group-hover:opacity-100 opacity-60`}
                    />

                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                        <Icon className="size-5 text-violet-400" />
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-all hover:border-violet-400/40 hover:text-white"
                          aria-label={`${project.title} live demo`}
                        >
                          <ExternalLink className="size-4" />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-all hover:border-violet-400/40 hover:text-white"
                          aria-label={`${project.title} GitHub`}
                        >
                          <GitHubIcon className="size-4" />
                        </a>
                      </div>
                    </div>

                    <div className="relative z-10 mt-6 flex flex-1 flex-col">
                      <h3 className="text-xl font-semibold text-white sm:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                        {project.description}
                      </p>

                      <ul className="mt-4 space-y-2">
                        {project.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-zinc-500"
                          >
                            <span className="mt-1.5 size-1 shrink-0 rounded-full bg-violet-400" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 font-mono text-xs text-zinc-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex gap-3 pt-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
                        >
                          Live Demo
                          <ExternalLink className="size-3.5" />
                        </a>
                        <span className="text-zinc-700">|</span>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                        >
                          GitHub
                          <GitHubIcon className="size-3.5" />
                        </a>
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
