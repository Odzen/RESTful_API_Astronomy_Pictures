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
              url:"http://localhost:3000",
              url: "https://astronomy-restful-api.herokuapp.com/"
          },
      ],
      apis: [`${path.join(__dirname, "./v1/routes/*")}`]
};
 
//settings
const app = express();

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000; 


// Middlewares for VALID routes /api/v1/pictures -- /api/v1/docs
app.use(bodyParser.json());
app.use('/api/v1/pictures', v1PictureRouter); // routes
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerSpec)));


// For OTHER routes different from the api/v1 which is the valid one
app.get("/", (req, res) => {
    res.send({ status: "The route is not valid, use the following to consume the data",
               validRoutes: {
                   endpointToInteractWithPictures : "/api/v1/pictures",
                   endpointForDocumentation : "/api/v1/docs"
               } });
});
app.get("/api", (req, res) => {
    res.send({ status: "The route is not valid, use the following to consume the data",
    validRoutes: {
        endpointToInteractWithPictures : "/api/v1/pictures",
        endpointForDocumentation : "/api/v1/docs"
    } });
});

app.get("/api/v1", (req, res) => {
    res.send({ status: "The route is not valid, use the following to consume the data",
    validRoutes: {
        endpointToInteractWithPictures : "/api/v1/pictures",
        endpointForDocumentation : "/api/v1/docs"
    } });
});

app.listen(PORT,HOST, () => { 
    console.log(`API is listening on port ${PORT} - Wait! Data is comming...`);
});
