import { useState } from 'react'
import { siteProfile } from '../data/siteData'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const mailto = new URL(`mailto:${siteProfile.email}`)
      mailto.searchParams.set('subject', form.subject || 'Portfolio contact')
      mailto.searchParams.set(
        'body',
        `From: ${form.name} <${form.email}>\n\n${form.message}\n`,
      )
      window.location.href = mailto.toString()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          If you have a project, idea, or collaboration in mind, feel free to reach out. I’m always excited to connect
          and build innovative solutions.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-item">
              <div className="info-icon">
                <i className="bi bi-chat-dots" />
              </div>
              <div className="info-content">
                <h4>Let&apos;s Connect</h4>
                <p>I&apos;m here to discuss your vision and explore how we can bring it to life together.</p>
              </div>
            </div>

            <div className="contact-details">
              <div className="detail-item">
                <div className="detail-icon">
                  <i className="bi bi-envelope-open" />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Email me</span>
                  <span className="detail-value">{siteProfile.email}</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <i className="bi bi-telephone-outbound" />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Call me</span>
                  <span className="detail-value">{siteProfile.phone}</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <i className="bi bi-geo-alt-fill" />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">{siteProfile.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="form-wrapper">
              <div className="form-header">
                <h3>Send a message</h3>
              </div>

              <form onSubmit={submit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="contactName">Full Name</label>
                      <input
                        id="contactName"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        required
                        autoComplete="name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="contactEmail">Email Address</label>
                      <input
                        id="contactEmail"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    id="contactSubject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contactMessage">Message</label>
                  <textarea
                    id="contactMessage"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    required
                  />
                </div>

                <div className="my-3" aria-live="polite">
                  <div className="loading" style={{ display: status === 'sending' ? 'block' : 'none' }}>
                    Loading
                  </div>
                  <div className="error-message" style={{ display: status === 'error' ? 'block' : 'none' }}>
                    Something went wrong. Please try again.
                  </div>
                  <div className="sent-message" style={{ display: status === 'sent' ? 'block' : 'none' }}>
                    Your message is ready to send. Thank you!
                  </div>
                </div>

                <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                  <span>Send Message</span>
                  <i className="bi bi-arrow-right" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

