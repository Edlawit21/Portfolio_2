import { siteProfile } from '../data/siteData'

export default function HeroSection() {
  return (
    <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="hero-content">
              <h1 data-aos="fade-up" data-aos-delay="200">
                Fullstack &amp; <span className="accent-text">Mobile Developer</span>
              </h1>
              <p className="hero-description" data-aos="fade-up" data-aos-delay="300">
                Crafting digital experiences that are fast, intuitive, and scalable. I blend strong backend logic with
                clean, user-focused interfaces to build products that feel great and work flawlessly.
              </p>
              <div className="hero-actions" data-aos="fade-up" data-aos-delay="400">
                <a href="#portfolio" className="btn-primary">
                  View My Work
                </a>
                <a href="#contact" className="btn-secondary">
                  Get In Touch
                </a>
              </div>
              <div className="hero-stats" data-aos="fade-up" data-aos-delay="500">
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2">
            <div className="hero-image" data-aos="fade-up" data-aos-delay="300">
              <div className="image-wrapper">
                <img
                  src={siteProfile.heroImage}
                  alt="Developer portrait"
                  className="img-fluid main-image"
                  loading="eager"
                />
                <div className="floating-card card-1" data-aos="fade-up" data-aos-delay="600">
                  <i className="bi bi-palette" />
                  <span>Mobile App Development</span>
                </div>
                <div className="floating-card card-2" data-aos="fade-up" data-aos-delay="700">
                  <i className="bi bi-code-square" />
                  <span>Web Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

