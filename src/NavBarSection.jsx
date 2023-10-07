import React, { useState } from 'react';

function NavBarSection() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://asmy.dev">
          <img src="https://openmoji.org/data/color/svg/1F6E0.svg" width="112" height="28" alt="asmyDev Logo" />
        </a>

        <a
          role="button"
          className={`navbar-burger ${isMobileMenuOpen ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded={isMobileMenuOpen}
          data-target="navbarBasicExample"
          onClick={toggleMobileMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${isMobileMenuOpen ? 'is-active' : ''}`}>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a href="https://linkedin.com/in/asmyio" target="_blank" className="button is-link">
                <strong>LinkedIn</strong>
              </a>
              <a href="https://github.com/asmyio" target="_blank" className="button is-black">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarSection;
