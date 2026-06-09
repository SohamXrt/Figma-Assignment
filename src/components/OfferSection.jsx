import './OfferSection.css';

const offers = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#F3E8FF"/>
        <path d="M20 12L28 20L20 28L12 20L20 12Z" fill="#7C4DFF"/>
        <circle cx="20" cy="20" r="4" fill="#E8D5FF"/>
      </svg>
    ),
    title: 'Collaborative & partnership',
    description: 'Client-first focus, result oriented',
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#FFF3E0"/>
        <path d="M14 26V18H18V26H14ZM18 26V14H22V26H18ZM22 26V20H26V26H22Z" fill="#FF9800"/>
      </svg>
    ),
    title: 'We talk about our weight',
    description: 'Transparent, lift others, inspire growth',
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#E8F5E9"/>
        <circle cx="20" cy="18" r="6" fill="#4CAF50"/>
        <path d="M12 28C12 24 16 22 20 22C24 22 28 24 28 28" stroke="#4CAF50" strokeWidth="2" fill="none"/>
      </svg>
    ),
    title: 'Piloting digital confidence',
    description: 'Lead the way in digital transformation',
  },
];

const OfferSection = () => {
  return (
    <section className="offer section" id="team">
      <div className="offer__container container">
        <h2 className="offer__title fade-in">
          What we can<br />
          offer you!
        </h2>

        <div className="offer__list">
          {offers.map((offer, index) => (
            <div 
              key={offer.id} 
              className="offer__item fade-in"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="offer__item-icon">
                {offer.icon}
              </div>
              <div className="offer__item-content">
                <h3 className="offer__item-title">{offer.title}</h3>
                <p className="offer__item-desc">{offer.description}</p>
              </div>
              <div className="offer__item-line"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative wavy line */}
      <svg className="offer__decoration" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
};

export default OfferSection;
