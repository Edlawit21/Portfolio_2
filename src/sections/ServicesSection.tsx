import { Link } from 'react-router-dom'

const services = [
  {
    id: 'brand-identity',
    icon: 'bi bi-palette',
    title: 'Brand Identity Design',
    description:
      "Crafting distinctive visual identities that capture your brand's essence and connect with your target audience through thoughtful design systems.",
  },
  {
    id: 'web-development',
    icon: 'bi bi-code-slash',
    title: 'Web Development',
    description:
      'Building modern, responsive websites and applications with clean code, optimal performance, and seamless user experiences across devices.',
  },
  {
    id: 'ui-ux',
    icon: 'bi bi-phone',
    title: 'UI/UX Design',
    description:
      'Designing intuitive interfaces and user experiences that balance aesthetics with functionality, ensuring every interaction feels natural.',
  },
  {
    id: 'digital-strategy',
    icon: 'bi bi-megaphone',
    title: 'Digital Strategy',
    description:
      'Developing comprehensive digital strategies that align with your business goals and maximize your online presence through data-driven insights.',
  },
] as const

export default function ServicesSection() {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Professional services tailored to build high-quality, user-focused digital products.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-5">
          {services.map((s, idx) => (
            <div
              key={s.id}
              className="col-lg-6"
              data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={200 + idx * 50}
            >
              <div className="service-item">
                <div className="service-icon">
                  <i className={s.icon} />
                </div>
                <div className="service-content">
                  <h3>
                    <Link to={`/services/${s.id}`}>{s.title}</Link>
                  </h3>
                  <p>{s.description}</p>
                  <Link to={`/services/${s.id}`} className="read-more">
                    <span>Learn More</span>
                    <i className="bi bi-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

