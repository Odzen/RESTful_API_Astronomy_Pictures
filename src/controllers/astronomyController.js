// Controller Layer- All related to HTTP, dealing with requests 
// and responses for endpoints. It talks with the service layer, get information
// and send it over to the routes

const astronomyService = require('../services/astronomyService');


const getAllPictures = async (req, res) => {
    try{
        const allPictures = await astronomyService.getAllPictures();
        //console.log(allPictures.length);
        res.send({ status: "OK", pictures: allPictures });
    }
    catch(e){
        console.log("ERROR getting Pictures", e);

    }
};

const getOnePicture = (req, res) => {
    const picture = astronomyService.getOnePicture();
    res.send('Get an existing Picture');
};

const createNewPicture = async (req, res) => {
    const {body} = req;
    if (!body.explanation ||
        !body.hdurl ||
        !body.title ||
        !body.url) 
      {
        return;
      }
      /*
      const newPicture = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
      };
      */
      
      const createdPicture = await astronomyService.createNewPicture(body);
      
      res.status(201).send({ status: "OK", picture: createdPicture });
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