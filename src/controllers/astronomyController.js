// Controller Layer- All related to HTTP, dealing with requests 
// and responses for endpoints. It talks with the service layer, get information
// and send it over to the routes

const astronomyService = require('../services/astronomyService');


const getAllPictures = async (req, res) => {
    try{
        const allPictures = await astronomyService.getAllPictures();
        res.send({ status: "OK", pictures: allPictures });
    }
    catch(e){
        console.log("ERROR getting Pictures", e);

    }
};

const getOnePicture = async (req, res) => {
    const id = req.params.pictureId;
    try{
        const picture = await astronomyService.getOnePicture(id);
        res.send({ status: "OK", picture: picture });
    }
    catch(e){
        console.log("ERROR getting Picture", e);
    }
};

const createNewPicture = async (req, res) => {
    const {body} = req;
    if (!body.explanation ||
        !body.hdurl ||
        !body.title ||
        !body.url) 
      {
        res
        .status(400)
        .send({
          status: "FAILED",
          data: {
            error:
              "One of the following keys is missing or is empty in request body: 'explanation', 'hdurl', 'title', 'url'",
          },
        });
        return;
      }
      
      try{
          const createdPicture = await astronomyService.createNewPicture(body);
          res.status(201).send({ status: "OK", picture: createdPicture });
      }
      catch(e){
          console.log("Error controller");
          res
          .status(e?.status || 500)
          .send({ status: "FAILED", data: { error: e?.message || e } });
      }

};

const updateOnePicture = async (req, res) => {
    const id = req.params.pictureId;
    const {body} = req;
    if(!id){
        return;
    }
    const updatedPicture = await astronomyService.updateOnePicture(id, body);
    res.send({ status: "OK", picture: updatedPicture });
};

const deleteOnePicture = async (req, res) => {
    const id = req.params.pictureId;
    if(!id){
        return;
    }
    await astronomyService.deleteOnePicture(id);
    console.log("Picture Deleted");
    res.status(204).send({ status: "OK" });
};

// Export methods used by the routes
module.exports = {
    getAllPictures,
    getOnePicture,
    createNewPicture,
    updateOnePicture,
    deleteOnePicture
};