import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <a href="#hero">
        <img src="/logo.png" alt="Just Do It Logo" className="logo" />
      </a>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰ {/* Menu icon */}
      </div>
      <nav className={isMenuOpen ? "nav-open" : ""}>
        <ul>
          <li>
            <a href="#who-we-are">Who We Are</a>
          </li>
          <li>
            <a href="#goal">Our Goal</a>
          </li>
          <li>
            <a href="#team">Meet the Team</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#workflow">Workflow</a>
          </li>
          <li>
            <a href="#why-choose-us">Why Choose Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
