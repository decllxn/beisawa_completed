import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCSRFToken } from "../../../utils/csrf"; // Correct import

const SupplierEngagement = () => {
    const [formData, setFormData] = useState({
        company_name: "",
        email: "",
        details: "",
    });

    const [message, setMessage] = useState("");
    const [csrfToken, setCsrfToken] = useState("");

    useEffect(() => {
        const fetchCSRFToken = async () => {
            const token = await getCSRFToken();
            setCsrfToken(token);
        };
        fetchCSRFToken();

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
        const csrfToken = await getCSRFToken();

        if (!csrfToken) {
            console.error("CSRF token not found!");
            alert("CSRF token is missing. Please refresh the page.");
            return;
        }

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/feedback/api/supplier-engagement/",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRFToken": csrfToken,
                    },
                    withCredentials: true, // Required for authentication
                }
            );

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
            {message && <p>{message}</p>}
        </form>
    );
};

export default SupplierEngagement;