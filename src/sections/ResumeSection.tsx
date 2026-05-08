export default function ResumeSection() {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          Full-stack and mobile developer specializing in Java, Spring Boot, Spring AI, and Kotlin for Android.
          Experienced in building robust, scalable applications and delivering innovative solutions that solve real-world
          problems.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-start">
          <div className="col-lg-5" data-aos="fade-right" data-aos-delay="200">
            <div className="professional-journey">
              <div className="section-intro">
                <div className="icon-wrapper">
                  <i className="bi bi-briefcase-fill" />
                </div>
                <h2>Professional Experience</h2>
                <p>
                  Focused on building secure, scalable, and high-performance systems for enterprise environments.
                </p>
              </div>

              <div className="experience-timeline">
                <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <div className="position-meta">
                      <span className="timeline-year">April 2025 – Present</span>
                    </div>
                    <h3>Software Engineer</h3>
                    <h4>Development Bank of Ethiopia</h4>
                    <p>
                      Architected and developed backend services for the core Asset Management System using Spring Boot.
                      Built JWT-secured REST APIs with role-based permissions and optimized database queries.
                    </p>
                    <div className="key-achievements">
                      <span className="achievement-tag">Spring Boot</span>
                      <span className="achievement-tag">JWT Security</span>
                      <span className="achievement-tag">Clean Architecture</span>
                    </div>
                  </div>
                </div>

                <div className="timeline-item" data-aos="fade-up" data-aos-delay="400">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <div className="position-meta">
                      <span className="timeline-year">February 2025 – March 2025</span>
                    </div>
                    <h3>Network &amp; Systems Engineer</h3>
                    <h4>China CITIC</h4>
                    <p>
                      Maintained secure radio communication systems and deployed thin clients across schools. Configured
                      servers and virtual desktops for low-bandwidth environments.
                    </p>
                    <div className="key-achievements">
                      <span className="achievement-tag">Infrastructure</span>
                      <span className="achievement-tag">VDI Deployment</span>
                      <span className="achievement-tag">Network Security</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="200">
            <div className="education-skills">
              <div className="section-intro">
                <div className="icon-wrapper">
                  <i className="bi bi-mortarboard-fill" />
                </div>
                <h2>Education &amp; Qualifications</h2>
                <p>
                  Bachelor of Science in Software Engineering from Mekelle University with a strong academic record and
                  practical experience.
                </p>
              </div>

              <div className="education-grid">
                <div className="education-card primary" data-aos="zoom-in" data-aos-delay="300">
                  <div className="education-header">
                    <div className="degree-icon">
                      <i className="bi bi-award" />
                    </div>
                    <div className="degree-info">
                      <h3>Bachelor of Science in Software Engineering</h3>
                      <p className="institution">Mekelle University</p>
                      <span className="graduation-year">2018 - 2024</span>
                    </div>
                  </div>
                  <div className="education-details">
                    <p>
                      Graduated with a CGPA of 3.91/4.00, gaining extensive knowledge in backend development and AI
                      integration.
                    </p>
                    <span className="honor-badge">Magna Cum Laude</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

