import React, { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-content">
        <div className="navbar-brand">
          <img
            src="/logo.png"
            alt="Waffle Squad Logo"
            className="navbar-logo"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://img.icons8.com/color/96/waffle.png"; // Fallback waffle icon
            }}
          />
          <div className="navbar-name-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/name.png"
              alt="Waffle Squad"
              className="navbar-name-img"
              style={{ height: '45px', marginLeft: '10px' }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="navbar-title" style={{ display: 'none', marginLeft: '10px' }}>WAFFLE SQUAD</span>
          </div>
        </div>

        <nav className="navbar-nav desktop-only">
          {['About', 'Specialties', 'Menu', 'Reviews', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a
            href=" https://www.instagram.com/waffle_squad_thanjavur01?igsh=MWp5M2E1dGptejdoZg==&utm_source=ig_contact_invite"
            target="_blank"
            rel="noreferrer"
            className="social-icon-link desktop-only"
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://wa.me/917904919397" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.8rem' }}>
            CHAT NOW
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;