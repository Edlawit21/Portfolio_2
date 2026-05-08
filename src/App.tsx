import { useEffect, useMemo } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import AOS from 'aos'

import Header from './components/Header'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import ScrollTopButton from './components/ScrollTopButton'
import HomePage from './pages/HomePage'
import PortfolioDetailsPage from './pages/PortfolioDetailsPage'
import ServiceDetailsPage from './pages/ServiceDetailsPage'
import { navItems, siteProfile, socialLinks } from './data/siteData'
import { useHashScroll } from './hooks/useHashScroll'
import { useScrollSpy } from './hooks/useScrollSpy'

function usePageBodyClass() {
  const location = useLocation()

  useEffect(() => {
    const known = ['index-page', 'portfolio-details-page', 'service-details-page']
    known.forEach((c) => document.body.classList.remove(c))
    if (location.pathname === '/') document.body.classList.add('index-page')
    if (location.pathname.startsWith('/portfolio/')) document.body.classList.add('portfolio-details-page')
    if (location.pathname.startsWith('/services/')) document.body.classList.add('service-details-page')
  }, [location.pathname])
}

export default function App() {
  usePageBodyClass()
  useHashScroll()

  const location = useLocation()
  const sectionIds = useMemo(
    () => ['hero', 'about', 'resume', 'portfolio', 'services', 'contact'],
    [],
  )
  const activeSectionId = useScrollSpy({ sectionIds, offset: 200 })

  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false })
  }, [])

  useEffect(() => {
    AOS.refresh()
  }, [location.pathname, location.hash])

  return (
    <>
      <Preloader />
      <Header
        name={siteProfile.name}
        profileImage={siteProfile.profileImageHeader}
        navItems={navItems}
        socialLinks={socialLinks}
        activeSectionId={location.pathname === '/' ? activeSectionId : null}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetailsPage />} />
        <Route path="/services/:slug" element={<ServiceDetailsPage />} />
        <Route
          path="*"
          element={
            <main className="main">
              <div className="page-title light-background">
                <div className="container">
                  <h1>Page not found</h1>
                </div>
              </div>
            </main>
          }
        />
      </Routes>

      <Footer
        name={siteProfile.name}
        blurb="Full-stack and mobile developer specializing in Java, Spring Boot, and Kotlin for Android. I build performant, secure, and production-ready applications that solve real-world problems."
        socialLinks={socialLinks}
      />
      <ScrollTopButton />
    </>
  )
}
