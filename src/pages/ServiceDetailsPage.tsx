import { Link, useParams } from 'react-router-dom'

const serviceDetails: Record<
  string,
  { title: string; lead: string; body: string[]; features: Array<{ icon: string; title: string; text: string }> }
> = {
  'brand-identity': {
    title: 'Brand Identity Design',
    lead: 'Distinctive visual identities that communicate your brand clearly and consistently.',
    body: [
      "A strong brand identity is more than a logo—it's a system. I design cohesive visual foundations that scale across products, marketing, and internal materials.",
      'Deliverables typically include logo exploration, typography, color system, iconography, and key templates.',
    ],
    features: [
      { icon: 'bi bi-grid', title: 'Design system', text: 'Reusable components and consistent guidelines.' },
      { icon: 'bi bi-palette', title: 'Color & type', text: 'Modern palettes and readable typography.' },
      { icon: 'bi bi-lightning', title: 'Fast delivery', text: 'Iterative milestones with clear reviews.' },
    ],
  },
  'web-development': {
    title: 'Web Development',
    lead: 'Modern, responsive websites and applications with clean code and great UX.',
    body: [
      'I build performant frontends and production-ready backends, focusing on maintainability, accessibility, and speed.',
      'From landing pages to full applications, the goal is always a smooth user experience and robust engineering.',
    ],
    features: [
      { icon: 'bi bi-speedometer2', title: 'Performance', text: 'Optimized loading and smooth interactions.' },
      { icon: 'bi bi-shield-check', title: 'Security', text: 'Best practices for modern web security.' },
      { icon: 'bi bi-phone', title: 'Responsive', text: 'Pixel-perfect across devices.' },
    ],
  },
  'ui-ux': {
    title: 'UI/UX Design',
    lead: 'Interfaces that feel natural, look modern, and support real user goals.',
    body: [
      'I design flows, screens, and interaction patterns that reduce friction and improve clarity.',
      'UX is validated through iterative feedback loops and grounded in product constraints.',
    ],
    features: [
      { icon: 'bi bi-layout-text-window', title: 'UI kits', text: 'Reusable UI patterns and components.' },
      { icon: 'bi bi-diagram-3', title: 'User flows', text: 'Clear paths for key tasks and journeys.' },
      { icon: 'bi bi-graph-up', title: 'Outcomes', text: 'Design choices mapped to measurable goals.' },
    ],
  },
  'digital-strategy': {
    title: 'Digital Strategy',
    lead: 'Practical plans to improve your product, workflows, and online presence.',
    body: [
      'A good strategy connects goals to execution. I help you prioritize the right initiatives and ship incrementally.',
      'Typical work includes audits, KPI definition, roadmap planning, and architecture recommendations.',
    ],
    features: [
      { icon: 'bi bi-bullseye', title: 'Clarity', text: 'Define goals and success metrics upfront.' },
      { icon: 'bi bi-kanban', title: 'Roadmaps', text: 'Break work into milestones and releases.' },
      { icon: 'bi bi-cpu', title: 'Architecture', text: 'Sound technical direction for growth.' },
    ],
  },
}

export default function ServiceDetailsPage() {
  const { slug } = useParams()
  const service = (slug && serviceDetails[slug]) || null

  if (!service) {
    return (
      <main className="main">
        <div className="page-title light-background">
          <div className="container">
            <h1>Service not found</h1>
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

  return (
    <main className="main">
      <div className="page-title light-background">
        <div className="container">
          <h1>{service.title}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">{service.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="service-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-8 service-content">
              <div className="service-hero">
                <h2>{service.title}</h2>
                <p className="lead">{service.lead}</p>
              </div>

              <div className="service-description">
                {service.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <div className="features-list">
                  {service.features.map((f) => (
                    <div key={f.title} className="feature-item">
                      <i className={f.icon} />
                      <div>
                        <h4>{f.title}</h4>
                        <p>{f.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-4 service-sidebar">
              <div className="service-info">
                <h4>Service info</h4>
                <ul className="info-list">
                  <li>
                    <strong>Delivery:</strong> 2–4 weeks
                  </li>
                  <li>
                    <strong>Collaboration:</strong> Async + weekly check-ins
                  </li>
                  <li>
                    <strong>Outputs:</strong> Documentation + assets
                  </li>
                </ul>
              </div>
              <div className="cta-block">
                <h4>Want to work together?</h4>
                <p>Send a message and I’ll respond quickly with next steps.</p>
                <Link className="btn btn-primary" to="/#contact">
                  Contact
                </Link>
                <Link className="btn btn-outline" to="/">
                  Back home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

