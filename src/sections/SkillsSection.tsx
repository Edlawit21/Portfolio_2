import { useInView } from '../hooks/useInView'

type SkillRowProps = {
  label: string
  percent: number
  animate: boolean
}

function SkillRow({ label, percent, animate }: SkillRowProps) {
  return (
    <div className="skill-row">
      <div className="skill-info">
        <span className="skill-name">{label}</span>
        <span className="skill-percentage" aria-hidden="true" />
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: animate ? `${percent}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: '0px 0px -20% 0px' })

  return (
    <section id="skills" className="skills section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>
          I specialize in building robust web and mobile applications using Java and Spring Boot for backend development,
          integrating intelligent solutions, and creating Android applications with Kotlin.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="intro-content text-center mb-5" data-aos="fade-up" data-aos-delay="150">
              <p className="lead-text">
                Committed to honing skills through real-world projects and constant improvement in software engineering.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="skills-container" ref={ref}>
              <div className="skill-category skills-animation" data-aos="fade-up" data-aos-delay="200">
                <div className="category-header">
                  <h3 className="category-title">Technical Expertise</h3>
                  <p className="category-subtitle">Core development and technical skills</p>
                </div>
                <div className="skills-list">
                  <SkillRow label="Full-Stack Development" percent={100} animate={inView} />
                  <SkillRow label="Mobile Development" percent={100} animate={inView} />
                  <SkillRow label="Database Design" percent={100} animate={inView} />
                </div>
              </div>

              <div className="skill-category skills-animation" data-aos="fade-up" data-aos-delay="250">
                <div className="category-header">
                  <h3 className="category-title">Development Skills</h3>
                  <p className="category-subtitle">Backend, web, and mobile application development</p>
                </div>
                <div className="skills-list">
                  <SkillRow label="Java" percent={100} animate={inView} />
                  <SkillRow label="Spring Boot" percent={100} animate={inView} />
                  <SkillRow label="Kotlin (Android)" percent={100} animate={inView} />
                </div>
              </div>

              <div className="skill-category skills-animation" data-aos="fade-up" data-aos-delay="300">
                <div className="category-header">
                  <h3 className="category-title">Software Engineering</h3>
                  <p className="category-subtitle">System design, architecture, and project execution</p>
                </div>
                <div className="skills-list">
                  <SkillRow label="System Architecture" percent={100} animate={inView} />
                  <SkillRow label="Project Management" percent={100} animate={inView} />
                  <SkillRow label="Agile & Team Coordination" percent={100} animate={inView} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="skills-sidebar">
              <div className="expertise-highlight" data-aos="fade-up" data-aos-delay="350">
                <div className="highlight-icon">
                  <i className="bi bi-trophy" />
                </div>
                <h4 className="highlight-title">Years of Experience</h4>
                <div className="experience-number">
                  <span className="purecounter">3</span>
                  <span className="experience-label">Years</span>
                </div>
                <p className="highlight-description">
                  Dedicated to mastering the craft of building robust, scalable applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

