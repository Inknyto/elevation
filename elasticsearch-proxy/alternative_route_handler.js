// ...

// Middleware for extracting JWT from Authorization header
const jwtMiddleware = expressJwt({ secret: jwtSecret, algorithms: ['HS256'] });

// Apply JWT middleware to all routes except /login and specific Elasticsearch routes
app.use(jwtMiddleware.unless({ path: ['/login', '/elasticsearch/software_jobs/_search', '/elasticsearch/senegal_entreprises_data/_search'] }));

// Create a proxy for Elasticsearch requests
const elasticProxy = createProxyMiddleware({
  target: elasticsearchEndpoint,
  changeOrigin: false,
  pathRewrite: {
    '^/elasticsearch': '', // Remove the '/elasticsearch' prefix
  },
  headers: (req) => {
    // Only add Authorization header for specific routes
    if (req.path.startsWith('/elasticsearch/software_jobs/_search') || req.path.startsWith('/elasticsearch/senegal_entreprises_data/_search')) {
      return {
        'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
      };
    }
    return {};
  },
});

// ...
