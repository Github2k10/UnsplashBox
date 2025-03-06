const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Error handling
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;