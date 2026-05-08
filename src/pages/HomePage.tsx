import AboutSection from '../sections/AboutSection'
import ContactSection from '../sections/ContactSection'
import HeroSection from '../sections/HeroSection'
import PortfolioSection from '../sections/PortfolioSection'
import ResumeSection from '../sections/ResumeSection'
import ServicesSection from '../sections/ServicesSection'
import SkillsSection from '../sections/SkillsSection'
import StatsSection from '../sections/StatsSection'
import TestimonialsSection from '../sections/TestimonialsSection'

export default function HomePage() {
  return (
    <main className="main">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <SkillsSection />
      <ResumeSection />
      <PortfolioSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}

