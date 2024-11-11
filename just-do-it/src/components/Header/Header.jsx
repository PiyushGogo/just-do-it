import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <Link to="/">
        <img src="/logo.png" alt="Just Do It Logo" className="logo" />
      </Link>

      <div className="menu-toggle" onClick={toggleMenu}>
        ☰ {/* Menu icon */}
      </div>
      <nav className={isMenuOpen ? "nav-open" : ""}>
        <ul>
          <li>
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/who-we-are">
              <p>Who we are</p>
            </Link>
          </li>
          <li>
            <Link to="/our-goal">
              <p>Our Goal</p>
            </Link>
          </li>
          <li>
            <Link to="/team">
              <p>Meet the Team</p>
            </Link>
          </li>
          <li>
            <Link to="/services">
              <p>Services</p>
            </Link>
          </li>
          <li>
            <Link to="/workflow">
              <p> Workflow</p>
            </Link>
          </li>
          <li>
            <Link to="/why-choose-us">
              <p> Why Choose Us</p>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <p> Contact</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
