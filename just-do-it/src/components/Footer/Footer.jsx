// Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are a leading company providing the best services in the
            industry. Our mission is to deliver top-notch solutions for our
            clients.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#who-we-are">Who We Are</a>
            </li>
            <li>
              <a href="#goal-section">Our Goal</a>
            </li>
            <li>
              <a href="#team-section">Meet the Team</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="#workflow-page">Workflow</a>
            </li>
            <li>
              <a href="#why-choose-us">Why Choose Us</a>
            </li>
            <li>
              <a href="#contact-us">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: justdoit26092024@gmail.com</p>
          <p>Phone: +91-9573126534</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Just Do It. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
