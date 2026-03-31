import axios from 'axios';

// The base URL pointing to the Node.js backend
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // If you decide to restrict CORS later, you can send cookies correctly:
  // withCredentials: true,
});

// Axios Interceptor to dynamically attach the JWT token to every request
api.interceptors.request.use(
  (config) => {
    // Check if there is an access token securely saved in local storage
    const token = localStorage.getItem('token');
    
    // Automatically attach it as a Bearer Token if present
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Global Error Handler for responses
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // If the token expires or is invalid (401 Unauthorized), 
    // automatically log the user out and redirect to login page!
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      localStorage.removeItem('userName');
      
      // Auto-redirect wrapper check
      if (window.location.pathname !== '/login') {
         window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);

/**
 * Utility Function to simply "Ping" the backend and verify the connection is online. 
 */
export const checkBackendConnection = async () => {
  try {
    const response = await api.get('/'); 
    console.log("✅ Backend Connection Successful:", response.data);
    return true;
  } catch (err) {
    console.error("❌ Backend Connection Failed. Is the Node.js server running?", err.message);
    return false;
  }
};

/**
 * Drop-in replacement for native `fetch` that automatically injects the Bearer Token and Base URL.
 */
export const apiFetch = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');
  const headers = {
    ...options.headers,
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  // Ensure the endpoint starts with a slash
  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;
  
  return fetch(url, {
    ...options,
    headers,
  });
};

export default api;
