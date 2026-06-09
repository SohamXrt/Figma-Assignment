import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials section">
      <div className="testimonials-wrap container">
        <div className="testimonials-header fade-in">
          <div className="yellow-circle" />
          <h2 className="testimonials-heading">
            What our customer<br />
            says <span className="underline-accent">About Us</span>
          </h2>
        </div>

        <div className="testimonials-content">
          <div className="quote-card fade-in-left">
            <div className="quote-mark" aria-hidden="true">"</div>
            <blockquote>
              <p>
                Remarkably talented and professional team! Working with them is like
                having your own extended team. The quality of work, attention to detail,
                and commitment to delivering on time is truly impressive. They've been an
                invaluable partner in our digital transformation journey, consistently going
                above and beyond our expectations.
              </p>
            </blockquote>
            <div className="author">
              <h4>Rajesh Kumar</h4>
              <p>CEO, TechVista Solutions</p>
            </div>
          </div>

          <div className="avatar-side fade-in-right">
            <div className="avatar-img">
              <img src="/images/testimonial-person.png" alt="Rajesh Kumar" loading="lazy" />
            </div>
            <div className="dot-pink" />
            <div className="dot-purple" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
