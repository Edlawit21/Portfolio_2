import { Link, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { portfolioItems } from '../data/siteData'

export default function PortfolioDetailsPage() {
  const { slug } = useParams()
  const project = portfolioItems.find((p) => p.id === slug)

  if (!project) {
    return (
      <main className="main">
        <div className="page-title light-background">
          <div className="container">
            <h1>Project not found</h1>
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="current">Not found</li>
              </ol>
            </nav>
          </div>
        </div>
      </main>
    )
  }

  const gallery = project.gallery?.length ? project.gallery : [project.image]

  return (
    <main className="main">
      <div className="page-title light-background">
        <div className="container">
          <h1>Portfolio Details</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">{project.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="portfolio-details" className="portfolio-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="hero-section">
            <div className="row align-items-center">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="project-header">
                  <div className="project-meta">
                    <span className="category">{project.categoryLabel}</span>
                    <span className="year">{project.year}</span>
                  </div>
                  <h1 className="project-title">{project.title}</h1>
                  <p className="project-summary">{project.description}</p>
                  <div className="project-tags">
                    <span className="tag">{project.categoryLabel}</span>
                    <span className="tag">Full-stack</span>
                    <span className="tag">Performance</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
                <div className="hero-image">
                  <img src={project.image} alt={project.title} className="img-fluid" loading="lazy" />
                </div>
              </div>
            </div>
          </div>

          <div className="additional-gallery" data-aos="fade-up" data-aos-delay="100">
            <div className="gallery-slider">
              <Swiper
                modules={[Pagination, Autoplay]}
                loop
                speed={600}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{ 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }}
                pagination={{ clickable: true }}
              >
                {gallery.map((img) => (
                  <SwiperSlide key={img}>
                    <img src={img} alt={`${project.title} screenshot`} className="img-fluid" loading="lazy" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="project-nav" data-aos="fade-up" data-aos-delay="100">
            <div className="nav-wrapper">
              <Link to="/" className="nav-link all-projects">
                <i className="bi bi-grid-3x3-gap" />
                <span>Back to Home</span>
              </Link>
              {project.externalUrl ? (
                <a className="nav-link next-project" href={project.externalUrl} target="_blank" rel="noreferrer">
                  <div className="nav-content">
                    <span className="nav-direction">Live</span>
                    <span className="nav-title">Visit project →</span>
                  </div>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

