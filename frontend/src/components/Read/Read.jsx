import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Read.css';

const Read = () => {
    const [latestBlog, setLatestBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLatestBlog = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/blog/api/latest-blog/');
                setLatestBlog(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchLatestBlog();
    }, []);

    if (loading) return <div className="read-loading">Loading latest blog...</div>;
    if (error || !latestBlog) return <div className="read-error">No latest blog found.</div>;

    return (
        <div className="read-container">
            <h2 className="read-title">Catch our latest Read</h2>
            <div className="read-card">
                <img src={latestBlog.image} alt={latestBlog.title} className="read-image" />
                <div className="read-content">
                    <p className="read-blog-name">Blog</p>
                    <h3 className="read-blog-title">{latestBlog.title}</h3>
                    <p className="read-snippet" dangerouslySetInnerHTML={{ 
                        __html: latestBlog.content
                            .replace(/style="[^"]*"/g, '') // Removes inline styles
                            .replace(/&nbsp;/g, ' ') // Replaces non-breaking spaces
                            .slice(0, 150) + "..."
                    }} />
                    <Link to={`/post/${latestBlog.url}`} className="read-link">Read More</Link>
                </div>
            </div>
        </div>
    );
};

export default Read;