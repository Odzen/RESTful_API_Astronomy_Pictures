// Methods to get initial data from the
// Nasa APOD Database and send it over to the Database Layer

const axios = require('axios').default;
const qtyValuesToExtract = 5;

const getPicturesNasa = async (count) => {
    try{
        const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=${count}`);
        return res.data;
    }
    catch(e){
        console.log("Error getting the picture from NASA API!", e);
    }
}

const extractNeededFields = async () => {
    const data = await getPicturesNasa(qtyValuesToExtract);
    const dataFormat = [];
    try{
        for (element of data){
            const {explanation, hdurl, title, url} = await element;
            dataFormat.push({explanation:explanation, hdurl:hdurl, title:title, url:url});
        }
        
        return dataFormat;
    }
    catch(e){
        console.log("Error extracting needed fields from data", e);
    }
}

// Methods to importing data from API NASA
// Export methods used by the Picture.js
module.exports = {
    extractNeededFields
};