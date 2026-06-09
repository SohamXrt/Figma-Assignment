import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container container">
        <div className="footer__grid">
          {/* Company */}
          <div className="footer__column">
            <h4 className="footer__column-title">Company</h4>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Home</a></li>
              <li><a href="#" className="footer__link">About</a></li>
              <li><a href="#" className="footer__link">Team</a></li>
              <li><a href="#" className="footer__link">Careers</a></li>
            </ul>
          </div>

          {/* Online Platforms */}
          <div className="footer__column">
            <h4 className="footer__column-title">Online Platforms</h4>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Dribbble</a></li>
              <li><a href="#" className="footer__link">Behance</a></li>
              <li><a href="#" className="footer__link">Instagram</a></li>
              <li><a href="#" className="footer__link">Medium</a></li>
            </ul>
          </div>

          {/* Affiliates */}
          <div className="footer__column">
            <h4 className="footer__column-title">Affiliates</h4>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Looper</a></li>
              <li><a href="#" className="footer__link">Jestate</a></li>
              <li><a href="#" className="footer__link">Flavor</a></li>
              <li><a href="#" className="footer__link">Flavor</a></li>
            </ul>
          </div>

          {/* Social & Location */}
          <div className="footer__column">
            <h4 className="footer__column-title">Social & Location</h4>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">contact_us@flavorest.com</a></li>
              <li><a href="#" className="footer__link">San Francisco, CA</a></li>
              <li><a href="#" className="footer__link">+1 (555) 012-3456</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Flavor'est. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
