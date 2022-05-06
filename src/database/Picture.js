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

// Get initial images and save them into the DB
const getSaveAllInitialPictures = async () => {
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

// Working with database to make the database consistent
const getAllPictures = async () => {
    const Data =  await getAllInitialPictures();
    return Data;
};



//console.log(getAllPictures());

// Exporting methods for certain database operations
// used by the Service Layer.
module.exports = { getAllPictures };
