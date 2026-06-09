import { useState, useEffect } from 'react';
import './Navbar.css';

const links = ['Home', 'About', 'Team', 'Contact'];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  // scroll spy for nav
  useEffect(() => {
    const sections = links
      .map(l => document.getElementById(l.toLowerCase()))
      .filter(Boolean);

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="nav">
      <div className="nav-inner container">
        <a href="#" className="logo">Flavor'est</a>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {links.map(name => {
            const id = name.toLowerCase();
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`nav-link ${active === id ? 'active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>

        <a href="#contact" className="cta-btn">Get Started</a>
      </div>
    </nav>
  );
}

export default Navbar;
