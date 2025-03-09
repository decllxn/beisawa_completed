import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import _ from "lodash";
import './Blog.css';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
import { fetchBlogs, fetchCategories, fetchRecentPosts } from '../../api';

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
    const pageQuery = parseInt(queryParams.get("page")) || 1;

    // Sync state with URL parameters on initial load
    useEffect(() => {
        if (searchQuery) setSearchIntent(searchQuery);
        setCurrentPage(pageQuery); // Set the current page from URL
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
                <div className="search-box">
                    <input 
                        type="text" 
                        defaultValue={searchIntent} 
                        onChange={handleSearchChange} 
                        placeholder="Search..." 
                    />
                </div>

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