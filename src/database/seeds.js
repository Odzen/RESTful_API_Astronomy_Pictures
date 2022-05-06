// Methods to get initial data from the
// Nasa APOD Database and send it over to the Database Layer

const axios = require('axios').default;
const qtyValuesToExtract = 100
const DataFormat = [];
const API_Key = 'A27LKizgGfaJWALLDxfKO8cxeZYxa0NCotVHHu2z';

const getPicturesFromAPI = async (count) => {
    try{
        const {data} = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_Key}&count=${count}`);
        return data;
    }
    catch(e){
        console.log("Error getting the picture from NASA API!", e);
    }
}

const extractNeededFields = async () => {
    try{
        const data = await getPicturesFromAPI(qtyValuesToExtract);
        for (element of data){
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
        //console.log(data);
        return data;
    }
    catch(e){
        console.log("Error extracting needed fields from data", e);
    }
}


//console.log(getAllPicturesNasa());

// Methods to importing data from API NASA
// Export methods used by the Picture.js
module.exports = {
    getAllPicturesNasa
};