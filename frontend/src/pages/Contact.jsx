import React from 'react';
import Navbar from '../components/Navbar';
import ContactFormContainer from '../components/Contact/ContactFormContainer';
import Footer from '../components/Footer/Footer';

const ContactPage = () => {
    return (
        <>
          <Navbar />
          <ContactFormContainer />
          <Footer />
        </>
    );
}

export default ContactPage;