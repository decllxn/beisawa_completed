import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Blog.css';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';

const BlogDetail = () => {
    const { url } = useParams(); // Get the blog's unique URL from the route
    const [blog, setBlog] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Comment form state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/blog/api/blogs/${url}/`);
                setBlog(response.data);
            } catch (err) {
                setError(err);
                console.error("Error fetching blog details:", err);
            } finally {
                setLoading(false);
            }
        };

        const fetchComments = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/blog/api/blogs/${url}/comments/`);
                setComments(response.data.results || []); // Ensure comments are extracted from 'results'
            } catch (err) {
                console.error("Error fetching comments:", err);
            }
        };

        fetchBlog();
        fetchComments();
    }, [url]);

    // Handle comment submission
    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const response = await axios.post(`http://127.0.0.1:8000/blog/api/blogs/${url}/comments/`, {
                name,
                email,
                message,
            });

            if (response.status === 201) {
                alert('Your comment has been submitted and is awaiting approval.');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                alert('Failed to submit comment. Please try again.');
            }
        } catch (error) {
            console.error("Error submitting comment:", error);
            alert('An error occurred while submitting your comment.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) return (
        <div>
            <div className="loader-container2">
                <div className="loader2"></div>
            </div>
        </div>
    );
    if (error) return <div>Error: {error.message}</div>;
    if (!blog) return <div>Blog not found.</div>;

    return (
        <>
        <Navbar />
        <div className="blog-detail-container">
            <h1>{blog.title}</h1>
            {blog.image && <img src={blog.image} alt={blog.title} className="blog-detail-image" />}
            <p dangerouslySetInnerHTML={{ __html: blog.content.replace(/src="\/media\//g, 'src="http://127.0.0.1:8000/media/') }} />

            {/* Comments Section */}
            <h2>Comments</h2>
            <div className="comments-section">
                {comments.length > 0 ? (
                    comments.map(comment => (
                        <div key={comment.id} className="comment">
                            <h3>{comment.name}</h3>
                            <p>{comment.message}</p>
                            <p className="comment-date">{new Date(comment.date).toLocaleDateString()}</p>
                        </div>
                    ))
                ) : (
                    <p>No comments yet.</p>
                )}
            </div>

            {/* Comment Form */}
            <div className="comment-form-container">
                <h3>Leave a Comment</h3>
                <form onSubmit={handleCommentSubmit} className="comment-form">
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <textarea 
                        placeholder="Your Comment" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                    />
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default BlogDetail;