const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
// import { credentials } from './credentials';
const { username, password } = require('./credentials');

const app = express();
app.use(cors());
app.use(express.json()); // Add this line to parse JSON request bodies
const port = 8080;

// Secret key for JWT (replace with your secret key)
const jwtSecret = 'your_secret_key';

// Mock user data (replace with your user data retrieval logic)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Middleware for extracting JWT from Authorization header
// app.use(expressJwt({ secret: jwtSecret, algorithms: ['HS256'] }).unless({ path: ['/login'] }));
app.use(expressJwt({ secret: jwtSecret, algorithms: ['HS256'] }).unless({ path: ['/login'] }));

// Define the Elasticsearch endpoint
const elasticsearchEndpoint = 'http://localhost:9200';

// Create a proxy for Elasticsearch requests
const elasticProxy = createProxyMiddleware({
  target: elasticsearchEndpoint,
  changeOrigin: false,
  pathRewrite: {
    '^/elasticsearch': '', // Remove the '/elasticsearch' prefix
  },
  headers: {
    // Add your custom header here
    'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
  },
});

// Set CORS headers for all routes
app.use((req, res, next) => {
  // Allow all origins (you might want to make this more restrictive in production)
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');

  // Continue to the next middleware
  next();
});

// Login route to generate JWT token
app.post('/login', (req, res) => {
  const { username, password } = req.body;
	// console.log( username, password )
	// console.log(  req.body )

  // Authenticate user (replace with your actual authentication logic)
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    // Generate JWT token
    const token = jwt.sign({ userId: user.id, username: user.username }, jwtSecret, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Use the proxy for paths starting with '/elasticsearch'
app.use('/elasticsearch', elasticProxy);

// Generic error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

// Start the server
app.listen(port, () => {
  console.log(`Elasticsearch proxy is running on http://localhost:${port}`);
});
