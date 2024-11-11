import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="cu-text">
        <h1 className="title_white">
          LET’S <span className="title_red">BUILD</span> SOMETHING{" "}
          <span className="title_red">GREAT</span> TOGETHER
        </h1>
        <p className="text_p">
          We’re very excited to start this journey with you and bring your
          vision to life.
        </p>
        <p className="text_p">
          Our team is ready to deliver creativity, dedication, and results that
          make a difference.
        </p>
      </div>
      <div>
        <div className="re1">
          <div className="cu-card">
            <h2 className="card_heading">Email</h2>
            <p className="card_desc">justdoit26092024@gmail.com</p>
          </div>
          <div className="cu-card">
            <h2 className="card_heading">Call Us</h2>
            <p className="card_desc">9573126534</p>
          </div>
          <div className="cu-card">
            <h2 className="card_heading">Social Media</h2>

            <a
              className="card_desc"
              href="https://www.instagram.com/justdoit26092024/"
            >
              Instagram
            </a>
            <br />

            <a
              className="card_desc"
              href="https://www.facebook.com/JDDigitalPartner/"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
