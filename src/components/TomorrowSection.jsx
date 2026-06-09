import './TomorrowSection.css';

const TomorrowSection = () => {
  return (
    <section className="tomorrow section" id="about">
      <div className="tomorrow__container container">
        <div className="tomorrow__content fade-in-left">
          <h2 className="tomorrow__title">
            Tomorrow should<br />
            be better than today
          </h2>
          <p className="tomorrow__text">
            Our vision is to build a more promising and innovative future. 
            Through strategic thinking, creative solutions, and relentless ambition,
            we help organizations unlock their true potential and create lasting impact.
          </p>
          <a href="#" className="tomorrow__link">Learn more →</a>
        </div>

        <div className="tomorrow__image-wrapper fade-in-right">
          <div className="tomorrow__image-circle">
            <img 
              src="/images/business-meeting.png" 
              alt="Business team collaborating in meeting" 
              loading="lazy" 
            />
          </div>
          {/* Red triangle decoration */}
          <div className="tomorrow__triangle" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
};

export default TomorrowSection;
