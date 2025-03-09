import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchLatestBlog } from "../../api"; // Importing the API function
import "./Read.css";

const Read = () => {
  const [latestBlog, setLatestBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getLatestBlog = async () => {
      const data = await fetchLatestBlog();
      if (data) {
        setLatestBlog(data);
      } else {
        setError(true);
      }
      setLoading(false);
    };
    getLatestBlog();
  }, []);

  if (loading) return <div className="read-loading">Loading latest blog...</div>;

  if (error || !latestBlog) {
    return (
      <div className="no-blogs-container">
        <div className="no-blogs-card">
          <i className="ri-book-open-line no-blogs-icon"></i>
          <p className="no-blogs-text">No blogs at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="read-container">
      <h2 className="read-title">Catch our latest Read</h2>
      <div className="read-card">
        <img src={latestBlog.image} alt={latestBlog.title} className="read-image" />
        <div className="read-content">
          <p className="read-blog-name">Blog</p>
          <h3 className="read-blog-title">{latestBlog.title}</h3>
          <p
            className="read-snippet"
            dangerouslySetInnerHTML={{
              __html:
                latestBlog.content
                  .replace(/style="[^"]*"/g, "") // Removes inline styles
                  .replace(/&nbsp;/g, " ") // Replaces non-breaking spaces
                  .slice(0, 150) + "...",
            }}
          />
          <Link to={`/post/${latestBlog.url}`} className="read-link">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Read;
