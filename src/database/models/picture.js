// Schema for the pictures collection

const mongoose = require('mongoose');

// Plugging for pagination
const mongoosePaginate = require('mongoose-paginate-v2');


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
},
    {
    timestamps : true
    }
);

pictureSchema.plugin(mongoosePaginate);

// Compile the model
const Picture = mongoose.model('Picture', pictureSchema);

// Export the model from the file
module.exports = Picture;