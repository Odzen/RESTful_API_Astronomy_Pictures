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
 *                  content :
 *                      application/json:
 *                          schema:
 *                              type : object
 *                              $ref : '#/components/schemas/Picture'
 *              500:
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
 *              400:
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
 *                                              example : "Picture with the title __ already exists //// One of the following keys is missing or is empty in request body: 'explanation', 'hdurl', 'title', 'url'" 
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
 *              500:
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

/**
 * @swagger
 * /api/v1/pictures/{pictureId}:
 *      get:
 *          summary: Gets a picture in the Database based on id
 *          tags : [Picture]
 *          parameters :
 *          -   in : path
 *              name : pictureId
 *              description : Id of picture that needs to be found
 *              schema :
 *                  type : string
 *              required : true
 *          responses:
 *              200:
 *                  description: OK
 *                  content :
 *                      application/json:
 *                          schema:
 *                              type : object
 *                              $ref : '#/components/schemas/Picture'
 *              500:
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
 *              400:
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
 *                                              example : "Cast to ObjectId failed for value \"s\" (type string) at path \"_id\" for model \"Picture\ // OR //Parameter 'pictureId' cannot be empty" 
 * 
 */
router.get('/:pictureId', pictureController.getOnePicture);

/**
 * @swagger
 * /api/v1/pictures/{pictureId}:
 *      patch:
 *          summary: Updates a picture in the Database with the JSON input and based on the picture Id.
 *          tags : [Picture]
 *          parameters :
 *          -   in : path
 *              name : pictureId
 *              description : Id of picture that needs to be updated
 *              schema :
 *                  type : string
 *              required : true
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
 *                  content :
 *                      application/json:
 *                          schema:
 *                              type : object
 *                              $ref : '#/components/schemas/Picture'
 *              500:
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
 *              400:
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
 *                                              example : "Parameters 'pictureId' or 'body' cannot be empty" 
 * 
 */
router.patch('/:pictureId', pictureController.updateOnePicture);

router.delete('/:pictureId', pictureController.deleteOnePicture);

module.exports = router;