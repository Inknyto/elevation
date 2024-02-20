app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Query Elasticsearch for user with the provided username
    const userResponse = await fetch(`http://localhost:9200/elevation_users/_search?q=username:${username}`);
    const userData = await userResponse.json();

    if (userData.hits.total.value === 1) {
      const user = userData.hits.hits[0]._source;

      // Replace password comparison with a secure password hashing comparison
      // For example, you can use bcrypt for password hashing
      if (user.password === password) {
        const token = jwt.sign({ userId: user.id, username: user.username }, jwtSecret, { expiresIn: '1h' });
        res.json({ token });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } else {
      res.status(401).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user data from Elasticsearch:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
