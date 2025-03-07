import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Blog from "../components/blog/Blog";
import BackToTop from "../components/Scroll/BackToTop";


const BlogPage = () => {
    return (
        <>
         <BackToTop />
         <Navbar />
         <Blog />
         <Footer />
        </>
    );
}

export default BlogPage;