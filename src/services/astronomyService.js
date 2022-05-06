// Service Layer -  methods to hand logic 
// transforming data structures and communicating with Database

const PictureDB = require("../database/Picture");


const getAllPictures = async () => {
    try{
        const allPictures = await PictureDB.getAllPictures();
        return allPictures;
    }
    catch(e){
        console.log("ERROR getting Pictures", e);
    }
};

const getOnePicture = async (id) => {
    try{
        const picture = await PictureDB.getOnePicture(id);
        return picture;
    }
    catch(e){
        console.log("ERROR getting Picture", e);
    };
};

const createNewPicture = async (newPicture) => {
    try{
        const createdPicture = await PictureDB.createNewPicture(newPicture);
        return createdPicture;
    }
    catch(e){
        console.log("ERROR Creating Picture", e);
    };
};

const updateOnePicture = async (id, body) => {
    try{
        const pictureUpdated = await PictureDB.updateOnePicture(id, body);
        return pictureUpdated;
    }
    catch(e){
        console.log("ERROR Updating Picture", e);
    }
};

const deleteOnePicture = () => {
    return;
};

// Export methods used by the controller
module.exports = {
    getAllPictures,
    getOnePicture,
    createNewPicture,
    updateOnePicture,
    deleteOnePicture
};