export const getCSRFToken = async () => {
    try {
      const response = await fetch("https://beisawa-completed.onrender.com/feedback/csrf/", {
        credentials: "include",  // ✅ Ensures cookies are sent
      });
      const data = await response.json();
      return data.csrfToken;
    } catch (error) {
      console.error("Error fetching CSRF token:", error);
    }
  };