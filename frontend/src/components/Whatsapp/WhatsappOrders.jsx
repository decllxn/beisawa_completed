import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./WhatsappOrders.css";

import orders1 from "./orders/orders.webp";
import orders2 from "./orders/orders2.jpeg";
import orders3 from "./orders/orders3.jpeg";
import orders4 from "./orders/orders4.jpeg";

const WhatsappOrders = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/feedback/api/whatsapp-numbers/")
      .then((response) => {
        setContacts(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching WhatsApp numbers:", error);
      });
  }, []);

  return (
    <div className="whatsapp-orders">
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ORDER FROM HOME
      </motion.h1>

      <motion.p
        className="description"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        You can now order your groceries, household items, electronics, and other supermarket shopping via WhatsApp from all our branches countrywide. The process is quite simple:
      </motion.p>

      <motion.ol
        className="steps"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <li>Send your shopping list to any of the WhatsApp numbers below. Include item description & quantity.</li>
        <li>Specify your full names and exact location (area, road/street, estate, house/apt number).</li>
        <li>We will pick and pack your order. Choose to collect or opt for delivery via Little Cabs.</li>
      </motion.ol>

      <motion.div
        className="delivery-info"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2>Delivery Fees</h2>
        <ul>
          <li>0-5 kms: <span>Ksh 232</span></li>
          <li>6-10 kms: <span>Ksh 290</span></li>
          <li>11-15 kms: <span>Ksh 440</span></li>
          <li>16-20 kms: <span>Ksh 591</span></li>
        </ul>
        <p className="offer">🚀 <strong>Delivery Offer:</strong> 0-15 kms @ <strong>Ksh 149</strong> for orders above <strong>Ksh 2000</strong> (T&Cs Apply)</p>
      </motion.div>

      <motion.div
        className="branch-contacts"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2>WhatsApp Contact Numbers</h2>
        <ul>
          {contacts.length > 0 ? (
            contacts.map((contact, index) => (
              <li key={index} className="branch-contact">
                <strong>{contact.branch}:</strong>
                <a
                  href={`https://wa.me/${contact.phone_number.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  {contact.phone_number}
                </a>
              </li>
            ))
          ) : (
            <p>Loading contacts...</p>
          )}
        </ul>
      </motion.div>

      <motion.div
        className="image-gallery"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <img src={orders1} alt="Order from Home" className="gallery-img" />
        <img src={orders2} alt="Packed Groceries" className="gallery-img" />
        <img src={orders3} alt="Little Cabs Delivery" className="gallery-img" />
        <img src={orders4} alt="Grocery Selection" className="gallery-img" />
      </motion.div>
    </div>
  );
};

export default WhatsappOrders;