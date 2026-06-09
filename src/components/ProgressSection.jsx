import './ProgressSection.css';

const ProgressSection = () => {
  return (
    <section className="progress section">
      {/* Decorative wavy line */}
      <svg className="progress__wave-line" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path 
          d="M-10 100C150 20 300 180 500 100C700 20 850 180 1050 100C1250 20 1350 180 1460 100" 
          stroke="var(--color-pink-light)" 
          strokeWidth="2" 
          strokeLinecap="round"
          fill="none"
          className="progress__wave-path"
        />
      </svg>

      <div className="progress__container container">
        <div className="progress__image-wrapper fade-in-left">
          <div className="progress__image-circle">
            <img 
              src="/images/team-collaboration.png" 
              alt="Team members collaborating" 
              loading="lazy" 
            />
          </div>
        </div>

        <div className="progress__content fade-in-right">
          <h2 className="progress__title">
            See how we can<br />
            help you progress
          </h2>
          <p className="progress__text">
            Our expert teams bring fresh perspectives and proven methodologies that 
            empower your business to evolve. From strategy to execution, we walk beside 
            you every step of the way to deliver measurable growth.
          </p>
          <a href="#" className="progress__cta" id="progress-read-more">Read more</a>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
