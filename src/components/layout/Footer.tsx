import { profile } from '../../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/6 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-500">
          © {year} {profile.name}. Built with React, Tailwind & Framer Motion.
        </p>
        <div className="flex gap-6 text-sm text-zinc-500">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={profile.social.email}
            className="transition-colors hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
