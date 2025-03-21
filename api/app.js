const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();


// Routes import
const unsplashRoutes = require('./src/routes/unsplashRoutes');
const collectionsRouters = require('./src/routes/collectionsRoutes');


// Middleware
app.use(express.json());
app.use(cors());


// Connect to MongoDB
const MONGODB_URL = process.env.MONGODB_URL || "";

mongoose.connect(MONGODB_URL)
  .then(() => console.log(`Connected to database: ${mongoose.connection.name}`))
  .catch((err) => console.log('Failed to connect to MongoDB:', err));


// Routes
app.use('/unsplash', unsplashRoutes);
app.use("/collections", collectionsRouters);


// Error handling
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;