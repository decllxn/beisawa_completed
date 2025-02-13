import React from 'react';
import Navbar from '../components/Navbar';
import ContactFormContainer from '../components/Contact/ContactFormContainer';
import Footer from '../components/Footer/Footer';
import Location from '../components/Location/Location';

const ContactPage = () => {
    return (
        <>
          <Navbar />
          <ContactFormContainer />
          <Location />
          <Footer />
        </>
    );
}

export default ContactPage;