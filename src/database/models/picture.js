// Schema for the pictures collection

const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
    explanation: {
        type : String,
        required : true,
        maxLength : 2000
    },
    hdurl : {
        type : String,
        required : true,
        lowercase : true
    },
    title : {
        type : String,
        required : true
    },
    url :{
        type : String,
        required : true,
        lowercase : true

    }
},{
    timestamps : true
}
);

// Compile the model
const Picture = mongoose.model('Picture', pictureSchema);

// Export the model from the file
module.exports = Picture;