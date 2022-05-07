// Route Layer - V1

/**
 * @openapi
 * /api/v1/pictures:
 *   get:
 *     tags:
 *       - Pictures
 *     summary : Gets all pictures from the database based in some queries
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
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                 items:
 *                   $ref: '#/components/schemas/Picture'
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
 *                 items:
 *                   $ref: '#/components/schemas/Picture'
 *   post:
 *     tags:
 *       - Pictures
 *     summary : Post-Create a new picture with some data in JSON
 *     parameters:
 *       - in: body
 *         name: Picture
 *         operationId: createNewPicture
 *         schema:
 *           type: object
 *           required:
 *             - explanation
 *             - hdurl
 *             - title
 *             - url
 *           properties:
 *             explanation:
 *               type: string
 *             hdurl:
 *               type: string
 *             title:
 *               type: string
 *             url:
 *               type: string  
 *         description: Create new Picture
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                 items:
 *                   $ref: '#/components/schemas/Picture'
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
 *                 items:
 *                   $ref: '#/components/schemas/Picture'
 * 
 * /api/v1/pictures/{pictureId}:
 *   get:
 *     tags:
 *       - Pictures
 *     summary : Gets a picture in the Database based on id
 *     operationId : updateOnePicture
 *     parameters:
 *       - in: path
 *         name: pictureId
 *         description: ID of picture that needs to be updated
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
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
 *                 items:
 *                   $ref: '#/components/schemas/Picture'
 * 
 *   patch:
 *     tags:
 *       - Pictures
 *     summary : Updates a picture in the Database with the JSON input
 *     operationId : updateOnePicture
 *     parameters:
 *       in : path
 *       name : pictureId 
 *       description : ID of picture that needs to be updated 
 *       required : true
 *       schema:
 *         type : string
 *       requestBody:
 *         content:
 *           'application/json':
 *             schema:
 *               properties:
 *                 explanation:
 *                   type: string
 *                   description : Updated explanation of the picture
 *                 hdurl:
 *                   type: string
 *                   description : Updated hdurl of the picture
 *                 title:
 *                   type: string
 *                   description : Updated title of the picture
 *                 url:
 *                   type: string
 *                   description : Updated url of the picture
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
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
 *                 items:
 *                   $ref: '#/components/schemas/Picture'
 *   delete:
 *     tags:
 *       - Pictures
 *     summary : Deletes a picture from the Database
 *     parameters:
 *       - in: path
 *         name: pictureId
 *         operationId: deleteOnePicture
 *         schema:
 *           type: string
 *         description: Deletes one picture based on id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
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
 *                 items:
 *                   $ref: '#/components/schemas/Picture'
 * 
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