// Index.js

const express = require('express');

const app = express();

const bodyParser = require("body-parser");
// Routes for version 1
const v1PictureRouter = require('./v1/routes/astronomyRoutes');

const PORT = process.env.PORT || 3000; 

// Middlewares
app.use(bodyParser.json());
app.use('/api/v1/pictures', v1PictureRouter);



app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT} - Wait! Data is comming...`); 
});
