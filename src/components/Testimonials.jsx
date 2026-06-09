import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials section">
      <div className="testimonials__container container">
        <div className="testimonials__header fade-in">
          <div className="testimonials__header-circle" aria-hidden="true"></div>
          <h2 className="testimonials__title">
            What our customer<br />
            says <span className="testimonials__highlight">About Us</span>
          </h2>
        </div>

        <div className="testimonials__content">
          <div className="testimonials__card fade-in-left">
            <div className="testimonials__quote-mark" aria-hidden="true">"</div>
            <blockquote className="testimonials__text">
              <p>
                Remarkably talented and professional team! Working with them is like 
                having your own extended team. The quality of work, attention to detail, 
                and commitment to delivering on time is truly impressive. They've been an 
                invaluable partner in our digital transformation journey, consistently going 
                above and beyond our expectations.
              </p>
            </blockquote>
            <div className="testimonials__author">
              <div className="testimonials__author-info">
                <h4 className="testimonials__author-name">Rajesh Kumar</h4>
                <p className="testimonials__author-role">CEO, TechVista Solutions</p>
              </div>
            </div>
          </div>

          <div className="testimonials__avatar-wrapper fade-in-right">
            <div className="testimonials__avatar-large">
              <img 
                src="/images/testimonial-person.png" 
                alt="Rajesh Kumar, CEO of TechVista Solutions" 
                loading="lazy" 
              />
            </div>
            {/* Decorative elements around avatar */}
            <div className="testimonials__avatar-accent testimonials__avatar-accent--top" aria-hidden="true"></div>
            <div className="testimonials__avatar-accent testimonials__avatar-accent--bottom" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
