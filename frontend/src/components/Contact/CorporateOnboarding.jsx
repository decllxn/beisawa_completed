import React, { useEffect, useState } from "react";
import { submitCorporateOnboarding } from "../../api";

const CorporateOnboarding = () => {
    const [formData, setFormData] = useState({
        company_name: "",
        email: "",
        contact_person: "",
        phone_number: "",
        onboarding_details: "",
    });

    const [message, setMessage] = useState("");

    useEffect(() => {
        const inputs = document.querySelectorAll(".input");

        const focusFunc = (e) => e.target.parentNode.classList.add("focus");
        const blurFunc = (e) => {
            if (e.target.value === "") e.target.parentNode.classList.remove("focus");
        };

        inputs.forEach((input) => {
            input.addEventListener("focus", focusFunc);
            input.addEventListener("blur", blurFunc);
        });

        return () => {
            inputs.forEach((input) => {
                input.removeEventListener("focus", focusFunc);
                input.removeEventListener("blur", blurFunc);
            });
        };
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await submitCorporateOnboarding(formData);
            if (response.status === 201) {
                setMessage("Corporate onboarding details submitted successfully!");
                setFormData({
                    company_name: "",
                    email: "",
                    contact_person: "",
                    phone_number: "",
                    onboarding_details: "",
                });
            } else {
                setMessage(`Failed to submit: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            setMessage("An error occurred: " + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <input
                    type="text"
                    name="company_name"
                    className="input"
                    value={formData.company_name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="company_name">Company Name</label>
                <span>Company Name</span>
            </div>
            <div className="input-container">
                <input
                    type="email"
                    name="email"
                    className="input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Email</label>
                <span>Email</span>
            </div>
            <div className="input-container">
                <input
                    type="text"
                    name="contact_person"
                    className="input"
                    value={formData.contact_person}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="contact_person">Contact Person</label>
                <span>Contact Person</span>
            </div>
            <div className="input-container">
                <input
                    type="tel"
                    name="phone_number"
                    className="input"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="phone_number">Phone</label>
                <span>Phone</span>
            </div>
            <div className="input-container textarea">
                <textarea
                    name="onboarding_details"
                    className="input"
                    value={formData.onboarding_details}
                    onChange={handleChange}
                    required
                ></textarea>
                <label htmlFor="onboarding_details">Onboarding Details</label>
                <span>Onboarding Details</span>
            </div>
            <input type="submit" value="Send" className="btn" />
            {message && <p className="success-message">{message}</p>}
        </form>
    );
};

export default CorporateOnboarding;