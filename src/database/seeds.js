// Methods to get initial data from the
// Nasa APOD Database and send it over to the Database Layer

const axios = require('axios').default;
// To access to the ENV custom variables
require('dotenv').config();
// Is the maximum value that acepts the query count in the NASA API
const qtyValuesToExtract = 100;
const DataFormat = [];

const getPicturesFromAPI = async (count) => {
    try{
        const {data} = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.DEV_KEY_API_NASA}&count=${count}`);
        return data;
    }
    catch(e){
        console.log("Error getting the picture from NASA API!", e);
    }
}

const extractNeededFields = async () => {
    try{
        const data = await getPicturesFromAPI(qtyValuesToExtract);
        for (let element of data){
            const {explanation, hdurl, title, url} =  element;
            DataFormat.push({explanation:explanation, hdurl:hdurl, title:title, url:url});
        }
        
        return DataFormat;
    }
    catch(e){
        console.log("Error extracting needed fields from data", e);
    }
}

const getAllPicturesNasa = async () =>{
    try{
        const data = await extractNeededFields();
        return data;
    }
    catch(e){
        console.log("Error extracting needed fields from data", e);
    }
}




// Methods to importing data from API NASA
// Export methods used by the Picture.js
module.exports = {
    getAllPicturesNasa
};