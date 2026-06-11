import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { Contact } from './components/sections/Contact'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'

function App() {
  return (
    <div className="relative min-h-svh bg-surface text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
