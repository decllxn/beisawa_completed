import React, { useEffect, useState } from "react";
import { getCSRFToken } from "../../../utils/csrf";
import { submitSupplierEngagement } from "../../api";

const SupplierEngagement = () => {
    const [formData, setFormData] = useState({
        company_name: "",
        email: "",
        details: "",
    });

    const [message, setMessage] = useState("");

    useEffect(() => {
        // Add focus/blur effects to inputs
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
            const response = await submitSupplierEngagement(formData);

            if (response.status === 201) {
                setMessage("Supplier engagement details submitted successfully!");
                setFormData({ company_name: "", email: "", details: "" });
            } else {
                setMessage(`Failed to submit: ${response.status} - ${response.statusText}`);
                console.error("Server Response:", response.data);
            }
        } catch (error) {
            setMessage("An error occurred: " + error.message);
            console.error("Error details:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <input
                    type="text"
                    id="company_name"
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
                    id="email"
                    name="email"
                    className="input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Email</label>
                <span>Email</span>
            </div>
            <div className="input-container textarea">
                <textarea
                    id="details"
                    name="details"
                    className="input"
                    value={formData.details}
                    onChange={handleChange}
                    required
                ></textarea>
                <label htmlFor="details">Details</label>
                <span>Details</span>
            </div>
            <input type="submit" value="Send" className="btn" />
            {message && <p className="success-message">{message}</p>}
        </form>
    );
};

export default SupplierEngagement;