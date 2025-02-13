import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCSRFToken } from "../../../utils/csrf"; // ✅ Import CSRF token utility

const Feedback = () => {
  const [formData, setFormData] = useState({ name: "", email: "", feedback: "" });
  const [message, setMessage] = useState("");
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    // Fetch CSRF token on component mount
    const fetchCSRFToken = async () => {
      const token = await getCSRFToken();
      setCsrfToken(token);
    };
    fetchCSRFToken();

    // Input focus animations
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
        "http://127.0.0.1:8000/feedback/api/customer-feedback/", // ✅ Correct API endpoint
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken, // ✅ Use fetched CSRF token
          },
          withCredentials: true, // ✅ Needed for cross-origin requests
        }
      );

      if (response.status === 201) {
        setMessage("Feedback submitted successfully!");
        setFormData({ name: "", email: "", feedback: "" });
      } else {
        setMessage(`Failed to submit feedback: ${response.status} - ${response.statusText}`);
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
          id="name"
          type="text"
          name="name"
          className="input"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="name">Name</label>
        <span>Name</span>
      </div>
      <div className="input-container">
        <input
          id="email"
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
      <div className="input-container textarea">
        <textarea
          id="feedback"
          name="feedback"
          className="input"
          value={formData.feedback}
          onChange={handleChange}
          required
        ></textarea>
        <label htmlFor="feedback">Feedback</label>
        <span>Feedback</span>
      </div>
      <button type="submit" className="btn">Send</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Feedback;