// Footer.js
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Our team thrives on innovation and unparalleled expertise,
            delivering powerful, trend-setting content that captivates audiences
            and drives results. With every project, we push boundaries to
            elevate brands beyond their expectations.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
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
          </ul>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
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
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: justdoit26092024@gmail.com</p>
          <p>Phone: +91-9573126534</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Just Do It. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
