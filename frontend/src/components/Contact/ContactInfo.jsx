import React from "react";
import logo from "./logo2.jpeg";

const ContactInfo = () => (
  <div className="contact-info">
    <img src={logo} alt="company-logo" className="logo" />
    <h3 className="title">Let's get in touch</h3>
    <p className="text">
      Are you a customer? Supplier? Corporate customer? Your feedback helps us serve you better!
      We value your insights and invite you to share your thoughts on how we can enhance our partnership.
    </p>

    <div className="info">
      <div className="information">
        <div className="icon">
          <i className="ri-map-pin-2-line"></i>
        </div>
        <p>Meru, Kenya</p>
      </div>
      <div className="information">
        <div className="icon">
          <i className="ri-mail-line"></i>
        </div>
        <p>beisawa@gmail.com</p>
      </div>
      <div className="information">
        <div className="icon">
          <i className="ri-phone-line"></i>
        </div>
        <p>0712345678</p>
      </div>
    </div>
  </div>
);

export default ContactInfo;