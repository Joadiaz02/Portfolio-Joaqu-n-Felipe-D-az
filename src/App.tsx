import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { TechnologiesSection } from './sections/TechnologiesSection'
import { SkillsSection } from './sections/SkillsSection'
import { EducationSection } from './sections/EducationSection'
import { CertificatesSection } from './sections/CertificatesSection'
import { ResumeSection } from './sections/ResumeSection'
import { ContactSection } from './sections/ContactSection'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>
      <Header />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TechnologiesSection />
        <SkillsSection />
        <EducationSection />
        <CertificatesSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
