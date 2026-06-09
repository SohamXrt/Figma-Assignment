import './Hero.css';

const Hero = () => {
  return (
    <section className="hero section" id="home">
      {/* Decorative shapes */}
      <div className="hero__shape hero__shape--circle-outline" aria-hidden="true"></div>
      <div className="hero__shape hero__shape--purple-blob" aria-hidden="true"></div>
      <div className="hero__shape hero__shape--pink-dot" aria-hidden="true"></div>
      <div className="hero__shape hero__shape--pink-ring" aria-hidden="true"></div>

      <div className="hero__container container">
        <div className="hero__content fade-in">
          <h1 className="hero__title">
            The thinkers and<br />
            doers were changing<br />
            the status Quo with
          </h1>
          <p className="hero__subtitle">
            We are the change enablers, the problem solvers, the creative minds who
            collaborate with you to transform businesses and deliver exceptional results.
          </p>
        </div>

        <div className="hero__team fade-in">
          <div className="hero__team-row">
            {/* Top row - 3 larger photos with decorative accents */}
            <div className="hero__team-member hero__team-member--lg">
              <div className="hero__member-accent hero__member-accent--pink" aria-hidden="true"></div>
              <div 
                className="hero__team-photo" 
                style={{
                  backgroundImage: `url('/images/team-photos.png')`,
                  backgroundPosition: `2% 30%`,
                  backgroundSize: '600% auto',
                }}
                role="img"
                aria-label="Team member 1"
              />
            </div>
            <div className="hero__team-member hero__team-member--md">
              <div 
                className="hero__team-photo" 
                style={{
                  backgroundImage: `url('/images/team-photos.png')`,
                  backgroundPosition: `20% 30%`,
                  backgroundSize: '600% auto',
                }}
                role="img"
                aria-label="Team member 2"
              />
            </div>
            <div className="hero__team-member hero__team-member--lg">
              <div className="hero__member-accent hero__member-accent--orange" aria-hidden="true"></div>
              <div 
                className="hero__team-photo" 
                style={{
                  backgroundImage: `url('/images/team-photos.png')`,
                  backgroundPosition: `40% 30%`,
                  backgroundSize: '600% auto',
                }}
                role="img"
                aria-label="Team member 3"
              />
            </div>
          </div>

          <div className="hero__team-row hero__team-row--bottom">
            {/* Bottom row - 3 photos */}
            <div className="hero__team-member hero__team-member--md">
              <div 
                className="hero__team-photo" 
                style={{
                  backgroundImage: `url('/images/team-photos.png')`,
                  backgroundPosition: `60% 30%`,
                  backgroundSize: '600% auto',
                }}
                role="img"
                aria-label="Team member 4"
              />
            </div>
            <div className="hero__team-member hero__team-member--sm">
              <div className="hero__member-accent hero__member-accent--purple" aria-hidden="true"></div>
              <div 
                className="hero__team-photo" 
                style={{
                  backgroundImage: `url('/images/team-photos.png')`,
                  backgroundPosition: `80% 30%`,
                  backgroundSize: '600% auto',
                }}
                role="img"
                aria-label="Team member 5"
              />
            </div>
            <div className="hero__team-member hero__team-member--md">
              <div 
                className="hero__team-photo" 
                style={{
                  backgroundImage: `url('/images/team-photos.png')`,
                  backgroundPosition: `98% 30%`,
                  backgroundSize: '600% auto',
                }}
                role="img"
                aria-label="Team member 6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
