import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div>
        <h1>
          LET’S <span className="text_red">BUILD</span> SOMETHING{" "}
          <span className="text_red">GREAT</span> TOGETHER
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
        <h1>Get In Touch With Us</h1>
        <div className="re1">
          <div className="cu-card">
            <h2 className="text_heading">Email</h2>
            <p className="text_heading">ABCDEFG@GMAIL.COM</p>
          </div>
          <div className="cu-card">
            <h2 className="text_heading">Call Us</h2>
            <p className="text_heading">9898989898</p>
          </div>
          <div className="cu-card">
            <h2 className="text_heading">Website</h2>
            <p className="text_heading">LINK</p>
          </div>
          <div className="cu-card">
            <h2 className="text_heading">Social Media</h2>
            <p className="text_heading">LINK</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
