// Controller Layer- All related to HTTP, dealing with requests 
// and responses for endpoints. It talks with the service layer, get information
// and send it over to the routes

const astronomyService = require('../services/astronomyService');


const getAllPictures = async (req, res) => {
    try{
        const allPictures = await astronomyService.getAllPictures();
        res.send({ status: "OK", data: allPictures });
    }
    catch(e){
        res
        .status(e?.status || 500)
        .send({ status: "FAILED", data: { error: e?.message || e } });

    }
};

const getOnePicture = async (req, res) => {
    const id = req.params.pictureId;
    if(!id){
        res
        .status(400)
        .send({
          status: "FAILED",
          data: { error: "Parameter ':pictureId' cannot be empty" },
        });
    }
    try{
        const picture = await astronomyService.getOnePicture(id);
        res.send({ status: "OK", data: picture });
    }
    catch(e){
        res
        .status(e?.status || 500)
        .send({ status: "FAILED", data: { error: e?.message || e } });
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
          data: 
          {
            error:
              "One of the following keys is missing or is empty in request body: 'explanation', 'hdurl', 'title', 'url'",
          },
        });
        return;
      }
      
      try{
          const createdPicture = await astronomyService.createNewPicture(body);
          res.status(201).send({ status: "OK", data: createdPicture });
      }
      catch(e){
          res
          .status(e?.status || 500)
          .send({ status: "FAILED", data: { error: e?.message || e } });
      }

};

const updateOnePicture = async (req, res) => {
    const id = req.params.pictureId;
    const {body} = req;
    if(!id || (!body.explanation &&
                !body.hdurl &&
                !body.title &&
                !body.url))
    {
        res
        .status(400)
        .send({
          status: "FAILED",
          data: { error: "Parameters ':pictureId' or 'body' cannot be empty" }
        });
        return;
    }

    try{
        const updatedPicture = await astronomyService.updateOnePicture(id, body);
        res.send({ status: "OK", data: updatedPicture });
    }
    catch(e){
        res.status(e?.status || 500).send({ status: "FAILED", data: { error: e?.message || e } });
    }
};

const deleteOnePicture = async (req, res) => {
    const id = req.params.pictureId;
    if(!id){
        res
        .status(400)
        .send({
          status: "FAILED",
          data: { error: "Parameter ':pictureId' cannot be empty" },
        });
    }
    try{
        await astronomyService.deleteOnePicture(id);
        console.log("Picture Deleted");
        res.status(204).send({ status: "OK" , data:"Picture deleted"});
    }
    catch(e){
        res
        .status(e?.status || 500)
        .send({ status: "FAILED", data: { error: e?.message || e } });
    }
};

// Export methods used by the routes
module.exports = {
    getAllPictures,
    getOnePicture,
    createNewPicture,
    updateOnePicture,
    deleteOnePicture
};