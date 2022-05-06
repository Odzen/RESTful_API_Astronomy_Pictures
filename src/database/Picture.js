// Data Access Layer - here we work with our MongoDB.
// And send the data over to the service layer

const DB = require("./seeds.js");

const getAllPictures = () => {
  return DB.Pictures;
};


// Exporting methods for certain database operations
// used by the Service Layer.
module.exports = { getAllPictures };
