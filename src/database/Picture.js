// Data Access Layer - here we work with our MongoDB.
// And send the data over to the service layer

const DB = require("./seeds.js");

// Working with database to make the database consistent
const getAllPictures = async () => {
    const Data =  await getAllInitialPictures();
    return Data;
};

const getAllInitialPictures = async () => {
    const Data =  await DB.getAllPicturesNasa();
    return Data;
};

//console.log(getAllPictures());

// Exporting methods for certain database operations
// used by the Service Layer.
module.exports = { getAllPictures };
