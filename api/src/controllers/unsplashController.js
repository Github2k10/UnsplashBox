const axios = require('axios'); 

const UNSPLASH_API_URL = process.env.UNSPLASH_API_URL || "https://api.unsplash.com/";
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || "";

const getUnsplashPhotos = async (req, res) => {
  try {
    let page = req.query.page || 1;
    let query = req.query.query || '';

    const response = await axios.get(UNSPLASH_API_URL + `search/photos?page=${page}&query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`);
    
    let result = {
      total: response.data.total,
      total_pages: response.data.total_pages,
      data: filterResponse(response.data.results),
    };
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Unsplash photos', error });
  }
};

function filterResponse(data){
  let response = [];

  for(item of data){
    let photo = {};

    photo.id = item.id;
    photo.slug = item.slug;
    photo.created_at = item.created_at;
    photo.updated_at = item.updated_at
    photo.width = item.width;
    photo.height = item.height;
    photo.color = item.color;
    photo.description = item.description;
    photo.alt_description = item.alt_description;
    photo.urls = item.urls;
    photo.links = item.links;

    response.push(photo);
  }

  return response;
}

module.exports = { getUnsplashPhotos };

