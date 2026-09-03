import { Layout } from '@/components/layout/Layout'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Certifications } from '@/components/sections/Certifications'
import { Education } from '@/components/sections/Education'
import { Volunteer } from '@/components/sections/Volunteer'
import { Contact } from '@/components/sections/Contact'

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Education />
      <Volunteer />
      <Contact />
    </Layout>
  )
}

export default App