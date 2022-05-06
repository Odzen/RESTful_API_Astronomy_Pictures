// Service Layer -  methods to hand logic 
// transforming data structures and communicating with Database

const PictureDB = require("../database/Picture");


const getAllPictures = async (filterParams) => {
    console.log(filterParams);
    try{
        const allPictures = await PictureDB.getAllPictures(filterParams);
        return allPictures;
    }
    catch(e){
        throw e;
    }
};

const getOnePicture = async (id) => {
    try{
        const picture = await PictureDB.getOnePicture(id);
        return picture;
    }
    catch(e){
        throw e;
    };
};

const createNewPicture = async (newPicture) => {
    try{
        const createdPicture = await PictureDB.createNewPicture(newPicture);
        return createdPicture;
    }
    catch(e){
        throw e;
    };
};

const updateOnePicture = async (id, body) => {
    try{
        const pictureUpdated = await PictureDB.updateOnePicture(id, body);
        return pictureUpdated;
    }
    catch(e){
        throw e;
    }
};

const deleteOnePicture = async (id) => {
    try{
        await PictureDB.deleteOnePicture(id);
    }
    catch(e){
        throw e;
    }
};

// Export methods used by the controller
module.exports = {
    getAllPictures,
    getOnePicture,
    createNewPicture,
    updateOnePicture,
    deleteOnePicture
};