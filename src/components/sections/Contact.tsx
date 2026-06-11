import { motion } from 'framer-motion'
import { Mail, Phone, Send } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'
import { useState } from 'react'
import { profile } from '../../data/profile'
import { MagneticButton } from '../ui/MagneticButton'
import { SectionHeading } from '../ui/SectionHeading'

interface FormData {
  name: string
  email: string
  message: string
}

function FloatingInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  rows,
}: {
  id: string
  label: string
  type?: string
  value: string
  onChange: (value: string) => void
  rows?: number
}) {
  const [focused, setFocused] = useState(false)
  const active = focused || value.length > 0

  const baseClass =
    'peer w-full rounded-2xl border bg-white/[0.03] px-4 pt-6 pb-3 text-white outline-none transition-all duration-300'

  const focusClass = focused
    ? 'border-violet-400/60 shadow-[0_0_20px_rgba(139,92,246,0.15)]'
    : 'border-white/10 hover:border-white/16'

  if (rows) {
    return (
      <div className="relative">
        <textarea
          id={id}
          rows={rows}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${baseClass} ${focusClass} resize-none`}
        />
        <label
          htmlFor={id}
          className={`pointer-events-none absolute left-4 transition-all duration-300 ${
            active
              ? 'top-2.5 text-xs text-violet-400'
              : 'top-4 text-sm text-zinc-500'
          }`}
        >
          {label}
        </label>
      </div>
    )
  }

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`${baseClass} ${focusClass}`}
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all duration-300 ${
          active ? 'top-2.5 text-xs text-violet-400' : 'top-1/2 -translate-y-1/2 text-sm text-zinc-500'
        }`}
      >
        {label}
      </label>
    </div>
  )
}

export function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `${profile.social.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const socialLinks = [
    { icon: GitHubIcon, href: profile.social.github, label: 'GitHub', external: true },
    { icon: LinkedInIcon, href: profile.social.linkedin, label: 'LinkedIn', external: true },
    { icon: Mail, href: profile.social.email, label: 'Email', external: false },
    { icon: Phone, href: profile.social.phone, label: 'Phone', external: false },
  ]

  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Get in Touch"
          title="Let's build something"
          description="Open to full-time roles, freelance projects, and collaborations."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Info panel */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          >
            <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
              <p className="text-sm leading-relaxed text-zinc-400">
                Based in {profile.location}. Reach out via the form or connect directly
                through any of the channels below.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href={profile.social.phone}
                  className="flex items-center gap-3 text-sm text-zinc-300 transition-colors hover:text-white"
                >
                  <Phone className="size-4 text-violet-400" />
                  {profile.phone}
                </a>
                <a
                  href={profile.social.email}
                  className="flex items-center gap-3 text-sm text-zinc-300 transition-colors hover:text-white"
                >
                  <Mail className="size-4 text-violet-400" />
                  {profile.email}
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-zinc-300 transition-colors hover:text-white"
                >
                  <LinkedInIcon className="size-4 text-violet-400" />
                  LinkedIn Profile
                </a>
              </div>

              <div className="mt-8 flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-all hover:border-violet-400/40 hover:text-white"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 lg:col-span-3"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.1 }}
          >
            <FloatingInput
              id="name"
              label="Your Name"
              value={form.name}
              onChange={(v) => setForm((f) => ({ ...f, name: v }))}
            />
            <FloatingInput
              id="email"
              label="Your Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm((f) => ({ ...f, email: v }))}
            />
            <FloatingInput
              id="message"
              label="Your Message"
              value={form.message}
              onChange={(v) => setForm((f) => ({ ...f, message: v }))}
              rows={5}
            />

            <MagneticButton
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-violet-500 px-6 py-4 text-sm font-semibold text-white shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-shadow hover:shadow-[0_0_60px_rgba(139,92,246,0.45)] sm:w-auto"
            >
              <span className="flex items-center gap-2">
                {submitted ? 'Opening email client…' : 'Send Message'}
                <Send className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
