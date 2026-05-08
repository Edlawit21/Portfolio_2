import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { portfolioFilters, portfolioItems } from '../data/siteData'

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof portfolioFilters)[number]['key']>('*')

  const filtered = useMemo(() => {
    if (activeFilter === '*') return portfolioItems
    return portfolioItems.filter((p) => p.filterKey === activeFilter)
  }, [activeFilter])

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Explore a collection of projects showcasing my expertise in Java, Spring Boot, Kotlin for Android, and modern
          web development. From backend architectures to mobile applications, each project reflects a focus on clean
          code, performance, and real-world impact.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="filters-wrapper" data-aos="fade-up" data-aos-delay="200">
          <ul className="portfolio-filters isotope-filters" role="tablist" aria-label="Portfolio filters">
            {portfolioFilters.map((f) => (
              <li
                key={f.key}
                role="tab"
                aria-selected={activeFilter === f.key}
                className={activeFilter === f.key ? 'filter-active' : undefined}
                onClick={() => setActiveFilter(f.key)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setActiveFilter(f.key)
                }}
                tabIndex={0}
              >
                {f.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="row gy-5 portfolio-container" data-aos="fade-up" data-aos-delay="300">
          {filtered.map((item) => (
            <div key={item.id} className="col-lg-6 portfolio-item">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={item.image} className="img-fluid" alt={item.title} loading="lazy" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <Link to={item.detailsPath} className="action-btn details-btn" title="View Project">
                        <i className="bi bi-arrow-up-right" />
                      </Link>
                      {item.externalUrl ? (
                        <a
                          href={item.externalUrl}
                          className="action-btn preview-btn"
                          title="Visit project"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bi bi-box-arrow-up-right" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <div className="portfolio-meta">
                    <span className="portfolio-category">{item.categoryLabel}</span>
                    <span className="portfolio-year">{item.year}</span>
                  </div>
                  <h3 className="portfolio-title">{item.title}</h3>
                  <p className="portfolio-description">{item.description}</p>
                  {item.externalUrl ? (
                    <a href={item.externalUrl} target="_blank" rel="noreferrer">
                      Visit it
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

