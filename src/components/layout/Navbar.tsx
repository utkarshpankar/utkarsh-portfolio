import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../../data/profile'
import { MagneticButton } from '../ui/MagneticButton'

const navItemVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 260,
      damping: 22,
      delay: 0.15 + i * 0.06,
    },
  }),
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24)
  })

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 sm:px-6"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 24, delay: 0.1 }}
    >
      <nav
        className={[
          'relative flex w-full max-w-5xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 sm:px-6',
          scrolled
            ? 'border-white/12 bg-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-2xl'
            : 'border-white/8 bg-white/[0.03] backdrop-blur-xl',
        ].join(' ')}
      >
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-60"
          style={{
            background:
              'linear-gradient(135deg, rgba(139,92,246,0.15), transparent 40%, rgba(34,211,238,0.1))',
          }}
        />

        <a href="#" className="relative z-10 flex items-center gap-3">
          <motion.div
            className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-cyan-400/10 text-xs font-semibold tracking-wider text-white"
            whileHover={{ scale: 1.05, rotate: 3 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
          >
            {profile.initials}
          </motion.div>
          <span className="text-sm font-semibold tracking-tight text-zinc-100">
            {profile.name}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="relative z-10 hidden items-center gap-1 md:flex">
          {profile.navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              custom={i}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <a
                href={link.href}
                className="group relative rounded-lg px-4 py-2 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute inset-x-3 -bottom-px h-px scale-x-0 bg-gradient-to-r from-violet-400 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="relative z-10 hidden md:block">
          <MagneticButton
            href={profile.social.email}
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-violet-400/40 hover:bg-violet-500/10"
          >
            Let's Talk
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </MagneticButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="relative z-10 rounded-lg p-2 text-zinc-400 transition-colors hover:text-white md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        className="absolute inset-x-4 top-[calc(100%+0.5rem)] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 backdrop-blur-2xl md:hidden"
        initial={false}
        animate={{
          height: mobileOpen ? 'auto' : 0,
          opacity: mobileOpen ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <ul className="flex flex-col gap-1 p-3">
          {profile.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <MagneticButton
              href={profile.social.email}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-violet-500/10 px-4 py-3 text-sm font-medium text-white"
            >
              Let's Talk
              <ArrowUpRight className="size-4" />
            </MagneticButton>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  )
}
