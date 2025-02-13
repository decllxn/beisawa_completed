import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth';
import ContactPage from './pages/Contact';
import Display from './pages/Display';
import About from './pages/About';
import OurBakery from './pages/OurBakery';
import BackToSchool from './pages/BackToSchool';
import Cosmetics from './pages/Cosmetics';
import Liqour from './pages/Liqour';
import Appliances from './pages/Appliances';
import BlogList from './components/blog/BlogList';
import BlogDetail from './components/blog/BlogDetail';
import OfferPage from './pages/OfferPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/display" element={<Display />} />
        <Route path="/About" element={<About />} />
        <Route path="/bakery" element={<OurBakery />} />
        <Route path="/backtoschool" element={<BackToSchool />} />
        <Route path="/cosmetics" element={<Cosmetics />} />
        <Route path="/liqourstore" element={<Liqour />} />
        <Route path="/electronicsstore" element={<Appliances />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/post/:url" element={<BlogDetail />} />
        <Route path="/offers" element={<OfferPage />} />
      </Routes>
    </Router>
  );
};

export default App