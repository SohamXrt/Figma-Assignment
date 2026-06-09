import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar__container container">
        <a href="#" className="navbar__logo" id="navbar-logo">
          Flavor'est
        </a>
        
        <button 
          className={`navbar__hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="navbar-hamburger"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__links ${menuOpen ? 'active' : ''}`} id="navbar-links">
          <li><a href="#home" className="navbar__link active" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" className="navbar__link" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#team" className="navbar__link" onClick={() => setMenuOpen(false)}>Team</a></li>
          <li><a href="#contact" className="navbar__link" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        <a href="#contact" className="navbar__cta" id="navbar-cta">Get Started</a>
      </div>
    </nav>
  );
};

export default Navbar;
