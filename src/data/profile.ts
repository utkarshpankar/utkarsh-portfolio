export const profile = {
  name: 'Utkarsh Pankar',
  initials: 'UP',
  role: 'Full-Stack Web Developer',
  subtitle: 'React.js & Node.js',
  tagline: 'Building scalable full-stack',
  taglineAccent: 'apps & AI solutions.',
  bio: 'Full-Stack Developer skilled in React.js, JavaScript, Node.js, Express.js, and MongoDB — building scalable web applications, RESTful APIs, and AI-powered solutions deployed on Vercel and Render.',
  availability: 'Open to opportunities',
  location: 'Pune, India',
  phone: '+91 9294514076',
  email: 'utkarshpankar33@gmail.com',

  navLinks: [
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ],

  resume: {
    file: '/resume/Utkarsh_Pankar_Resume.docx',
    fileName: 'Utkarsh_Pankar_Resume.docx',
    description:
      'Full-Stack Developer skilled in React.js, Node.js, Express.js, and MongoDB — with experience building scalable web apps, RESTful APIs, and AI-powered solutions deployed on Vercel and Render.',
  },

  social: {
    github: 'https://github.com/utkarshpankar',
    linkedin: 'https://www.linkedin.com/in/utkarsh-pankar-a156b31bb/',
    portfolio: 'https://utkarsh-portfolio-lemon.vercel.app',
    phone: 'tel:+919294514076',
    email: 'mailto:utkarshpankar33@gmail.com',
  },

  heroCtas: [
    { label: 'View Projects', href: '#projects', variant: 'primary' as const },
    { label: 'Download Resume', href: '#resume', variant: 'secondary' as const },
    { label: 'Get in Touch', href: '#contact', variant: 'secondary' as const },
  ],

  techHighlights: [
    'React.js',
    'Node.js',
    'TypeScript',
    'MongoDB',
    'Tailwind CSS',
    'AI / LLM APIs',
  ],
}

export const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend',
    items: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'Redux Toolkit',
      'Responsive Web Design',
    ],
  },
  {
    category: 'Backend & Database',
    items: ['Node.js', 'Express.js', 'MongoDB'],
  },
  {
    category: 'APIs & AI',
    items: ['REST APIs', 'Gemini API', 'OpenRouter API'],
  },
  {
    category: 'Tools & Platforms',
    items: [
      'Git',
      'GitHub',
      'Postman',
      'Vercel',
      'Render',
      'Cursor',
      'Claude',
      'GitHub Copilot',
    ],
  },
]

export const experience = [
  {
    id: 'yslogit',
    role: 'Frontend Developer Intern',
    company: 'Yslogit',
    period: 'Jan 2025 — Jun 2025',
    highlights: [
      'Developed responsive and scalable user interfaces using React.js, JavaScript, and Tailwind CSS.',
      'Implemented new features and enhanced user experience for an e-commerce platform.',
      'Optimized frontend performance, improving application responsiveness across devices.',
      'Integrated REST APIs and collaborated with cross-functional teams to deliver high-quality solutions.',
      'Built reusable React components and maintained a consistent design system, reducing development time for new features.',
      'Ensured cross-browser compatibility and accessibility standards across all UI components, improving overall product quality.',
    ],
  },
]

export const education = {
  degree: 'B.Tech, Computer Science Engineering',
  school: 'G H Raisoni College of Engineering and Management, Pune',
  period: '2020 — 2024',
}

export const projects = [
  {
    id: 'invoice-ai',
    title: 'Invoice AI Generator',
    description:
      'Full-stack AI-powered invoice generation platform that creates professional invoices from plain English using the Google Gemini API.',
    highlights: [
      'Secure RESTful API with Node.js, Express.js & MongoDB',
      'Clerk auth with role-based access control',
      'Real-time invoice preview & history dashboard',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Clerk', 'Gemini API'],
    liveUrl: 'https://invoice-ai-five-sepia.vercel.app',
    githubUrl: 'https://github.com/utkarshpankar/InvoiceAI',
    featured: true,
    span: 'lg' as const,
    gradient: 'from-violet-600/20 via-fuchsia-500/10 to-transparent',
    icon: 'receipt',
  },
  {
    id: 'genui',
    title: 'GenUI',
    description:
      'AI platform that converts natural language prompts into functional React and Tailwind CSS components instantly via OpenRouter API.',
    highlights: [
      'Live component preview engine with real-time rendering',
      'Multi-model AI for code gen, optimization & TS conversion',
      'Generation history managed via Redux Toolkit',
    ],
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'Tailwind CSS',
      'Redux Toolkit',
      'OpenRouter API',
    ],
    liveUrl: 'https://gen-ui-six-chi.vercel.app',
    githubUrl: 'https://github.com/utkarshpankar/GenUi',
    featured: true,
    span: 'lg' as const,
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    icon: 'sparkles',
  },
]
