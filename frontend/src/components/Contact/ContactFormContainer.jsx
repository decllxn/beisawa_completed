import React, { useState } from "react";
import SupplierEngagement from "./SupplierEngagement";
import CorporateOnboarding from "./CorporateOnboarding";
import Feedback from "./Feedback";
import ContactInfo from "./ContactInfo";
import "./contact.css";

const ContactFormContainer = () => {
  const [selectedForm, setSelectedForm] = useState("feedback");

  const handleFormChange = (e) => {
    setSelectedForm(e.target.value);
  };

  const renderForm = () => {
    switch (selectedForm) {
      case "supplier":
        return <SupplierEngagement />;
      case "corporate":
        return <CorporateOnboarding />;
      case "feedback":
      default:
        return <Feedback />;
    }
  };

  return (
    <div className="container2">
      <img src="img/shape.png" className="square" alt="" />
      <div className="form2">
        <ContactInfo />
        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>
          <div className="Outer-Form">
            <h3 className="title">Contact Us</h3>
            {/* Dropdown to select form */}
            <div className="input-container">
              <select
                className="input"
                value={selectedForm}
                onChange={handleFormChange}
              >
                <option value="supplier">Supplier Engagement</option>
                <option value="corporate">Corporate Onboarding</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            {/* Render selected form */}
            {renderForm()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormContainer;