import './OfferSection.css';

const offers = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#F3E8FF"/>
        <path d="M20 12L28 20L20 28L12 20L20 12Z" fill="#7C4DFF"/>
        <circle cx="20" cy="20" r="4" fill="#E8D5FF"/>
      </svg>
    ),
    title: 'Collaborative & partnership',
    desc: 'Client-first focus, result oriented',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#FFF3E0"/>
        <path d="M14 26V18H18V26H14ZM18 26V14H22V26H18ZM22 26V20H26V26H22Z" fill="#FF9800"/>
      </svg>
    ),
    title: 'We talk about our weight',
    desc: 'Transparent, lift others, inspire growth',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#E8F5E9"/>
        <circle cx="20" cy="18" r="6" fill="#4CAF50"/>
        <path d="M12 28C12 24 16 22 20 22C24 22 28 24 28 28" stroke="#4CAF50" strokeWidth="2" fill="none"/>
      </svg>
    ),
    title: 'Piloting digital confidence',
    desc: 'Lead the way in digital transformation',
  },
];

function OfferSection() {
  return (
    <section className="offers section" id="team">
      <div className="offers-wrap container">
        <h2 className="offers-title fade-in">
          What we can<br />
          offer you!
        </h2>

        <div className="offers-list">
          {offers.map((item, i) => (
            <div key={i} className="offer-item fade-in">
              <div className="offer-icon">{item.icon}</div>
              <div className="offer-text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <div className="offer-line" />
            </div>
          ))}
        </div>
      </div>

      <svg className="wavy-line" viewBox="0 0 1440 100" fill="none" aria-hidden="true">
        <path
          d="M0 50C240 10 480 90 720 50C960 10 1200 90 1440 50"
          stroke="var(--color-pink-light)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
      </svg>
    </section>
  );
}

export default OfferSection;
