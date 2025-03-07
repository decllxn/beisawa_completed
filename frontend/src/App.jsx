import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/Scroll/ScrollToTop";

// Lazy load pages
const LandingPage = lazy(() => import("./pages/LandingPage"));
const OrdersPage = lazy(() => import("./pages/OrdersPage"));
const ContactPage = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const OurBakery = lazy(() => import("./pages/OurBakery"));
const GroceryPage = lazy(() => import("./pages/GroceryPage"));
const Cosmetics = lazy(() => import("./pages/Cosmetics"));
const Liqour = lazy(() => import("./pages/Liqour"));
const Appliances = lazy(() => import("./pages/Appliances"));
const BlogList = lazy(() => import("./components/blog/BlogList"));
const BlogDetail = lazy(() => import("./components/blog/BlogDetail"));
const OfferPage = lazy(() => import("./pages/OfferPage"));
const PolicyPage = lazy(() => import("./pages/PolicyPage"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));
const Location = lazy(() => import("./pages/Location"));


// Simple loader component
const Loader = () => (
  <div className="loader-container2">
    <div className="loader2"></div>
  </div>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/whatsapp-orders" element={<OrdersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/bakery" element={<OurBakery />} />
          <Route path="/grocery" element={<GroceryPage />} />
          <Route path="/cosmetics" element={<Cosmetics />} />
          <Route path="/liqourstore" element={<Liqour />} />
          <Route path="/electronicsstore" element={<Appliances />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/post/:url" element={<BlogDetail />} />
          <Route path="/offers" element={<OfferPage />} />
          <Route path="/policy" element={<PolicyPage />} />
          <Route path="/location" element={<Location />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;