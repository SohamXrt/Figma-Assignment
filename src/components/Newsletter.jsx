import { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail('');
    setTimeout(() => setDone(false), 3000);
  };

  return (
    <section className="newsletter section" id="contact">
      <div className="purple-blob" />

      <div className="newsletter-inner container fade-in">
        <h2 className="newsletter-title">
          Subscribe to<br />
          our newsletter
        </h2>
        <p className="newsletter-sub">
          Get the latest updates and insights delivered to your inbox.
        </p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">
              {done ? '✓ Subscribed!' : 'Subscribe Now'}
            </button>
          </div>
        </form>

        {done && <p className="success-msg">Thank you for subscribing! 🎉</p>}
      </div>
    </section>
  );
}

export default Newsletter;
