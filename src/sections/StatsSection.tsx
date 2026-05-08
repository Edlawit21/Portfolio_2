import CountUp from '../components/CountUp'

export default function StatsSection() {
  return (
    <section id="stats" className="stats section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="stats-grid">
              <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
                <div className="stat-number">
                  <CountUp end={10} durationMs={1000} />
                </div>
                <p className="stat-label">Project Delivered</p>
              </div>
              <div className="stat-item" data-aos="fade-up" data-aos-delay="400">
                <div className="stat-number">
                  <CountUp end={3} durationMs={1000} suffix="+" />
                </div>
                <p className="stat-label">Years of Experience</p>
              </div>
            </div>

            <div className="achievements-row" data-aos="fade-up" data-aos-delay="500">
              <div className="achievement">
                <div className="achievement-icon">
                  <i className="bi bi-trophy" />
                </div>
                <div className="achievement-content">
                  <h4>Top Developer Award</h4>
                  <p>
                    Recognized for delivering high-quality full-stack and mobile applications on time.
                  </p>
                </div>
              </div>

              <div className="achievement">
                <div className="achievement-icon">
                  <i className="bi bi-star" />
                </div>
                <div className="achievement-content">
                  <h4>Client Recognition</h4>
                  <p>Consistently praised for creating scalable, maintainable, and user-friendly solutions.</p>
                </div>
              </div>

              <div className="achievement">
                <div className="achievement-icon">
                  <i className="bi bi-gem" />
                </div>
                <div className="achievement-content">
                  <h4>Innovation</h4>
                  <p>Implemented modern technologies to improve performance and user experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

