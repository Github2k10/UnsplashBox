const express = require('express');
const { getUnsplashPhotos } = require('../controllers/unsplashController');

const router = express.Router();

router.get('/photos', getUnsplashPhotos);

module.exports = router;