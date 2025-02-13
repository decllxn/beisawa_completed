import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import _ from "lodash";
import './Blog.css';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
import Preloader from '../preloader/Preloader';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchIntent, setSearchIntent] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category") || "";
    const searchQuery = queryParams.get("search_intent") || "";

    // Sync state with URL parameters on initial load
    useEffect(() => {
        if (searchQuery) setSearchIntent(searchQuery);
    }, [searchQuery]);

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            try {
                let url = `http://127.0.0.1:8000/blog/api/blogs/?page=${currentPage}&page_size=2`;

                if (searchIntent) {
                    url += `&search_intent=${encodeURIComponent(searchIntent)}`;
                }

                if (category) {
                    url += `&category=${encodeURIComponent(category)}`;
                }

                const response = await axios.get(url);
                if (response.data && response.data.results) {
                    setBlogs(response.data.results);
                    setTotalPages(Math.ceil(response.data.count / 2));
                } else {
                    console.error("Unexpected API response format:", response.data);
                    setError(new Error("Unexpected API response format"));
                }
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/blog/api/categories/');
                setCategories(response.data.results);
            } catch (err) {
                console.error("Error fetching categories:", err);
            }
        };

        const fetchRecentPosts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/blog/api/blogs/?ordering=-date&page=1&page_size=5');
                setRecentPosts(response.data.results);
            } catch (err) {
                console.error("Error fetching recent posts:", err);
            }
        };

        fetchBlogs();
        fetchCategories();
        fetchRecentPosts();
    }, [category, currentPage, searchIntent]);

    // Debounced search to prevent multiple API calls on each keystroke
    const debouncedSearch = useCallback(
        _.debounce((value) => {
            setSearchIntent(value);
            setCurrentPage(1);
            navigate(`/blog?search_intent=${encodeURIComponent(value)}`);
        }, 500),
        []
    );

    const handleSearchChange = (e) => {
        const value = e.target.value;
        debouncedSearch(value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setCurrentPage(1);
        navigate(`/blog?search_intent=${encodeURIComponent(searchIntent)}`);
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            navigate(`/blog?page=${page}&search_intent=${encodeURIComponent(searchIntent)}`);
        }
    };

    const handleCategoryClick = (categoryName) => {
        navigate(`/blog?category=${encodeURIComponent(categoryName.toLowerCase())}`);
    };

    if (loading) {
        return <div><Preloader /></div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <Navbar />
            <div className="blog-list-container">
                {/* Search Bar */}
                <div className="search-box">
                    <form onSubmit={handleSearchSubmit}>
                        <input 
                            type="text" 
                            defaultValue={searchIntent} 
                            onChange={handleSearchChange} 
                            placeholder="Search..." 
                        />
                        <button type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>

                {/* Blog Posts */}
                <div className="blog-posts">
                    {blogs.map(blog => (
                        <div key={blog.id} className="blog-post">
                            <img src={blog.image} alt={blog.title} className="blog-image" />
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

                {/* Pagination */}
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

                {/* Categories & Recent Posts */}
                <div className="bottom-section">
                    {/* Categories */}
                    <div className="categories">
                        <h2>Categories</h2>
                        {Array.isArray(categories) && categories.length > 0 ? (
                            <ul className="category-list">
                                {categories.map(category => (
                                    <li 
                                        key={category.id} 
                                        className="category-item"
                                        onClick={() => handleCategoryClick(category.name)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {category.name}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No categories found.</p>
                        )}
                    </div>

                    {/* Recent Posts */}
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