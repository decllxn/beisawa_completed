export const getCSRFToken = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/feedback/csrf/", {
        credentials: "include",  // ✅ Ensures cookies are sent
      });
      const data = await response.json();
      return data.csrfToken;
    } catch (error) {
      console.error("Error fetching CSRF token:", error);
    }
  };