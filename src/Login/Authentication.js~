// Authentication.js
const authenticateUser = async (username, password) => {
  try {
    // Make a request to Elasticsearch for user authentication
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Authentication failed');
    }

    const data = await response.json();
    return data; // The authentication token or user information received from Elasticsearch
  } catch (error) {
    console.error('Authentication error:', error);
    throw error;
  }
};

export { authenticateUser };
