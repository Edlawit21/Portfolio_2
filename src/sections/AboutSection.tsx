import { siteProfile } from '../data/siteData'

export default function AboutSection() {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="intro-header text-center" data-aos="fade-up" data-aos-delay="150">
              <h1>Hi, I&apos;m {siteProfile.name}</h1>
              <p className="subtitle">{siteProfile.role}</p>
            </div>

            <div className="main-content-wrapper">
              <div className="row align-items-start">
                <div className="col-lg-4" data-aos="fade-right" data-aos-delay="200">
                  <div className="profile-section">
                    <div className="profile-image-container">
                      <img src={siteProfile.profileImageAbout} className="img-fluid" alt={`${siteProfile.name}`} />
                    </div>
                    <div className="profile-meta">
                      <div className="location">
                        <i className="bi bi-geo-alt" />
                        <span>{siteProfile.location}</span>
                      </div>
                      <div className="status">
                        <div className="status-indicator" />
                        <span>Available for projects</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8" data-aos="fade-left" data-aos-delay="250">
                  <div className="content-area">
                    <div className="story-block">
                      <p className="lead-text">
                        I build software solutions that deliver real business impact. With years of experience in
                        full-stack and mobile development, I help teams turn complex requirements into reliable,
                        scalable, and user-focused applications.
                      </p>
                      <p>
                        My engineering philosophy focuses on clarity, reliability, and real-world impact. I believe
                        great software isn’t just about clean code—it’s about solving meaningful problems and creating
                        lasting value for both users and businesses.
                      </p>
                    </div>

                    <div className="expertise-grid">
                      <div className="expertise-item" data-aos="zoom-in" data-aos-delay="400">
                        <div className="expertise-icon">
                          <i className="bi bi-graph-up" />
                        </div>
                        <div className="expertise-content">
                          <h4>Backend Development</h4>
                          <p>Secure and scalable backend applications.</p>
                        </div>
                      </div>

                      <div className="expertise-item" data-aos="zoom-in" data-aos-delay="350">
                        <div className="expertise-icon">
                          <i className="bi bi-phone" />
                        </div>
                        <div className="expertise-content">
                          <h4>Mobile &amp; Web Development</h4>
                          <p>Responsive interfaces and seamless user experiences.</p>
                        </div>
                      </div>

                      <div className="expertise-item" data-aos="zoom-in" data-aos-delay="300">
                        <div className="expertise-icon">
                          <i className="bi bi-lightbulb" />
                        </div>
                        <div className="expertise-content">
                          <h4>AI Integration</h4>
                          <p>Integrate AI capabilities into business logic.</p>
                        </div>
                      </div>
                    </div>

                    <div className="philosophy-quote" data-aos="fade-up" data-aos-delay="450">
                      <div className="quote-mark">&quot;</div>
                      <p>
                        Good software isn’t about perfection—it's about understanding real user needs, solving practical
                        problems, and constantly learning from how people use what we build.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom-section" data-aos="fade-up" data-aos-delay="500">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="collaboration-text">
                    <h3>Let&apos;s create something amazing together</h3>
                    <p>
                      Whether you need to improve an existing system or build something entirely new, I&apos;d love to help
                      turn your ideas into reliable, scalable, and user-focused software.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="action-buttons">
                    <a href="#portfolio" className="btn-custom primary">
                      View Case Studies
                    </a>
                    <a href="#contact" className="btn-custom secondary">
                      Start a Project
                    </a>
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

