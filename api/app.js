const express = require('express');
const app = express();
const unsplashRoutes = require('./src/routes/unsplashRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/unsplash', unsplashRoutes);

// Error handling
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;