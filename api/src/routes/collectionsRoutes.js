const express = require('express');
const router = express.Router();


const { getCollectionsList } = require("../controllers/collectionsController");


/**
 * @swagger
 * tags:
 *   - name: Collections
 *     description: API endpoints related to Collections.
 */
/**
 * @swagger
 * /collections/getList:
 *   get:
 *     tags:
 *       - Collections
 *     summary: Get list of Collections
 *     responses:
 *       200:
 *         description: Collections list fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get("/getList", getCollectionsList);


module.exports = router;