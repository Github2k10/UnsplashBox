const axios = require('axios'); 

const UNSPLASH_API_URL = process.env.BACKEND_PORT || "https://api.unsplash.com/";
const UNSPLASH_ACCESS_KEY = process.env.BACKEND_PORT || "";

const getUnsplashPhotos = async (req, res) => {
  try {
    const response = await axios.get(UNSPLASH_API_URL + `?client_id=${UNSPLASH_ACCESS_KEY}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Unsplash photos', error });
  }
};

module.exports = { getUnsplashPhotos };
