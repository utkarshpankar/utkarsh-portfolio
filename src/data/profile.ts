export const profile = {
  name: 'Utkarsh Pankar',
  initials: 'UP',
  role: 'Full-Stack Web Developer',
  subtitle: 'React.js & Node.js',
  tagline: 'Building scalable full-stack',
  taglineAccent: 'apps & AI solutions.',
  bio: 'Full-Stack Developer with expertise in React.js, Node.js, Express.js, and MongoDB — experienced in building responsive UIs, RESTful APIs, and scalable web applications with AI-powered products on Vercel and Render.',
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
    file: '/resume/Utkarsh_Pankar_Resume_ATS.docx',
    fileName: 'Utkarsh_Pankar_Resume_ATS.docx',
    description:
      'Full-Stack Developer with expertise in React.js, Node.js, Express.js, and MongoDB — experienced in responsive UIs, RESTful APIs, and AI-powered products integrated with Gemini and OpenRouter APIs.',
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
    category: 'APIs & AI Integration',
    items: ['REST APIs', 'Google Gemini API', 'OpenRouter API'],
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
      'Claude AI',
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
      'Engineered responsive, scalable UI components for a production e-commerce platform using React.js, JavaScript, and Tailwind CSS, ensuring seamless cross-device compatibility.',
      'Architected a library of reusable React components and maintained a consistent design system, accelerating new-feature delivery and improving code maintainability.',
      'Collaborated with backend engineers and cross-functional teams to integrate RESTful APIs, enabling end-to-end feature delivery in an agile development environment.',
      'Optimized frontend performance through code splitting and lazy loading; enforced cross-browser compatibility and WCAG accessibility standards across all UI components.',
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
      'Full-stack AI-powered invoice generation platform leveraging Google Gemini API to auto-generate professional invoices from plain-English user input.',
    highlights: [
      'Secure RESTful API with full CRUD operations via Node.js, Express.js & MongoDB',
      'Clerk-based authentication with role-based access control',
      'React.js frontend with real-time invoice preview; deployed on Vercel and Render',
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
      'Full-stack generative AI platform that transforms natural language prompts into production-ready React and Tailwind CSS components in real time via OpenRouter API.',
    highlights: [
      'Multi-LLM integration for code generation, optimization, TypeScript conversion & explanation',
      'Live in-browser component preview engine with Redux Toolkit state management',
      'Deployed full-stack application on Vercel and Render',
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
