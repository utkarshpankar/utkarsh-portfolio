import { motion } from 'framer-motion'
import { ArrowDown, MapPin, Sparkles } from 'lucide-react'
import { useRef } from 'react'
import { profile } from '../../data/profile'
import { useMousePosition } from '../../hooks/useMousePosition'
import { MagneticButton } from '../ui/MagneticButton'
import { SplitText } from '../ui/SplitText'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 120,
      damping: 20,
      delay,
    },
  }),
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { x, y } = useMousePosition(sectionRef)

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 pt-28 pb-20 sm:px-6"
    >
      {/* Grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
        }}
      />

      {/* Mouse-tracking glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute size-[600px] rounded-full blur-[120px]"
        style={{
          left: x - 300,
          top: y - 300,
          background:
            'radial-gradient(circle, rgba(139,92,246,0.22) 0%, rgba(34,211,238,0.08) 45%, transparent 70%)',
        }}
        animate={{ opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Static ambient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 size-72 rounded-full bg-violet-600/10 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/4 -bottom-20 size-80 rounded-full bg-cyan-500/10 blur-[100px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Status pill */}
        <motion.div
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 backdrop-blur-md">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            <Sparkles className="size-3.5 text-violet-400" />
            {profile.availability}
            <span className="text-zinc-600">·</span>
            <MapPin className="size-3.5 text-zinc-500" />
            {profile.location}
          </div>
        </motion.div>

        {/* Headline */}
        <div className="text-center">
          <motion.p
            custom={0.55}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-violet-400/90"
          >
            {profile.role}
            <span className="text-zinc-600"> · </span>
            <span className="normal-case tracking-normal text-zinc-500">
              {profile.subtitle}
            </span>
          </motion.p>

          <SplitText
            text={profile.tagline}
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            delay={0.65}
          />

          <SplitText
            text={profile.taglineAccent}
            className="mt-1 bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-4xl font-semibold leading-[1.1] tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
            delay={0.95}
          />

          <motion.p
            custom={1.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            {profile.bio}
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          custom={1.45}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap"
        >
          {profile.heroCtas.map((cta) => (
            <MagneticButton
              key={cta.label}
              href={cta.href}
              className={
                cta.variant === 'primary'
                  ? 'group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 to-violet-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(139,92,246,0.35)] transition-shadow hover:shadow-[0_0_60px_rgba(139,92,246,0.5)]'
                  : 'inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/[0.07]'
              }
            >
              {cta.variant === 'primary' && (
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
              )}
              <span className="relative">{cta.label}</span>
            </MagneticButton>
          ))}
        </motion.div>

        {/* Tech highlights */}
        <motion.div
          custom={1.6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-14 flex flex-wrap items-center justify-center gap-2"
        >
          {profile.techHighlights.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 1.7 + i * 0.06,
              }}
              className="rounded-full border border-white/8 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-zinc-400"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="flex flex-col items-center gap-2 text-xs text-zinc-500 transition-colors hover:text-zinc-300"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span>Scroll to explore</span>
            <ArrowDown className="size-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
