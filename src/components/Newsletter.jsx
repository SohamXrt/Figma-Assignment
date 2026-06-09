import { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="newsletter section" id="contact">
      {/* Purple decorative blob */}
      <div className="newsletter__blob" aria-hidden="true"></div>

      <div className="newsletter__container container fade-in">
        <h2 className="newsletter__title">
          Subscribe to<br />
          our newsletter
        </h2>
        <p className="newsletter__subtitle">
          Get the latest updates and insights delivered to your inbox.
        </p>

        <form className="newsletter__form" onSubmit={handleSubmit} id="newsletter-form">
          <div className="newsletter__input-wrapper">
            <input
              type="email"
              className="newsletter__input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              id="newsletter-email"
            />
            <button type="submit" className="newsletter__submit" id="newsletter-submit">
              {submitted ? '✓ Subscribed!' : 'Subscribe Now'}
            </button>
          </div>
        </form>

        {submitted && (
          <p className="newsletter__success">
            Thank you for subscribing! 🎉
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
