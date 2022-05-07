// Imports

const express = require('express');

const bodyParser = require('body-parser');

const v1PictureRouter = require('./v1/routes/astronomyRoutes');

const path = require('path');


//Swagger
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: { title: "Astronomy API", version: "1.0.0" },
      },
      servers: [
          {
              url:"http://localhost:3000"
          },
      ],
      apis: [`${path.join(__dirname, "./v1/routes/*")}`]
};
 
//settings
const app = express();
const PORT = process.env.PORT || 3000; 

// Middlewares
app.use(bodyParser.json());
app.use('/api/v1/pictures', v1PictureRouter); // routes
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerSpec)));


app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT} - Wait! Data is comming...`);
});
