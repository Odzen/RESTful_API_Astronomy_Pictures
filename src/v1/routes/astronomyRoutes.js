// Route Layer - V1


const express = require('express');
const router = express.Router();
const pictureController = require('../../controllers/astronomyController');

/**
 * @swagger
 * components:
 *      schemas:
 *          Picture:
 *              type: object
 *              properties:
 *                  explanation:
 *                      type: string
 *                      description : picture explanation
 *                      example: Would you like to see a total eclipse of the Sun?  If so, do any friends or relatives live near the path of next summer's eclipse?  If yes again, then...
 *                  hdurl:
 *                      type: string
 *                      description : picture high definition url
 *                      example: https://apod.nasa.gov/apod/image/1608/tse2017usa_espenak_1421.jpg
 *                  title:
 *                      type: string
 *                      description : picture title
 *                      example: Map of Total Solar Eclipse Path in 2017 August
 *                  url:
 *                      type: string
 *                      description : picture url
 *                      example: https://apod.nasa.gov/apod/image/1608/tse2017usa_espenak_1080.jpg
 *              required :
 *              -  explanation
 *              -  hdurl
 *              -  title
 *              -  url
 *                  
 */

/**
 * @swagger
 * /api/v1/pictures:
 *      post:
 *          summary: Create new Picture
 *          tags : [Picture]
 *          requestBody :
 *              required : true
 *              content :
 *                  application/json:
 *                      schema :
 *                          type : object
 *                          $ref : '#/components/schemas/Picture'
 *          responses:
 *              200:
 *                  description: OK
 *              5XX:
 *                  description: FAILED
 *              4XX:
 *                  description : FAILED    
 * 
 */
router.post('/', pictureController.createNewPicture);


/**
 * @swagger
 * /api/v1/pictures:
 *      get:
 *          summary: Return all Pictures based in some queries, if the queries are empty it just returns all the users with pagination
 *          tags : [Picture]
 *          parameters :
 *          -   in : query
 *              name : title
 *              schema :
 *                  type : string
 *              description: Returns a list of Pictures where the title appears in any of the picture's titles from the database, using regular expressions.
 *          -   in : query
 *              name : limit
 *              schema :
 *                  type : number
 *              description: Returns a list of Pictures with a length = limit
 *          -   in : query
 *              name : explanation
 *              schema :
 *                  type : string
 *              description: Returns a list of Pictures where the query appears in any of the picture's explanation from the database, using regular expressions.
 *          -   in : query
 *              name : url
 *              schema :
 *                  type : string
 *              description: Returns a list of Pictures where the query appears in any of the picture's url from the database, using regular expressions.
 *          -   in : query
 *              name : hdurl
 *              schema :
 *                  type : string
 *              description: Returns a list of Pictures where the query appears in any of the picture's hdurl from the database, using regular expressions.
 *              
 *          responses:
 *              200:
 *                  description: OK
 *                  content :
 *                      application/json:
 *                          schema:
 *                              type : array
 *                              items :
 *                                  $ref : '#/components/schemas/Picture'
 *              5XX:
 *                  description: FAILED
 *                  content :
 *                      application/json:
 *                          schema :
 *                              type : object
 *                              properties :
 *                                  status:
 *                                      type : string
 *                                      example : FAILED
 *                                  data :
 *                                      type : object
 *                                      properties :
 *                                          error :
 *                                              type : string
 *                                              example : "Some error message"
 *              4XX:
 *                  description: FAILED
 *                  content :
 *                      application/json:
 *                          schema :
 *                              type : object
 *                              properties :
 *                                  status:
 *                                      type : string
 *                                      example : FAILED
 *                                  data :
 *                                      type : object
 *                                      properties :
 *                                          error :
 *                                              type : string
 *                                              example : "Some error message"
 * 
 */
router.get('/', pictureController.getAllPictures);

router.get('/:pictureId', pictureController.getOnePicture);

router.patch('/:pictureId', pictureController.updateOnePicture);

router.delete('/:pictureId', pictureController.deleteOnePicture);

module.exports = router;