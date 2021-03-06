// Data Access Layer - here we work with our MongoDB.
// And send the data over to the service layer

const DB = require('./seeds.js');
const mongoose = require('mongoose');
// To access to the ENV custom variables
require('dotenv').config();

// Connecting to mongoose
// Import the model
const Picture = require('./models/picture');

// Localhost FOR TESTING IN LOCAL
/*
async function main() {
    try{
        const db = await mongoose.connect(process.env.DB_LOCAL_URL);
        console.log(`Mongo Connection Open in host: ${db.connection.host}`);  
    }
    catch(err){
        console.error("ERROR TRYING TO CONNECT to MONGODB :(");
        console.error(err);
    }
}
*/

// Cloud MongoDB Atlas for DEPLOYMENT ONLY

async function main() {
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Mongo Connection Open in host: ${db.connection.host} - Wait a few seconds more please!! Data is Comming ...`);  
    }
    catch(err){
        console.error("ERROR TRYING TO CONNECT to MONGODB Atlas :(");
        console.error(err);
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
    for (let element of Data){
        const {explanation, hdurl, title, url} =  element;
        if(explanation && hdurl && title && url){
            const newPicture = new Picture(element);
            await newPicture.save();
            count += 1;
        }
    }
    console.log(`DATA IS HERE!! Populated the database with ${count} pictures from the NASA API`);
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
        const title = filterParams.title; // For querying by title
        const limit = parseInt(filterParams.limit, 10) || 10; // For return n=length elements
        const page = parseInt(filterParams.page, 10) || 1; // For pagination
        const explanation = filterParams.explanation;
        const hdurl = filterParams.hdurl;
        const url = filterParams.url;
        

        if(title){
            let titleRegex = new RegExp(title, 'i');
            const pictures = await Picture.paginate({title: {$regex:titleRegex}}, {limit,page});
            return pictures;
        }

        if(explanation){
            let expRegex = new RegExp(explanation, 'i');
            const pictures = await Picture.paginate({explanation: {$regex:expRegex}}, {limit,page});
            return pictures;
        }

        if(hdurl){
            const pictures = await Picture.paginate({hdurl}, {limit,page});
            return pictures;
        }

        if(url){
            const pictures = await Picture.paginate({url}, {limit,page});
            return pictures;
        }
        // Other if-statements will go here for different parameters
        
        // If it is not any filter
        const pictures = await Picture.paginate({}, {limit, page});
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
