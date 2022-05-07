// Schema for the pictures collection

/**
 * @openapi
 * components:
 *   schemas:
 *     Picture:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 6275ef7b57812472addd5e56
 *         explanation:
 *           type: string
 *           example: Would you like to see a total eclipse of the Sun?  If so, do any friends or relatives live near the path of next summer's eclipse?  If yes again, then...
 *         hdurl:
 *           type: string
 *           example: https://apod.nasa.gov/apod/image/1608/tse2017usa_espenak_1421.jpg
 *         title:
 *           type: string
 *           example: Map of Total Solar Eclipse Path in 2017 August
 *         url:
 *           type: string
 *           example: https://apod.nasa.gov/apod/image/1608/tse2017usa_espenak_1080.jpg
 *         createdAt:
 *           type: string
 *           example: 2022-05-07T04:03:07.570Z
 *         updatedAt:
 *           type: string
 *           example: 2022-05-07T04:03:07.570Z
 *         __v:
 *           type: number
 *           example: 0
 */


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