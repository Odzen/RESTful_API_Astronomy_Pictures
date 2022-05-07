// Route Layer - V1


const express = require('express');
const router = express.Router();
const pictureController = require('../../controllers/astronomyController');


router.get('/', pictureController.getAllPictures);

router.get('/:pictureId', pictureController.getOnePicture);

router.post('/', pictureController.createNewPicture);

router.patch('/:pictureId', pictureController.updateOnePicture);

router.delete('/:pictureId', pictureController.deleteOnePicture);

module.exports = router;