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

const getOnePicture = () => {
    return;
};

const createNewPicture = async (newPicture) => {
    try{
        const createdPicture = await PictureDB.createNewPicture(newPicture);
        return createdPicture;
    }
    catch(e){
        console.log("ERROR getting Pictures", e);
    };
};

const updateOnePicture = () => {
    return;
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