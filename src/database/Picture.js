// Data Access Layer - here we work with our MongoDB.
// And send the data over to the service layer

const DB = require('./seeds.js');
const mongoose = require('mongoose');

// Connecting to mongoose
// Import the model
const Picture = require('./models/picture');

async function main() {
    try{
        await mongoose.connect('mongodb://localhost:27017/astronomy');
        console.log("MONGO CONNECTION OPEN!");  
    }
    catch(err){
        console.log("ERROR TRYING TO CONNECT to MONGODB :(");
        console.log(err);
    }
}

main();

// Delete all, for testing
const deleteAllPictures = async () => {
    await Picture.deleteMany({});
}

// Get initial images and save them into the DB
const getSaveAllInitialPictures = async () => {
    deleteAllPictures();
    const Data =  await DB.getAllPicturesNasa();
    let count = 0;
    for (element of Data){
        const {explanation, hdurl, title, url} =  element;
        if(explanation && hdurl && title && url){
            const newPicture = new Picture(element);
            await newPicture.save();
            count += 1;
        }
    }
    console.log(`Populate the DB with ${count} pictures from the NASA API`);
};
getSaveAllInitialPictures();

// CRUD

// Working with database to make the database consistent -- 
// Create
let isInDB = false;
const createNewPicture = async (newPicture) => {
    const isAlreadyAdded = async () => {
        const {title} =  newPicture;
        const newTitle = await Picture.find({title : title});
        if(newTitle.length != 0){
            isInDB = true;
        }else{
            isInDB = false;
        }
    };
    
    isAlreadyAdded();

    if(isInDB){
        throw {
            status: 400,
            message: `Picture with the title '${newPicture.title}' already exists`
          };
        }
    
    try{
        const newPictureToInsert = new Picture(newPicture);
        await newPictureToInsert.save();
        return newPictureToInsert;
    }
    catch(e){
        throw { status: 500, message: e?.message || e };
    }
    
};


// Read
const getAllPictures = async (filterParams) => {
    try{
        const {title} = filterParams;
        if(title){
            const pictures = await Picture.find({title});
            return pictures;
        }
        // Other if-statements will go here for different parameters
        
        // If it is not any filter
        const pictures = await Picture.find({});
        console.log("Current Length Collection: ", pictures.length);
        return pictures;
    }
    catch(e){
        throw { status: 500, message: e };
    }
};

const getOnePicture = async (id) => {
    try{
        const picture = await Picture.findById(id);
        return picture;
    }
    catch(e){
        throw { status: e?.status || 500, message: e?.message || e };
    }
};

// Update
const updateOnePicture = async (id, body) => {

    try{
        const pictureUpdated = await Picture.findByIdAndUpdate( id , body, {runValidators : true, new : true});
        return pictureUpdated;
    }
    catch(e){
        throw { status: e?.status || 500, message: e?.message || e };
    }
};

// Delete
const deleteOnePicture = async (id) => {
    try{
        await Picture.findByIdAndDelete(id);
    }
    catch(e){
        throw { status: e?.status || 500, message: e?.message || e };
    }
    
};

// Exporting methods for certain database operations
// used by the Service Layer.
module.exports = { 
    getAllPictures,
    createNewPicture,
    getOnePicture,
    updateOnePicture,
    deleteOnePicture
 };
