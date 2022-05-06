// Service Layer -  methods to hand logic 
// transforming data structures and communicating with Database

const PictureDB = require("../database/Picture");


const getAllPictures = async () => {
    try{
        const allPictures = await PictureDB.getAllPictures();
        //console.log(allPictures);
        return allPictures;
    }
    catch(e){
        console.log("ERROR getting Pictures", e);
    }
};

const getOnePicture = () => {
    return;
};

const createNewPicture = () => {
    return;
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