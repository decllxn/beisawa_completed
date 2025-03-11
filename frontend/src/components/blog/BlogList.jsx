import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Blog.css';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
import SearchBox from './SearchBox';
import { fetchBlogs, fetchCategories, fetchRecentPosts } from '../../api';
import "remixicon/fonts/remixicon.css";

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [searchIntent, setSearchIntent] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category") || "";
    const searchQuery = queryParams.get("search_intent") || "";
    const pageQuery = parseInt(queryParams.get("page")) || 1;
    const cloudinaryBaseUrl = "https://res.cloudinary.com/dbdhs3acp/";

    const getFullImageUrl = (imagePath) => {
        return imagePath.startsWith("http") ? imagePath : `${cloudinaryBaseUrl}${imagePath}`;
    };

    useEffect(() => {
        if (searchQuery) {
            setSearchIntent(searchQuery);
            setSearchInput(searchQuery);
        }
        setCurrentPage(pageQuery);
    }, [searchQuery, pageQuery]);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const blogData = await fetchBlogs(currentPage, searchIntent, category);
                setBlogs(blogData.results);
                setTotalPages(Math.ceil(blogData.count / 2));
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [category, currentPage, searchIntent]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoryData = await fetchCategories();
                setCategories(categoryData);
            } catch (err) {
                console.error("Error fetching categories:", err);
            }
            try {
                const recentPostsData = await fetchRecentPosts();
                setRecentPosts(recentPostsData);
            } catch (err) {
                console.error("Error fetching recent posts:", err);
            }
        };

        fetchData();
    }, []);

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearchClick = () => {
        setSearchIntent(searchInput); // Update searchIntent state
        setCurrentPage(1);
        navigate(`/blog?search_intent=${encodeURIComponent(searchInput)}`);
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            navigate(`/blog?page=${page}&search_intent=${encodeURIComponent(searchIntent)}`);
        }
    };

    if (loading) {
        return (
            <div className="loader-container2">
                <div className="loader2"></div>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <Navbar />
            <div className="blog-list-container">
                <SearchBox 
                    searchInput={searchInput} 
                    handleSearchChange={handleSearchInputChange} 
                    handleSearchClick={handleSearchClick} 
                />

                <div className="blog-posts">
                    {blogs.map(blog => (
                        <div key={blog.id} className="blog-post">
                            <img src={getFullImageUrl(blog.image)} alt={blog.title} className="blog-image" />
                            <h2>
                                <Link to={`/post/${blog.url}`} className="blog-title-link">{blog.title}</Link>
                            </h2>
                            <p 
                                className="blog-content" 
                                dangerouslySetInnerHTML={{
                                    __html: blog.content.slice(0, 250).replace(/background-color:[^;]+;/g, '') + '...'
                                }} 
                            />
                            <p className="blog-meta">
                                Category: {blog.category.name} | Comments: {blog.comment_count} | Author: {blog.author} | Date: {new Date(blog.date).toLocaleDateString()}
                            </p>
                        </div>
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="pagination">
                        <button 
                            onClick={() => handlePageChange(currentPage - 1)} 
                            disabled={currentPage === 1}
                            className="page-button"
                        >
                            Previous
                        </button>
                        <span className="pagination-info">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button 
                            onClick={() => handlePageChange(currentPage + 1)} 
                            disabled={currentPage === totalPages}
                            className="page-button"
                        >
                            Next
                        </button>
                    </div>
                )}

                <div className="bottom-section">
                    <div className="categories">
                        <h2>Categories</h2>
                        {categories.length > 0 ? (
                            <ul className="category-list">
                                {categories.map(category => (
                                    <li 
                                        key={category.id} 
                                        className="category-item"
                                        onClick={() => navigate(`/blog?category=${encodeURIComponent(category.name.toLowerCase())}`)}
                                    >
                                        {category.name}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No categories found.</p>
                        )}
                    </div>

                    <div className="recent-posts">
                        <h3>Recent Posts</h3>
                        <ul className="recent-post-list">
                            {recentPosts.map(post => (
                                <li key={post.id} className="recent-post-item">
                                    <img src={post.image} alt={post.title} />
                                    <Link to={`/post/${post.url}`} className="recent-post-link">{post.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BlogList;
