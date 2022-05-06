// All related to HTTP, dealing with requests 
// and responses for endpoints. It talks with the service layer, get information
// and send it over to the routes

const astronomyService = require('../services/astronomyService');


const getAllPictures = (req, res) => {
    const allPictures = astronomyService.getAllPictures();
    res.send('Get all Pictures');
};

const getOnePicture = (req, res) => {
    const picture = astronomyService.getOnePicture();
    res.send('Get an existing Picture');
};

const createNewPicture = (req, res) => {
    const createdPicture = astronomyService.createNewPicture();
    res.send('Create a new Picture');
};

const updateOnePicture = (req, res) => {
    const updatedPicture = astronomyService.updateOnePicture();
    res.send('Update an existing Picture');
};

const deleteOnePicture = (req, res) => {
    astronomyService.deleteOnePicture();
    res.send('Delete an existing Picture');
};

// Export methods used by the routes
module.exports = {
    getAllPictures,
    getOnePicture,
    createNewPicture,
    updateOnePicture,
    deleteOnePicture
};