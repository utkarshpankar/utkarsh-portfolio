import { AnimatePresence, motion } from 'framer-motion'
import { Download, Eye, FileText, X } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../../data/profile'
import { MagneticButton } from '../ui/MagneticButton'
import { SectionHeading } from '../ui/SectionHeading'

export function Resume() {
  const [viewerOpen, setViewerOpen] = useState(false)
  const { resume } = profile

  const viewerUrl = `${window.location.origin}${resume.file}`

  return (
    <section id="resume" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Credentials"
          title="Resume"
          description="A snapshot of my experience, skills, and projects — available to download or preview."
        />

        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl sm:p-10"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-violet-600/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-16 size-48 rounded-full bg-cyan-500/10 blur-3xl"
          />

          <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-5 md:max-w-xl">
              <motion.div
                className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-cyan-400/10"
                whileHover={{ scale: 1.05, rotate: -3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              >
                <FileText className="size-6 text-violet-400" />
              </motion.div>

              <div>
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {profile.name} — Resume
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {resume.description}
                </p>
                <p className="mt-3 font-mono text-xs text-zinc-500">
                  {resume.fileName}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <MagneticButton
                href={resume.file}
                download={resume.fileName}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 to-violet-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(139,92,246,0.35)] transition-shadow hover:shadow-[0_0_60px_rgba(139,92,246,0.5)]"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                <Download className="relative size-4" />
                <span className="relative">Download Resume</span>
              </MagneticButton>

              <MagneticButton
                onClick={() => setViewerOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/[0.07]"
              >
                <Eye className="size-4" />
                View Resume
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {viewerOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              type="button"
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setViewerOpen(false)}
              aria-label="Close resume viewer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative flex h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6">
                <p className="text-sm font-medium text-zinc-300">{resume.fileName}</p>
                <button
                  type="button"
                  onClick={() => setViewerOpen(false)}
                  className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                  aria-label="Close"
                >
                  <X className="size-5" />
                </button>
              </div>

              <iframe
                title="Resume preview"
                src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(viewerUrl)}`}
                className="flex-1 w-full bg-white"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
