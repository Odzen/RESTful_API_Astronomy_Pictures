// Route Layer - V1

const express = require('express');
const router = express.Router();
const pictureController = require('../../controllers/astronomyController');


router.get('/', pictureController.getAllPictures);

router.get('/:workoutId', pictureController.getOnePicture);

router.post('/', pictureController.createNewPicture);

router.patch('/:workoutId', pictureController.updateOnePicture);

router.delete('/:workoutId', pictureController.deleteOnePicture);

module.exports = router;