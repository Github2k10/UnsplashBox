const express = require('express');
const router = express.Router();


const { getUnsplashPhotos } = require('../controllers/unsplashController');


/**
 * @swagger
 * tags:
 *   - name: Unsplash
 *     description: API endpoints related to Unsplash photo fetching.
 */

/**
 * @swagger
 * /unsplash/photos:
 *   get:
 *     tags:
 *       - Unsplash
 *     summary: Fetches a list of photos from Unsplash based on search criteria.
 *     description: This endpoint allows users to search for photos from Unsplash. You can provide a query and page number to paginate the results.
 *     parameters:
 *       - in: query
 *         name: page
 *         required: false
 *         schema:
 *           type: integer
 *           default: 1
 *         description: The page number for pagination. Defaults to 1 if not provided.
 *       - in: query
 *         name: query
 *         required: false
 *         schema:
 *           type: string
 *         description: The search query string. If not provided, it will fetch general photos.
 *     responses:
 *       200:
 *         description: A list of photos matching the search criteria.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total:
 *                   type: integer
 *                   description: Total number of results available for the search.
 *                 total_pages:
 *                   type: integer
 *                   description: Total number of pages available for the search results.
 *                 data:
 *                   type: array
 *                   description: An array of photo objects matching the search query.
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The unique ID of the photo.
 *                       width:
 *                         type: integer
 *                         description: The width of the photo in pixels.
 *                       height:
 *                         type: integer
 *                         description: The height of the photo in pixels.
 *                       urls:
 *                         type: object
 *                         properties:
 *                           full:
 *                             type: string
 *                             description: URL for the full-size photo.
 *                           regular:
 *                             type: string
 *                             description: URL for the regular-size photo.
 *       500:
 *         description: Internal server error when fetching Unsplash photos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A description of the error that occurred.
 *                 error:
 *                   type: string
 *                   description: The error message returned by the API.
 */
router.get('/photos', getUnsplashPhotos);


module.exports = router;