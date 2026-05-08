import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { testimonials } from '../data/siteData'

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="testimonials-slider">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop
            speed={600}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            navigation
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={t.id}>
                <div className="testimonial-slide" data-aos="fade-up" data-aos-delay={200 + idx * 100}>
                  <div className="testimonial-header">
                    <div className="stars-rating" aria-label="5 star rating">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                    <div className="quote-icon" aria-hidden="true">
                      <i className="bi bi-quote" />
                    </div>
                  </div>
                  <div className="testimonial-body">
                    <p>&quot;{t.quote}&quot;</p>
                  </div>
                  <div className="testimonial-footer">
                    <div className="author-info">
                      <img src={t.avatar} alt={t.authorName} className="author-avatar" loading="lazy" />
                      <div className="author-details">
                        <h4>{t.authorName}</h4>
                        <span className="role">{t.authorRole}</span>
                        <span className="company">{t.authorCompany}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

