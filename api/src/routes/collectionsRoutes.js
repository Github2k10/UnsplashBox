const express = require('express');
const router = express.Router();


const { getCollectionsList, addNewCollections, getCollectionsImages } = require("../controllers/collectionsController");


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


/**
 * @swagger
 * /collections/saveCollection:
 *   post:
 *     tags:
 *       - Collections
 *     summary: Add new Collections
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               collection_name:
 *                 type: string
 *     responses:
 *       200:
 *         description: New Collections added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.post("/saveCollection", addNewCollections);


router.get("/:collection_id", getCollectionsImages);


module.exports = router;