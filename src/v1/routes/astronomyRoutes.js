// Route Layer - V1

/**
 * @openapi
 * /api/v1/pictures:
 *   get:
 *     tags:
 *       - Pictures
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Returns a list of matches where the query appears in the picture's titles from the database
 *       - in: query
 *         name: limit
 *         schema:
 *           type: number
 *         description: The limit of responses
 *       - in: query
 *         name: explanation
 *         schema:
 *           type: string
 *         description: Returns a list of matches where the query appears in the picture's explanations from the database
 *       - in: query
 *         name: url
 *         schema:
 *           type: string
 *         description: The url of a picture
 *       - in: query
 *         name: hurl
 *         schema:
 *           type: string
 *         description: The url of a picture in high definition
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Picture'
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                   
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */

const express = require('express');
const router = express.Router();
const pictureController = require('../../controllers/astronomyController');


router.get('/', pictureController.getAllPictures);

router.get('/:pictureId', pictureController.getOnePicture);

router.post('/', pictureController.createNewPicture);

router.patch('/:pictureId', pictureController.updateOnePicture);

router.delete('/:pictureId', pictureController.deleteOnePicture);

module.exports = router;