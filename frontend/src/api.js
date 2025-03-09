import axios from "axios";
import { getCSRFToken } from "../utils/csrf";



// Set environment-based API base URL
const BASE_URL = "https://beisawa-completed.onrender.com";
const API_BASE_URL = `${BASE_URL}/offers/api/`;
const API_BASE_URL2 = `${BASE_URL}/blog/api/`;


// Axios instance
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, // Ensures cookies (like CSRF tokens) are sent
});

// Function to fetch blog list with pagination, search, and category filters
export const fetchBlogs = async (currentPage = 1, searchIntent = "", category = "") => {
    try {
        let url = `/blog/api/blogs/?page=${currentPage}&page_size=2`;

        if (searchIntent) {
            url += `&search_intent=${encodeURIComponent(searchIntent)}`;
        }
        if (category) {
            url += `&category=${encodeURIComponent(category)}`;
        }

        const response = await api.get(url);
        return response.data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw error;
    }
};

// Function to fetch categories
export const fetchCategories = async () => {
    try {
        const response = await api.get("/blog/api/categories/");
        return response.data.results || [];
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};

// Function to fetch recent posts
export const fetchRecentPosts = async () => {
    try {
        const response = await api.get("/blog/api/blogs/?ordering=-date&page=1&page_size=5");
        return response.data.results || [];
    } catch (error) {
        console.error("Error fetching recent posts:", error);
        throw error;
    }
};

// Function to fetch blog details
export const fetchBlogDetail = async (slug) => {
    try {
        const response = await api.get(`/blog/api/blogs/${slug}/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching blog details:", error);
        throw error;
    }
};

// Function to fetch comments for a blog
export const fetchComments = async (slug) => {
    try {
        const response = await api.get(`/blog/api/blogs/${slug}/comments/`);
        return response.data.results || [];
    } catch (error) {
        console.error("Error fetching comments:", error);
        throw error;
    }
};

// Function to submit a comment
export const submitComment = async (slug, name, email, message) => {
    try {
        const response = await api.post(`/blog/api/blogs/${slug}/comments/`, {
            name,
            email,
            message,
        });
        return response.status === 201;
    } catch (error) {
        console.error("Error submitting comment:", error);
        throw error;
    }
};

// Function to submit corporate onboarding form
export const submitCorporateOnboarding = async (formData) => {
    try {
        const csrfToken = await getCSRFToken();

        if (!csrfToken) {
            throw new Error("CSRF token is missing");
        }

        const response = await api.post("/feedback/api/corporate-onboarding/", formData, {
            headers: {
                "X-CSRFToken": csrfToken,
            },
        });

        return response;
    } catch (error) {
        console.error("Error submitting corporate onboarding data:", error);
        throw error;
    }
};

// Function to submit Supplier Engagement form
export const submitSupplierEngagement = async (formData) => {
    try {
        const csrfToken = await getCSRFToken();

        if (!csrfToken) {
            throw new Error("CSRF token is missing");
        }

        const response = await api.post("/feedback/api/supplier-engagement/", formData, {
            headers: {
                "X-CSRFToken": csrfToken,
            },
        });

        return response;
    } catch (error) {
        console.error("Error submitting supplier engagement data:", error);
        throw error;
    }
};

// Function to submit Customer Feedback form
export const submitCustomerFeedback = async (formData) => {
    try {
        const csrfToken = await getCSRFToken();

        if (!csrfToken) {
            throw new Error("CSRF token is missing");
        }

        const response = await api.post("/feedback/api/customer-feedback/", formData, {
            headers: {
                "X-CSRFToken": csrfToken,
            },
        });

        return response;
    } catch (error) {
        console.error("Error submitting customer feedback:", error);
        throw error;
    }
};

export const fetchHomeOffers = async () => {
    try {
        const response = await api.get("/offers/homeOffer/");
        return response.data.results;
    } catch (error) {
        console.error("Error fetching home offers:", error);
        throw error;
    }
};

export const fetchBranches = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/locations/api/branches/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };


  export const fetchOffers = async (page) => {
    try {
      const response = await axios.get(`${API_BASE_URL}?page=${page}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching offers:", error);
      return null;
    }
  };

  export const fetchLatestBlog = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL2}latest-blog/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching latest blog:", error);
      return null;
    }
  };


  export const fetchWhatsappNumbers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/feedback/api/whatsapp-numbers/`);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching WhatsApp numbers:", error);
      return [];
    }
  };

export default api;