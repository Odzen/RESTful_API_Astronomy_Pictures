# RESTful_API_Astronomy_Pictures
RESTful API for the input of Astronomy pictures

- Each entry must have the fields "explanation", "hdurl", "title" and "url"
- The API must be able to return data in the JSON format
- The API should provide filter capabilities for all endpoints that return a list of elements, as well should be able to support pagination
- Populate the data with at least 100 images from the Nasa APOD database

## Steps to run it
This API was made using Node.js, Express and MongoDB, so the first steps to run in local would be to check for those programs in your machine. Starting with the `npm` program to install the dependencies.

### 1. Run the dependencies
Use the npm package manager to run all the dependencies for the API to work. You could install them with one command at once:
`npm install`
Or one by one, you could search for them in the file `package.json`.

### 2. Start the app
To start the app you could use `nodemon src/index.js` or `npm run dev`, your choice.

## Documentation
The documentation for this API was made using the npm packages `swagger-ui-express` and `swagger-jsdoc`.

### Graphic Implementation
To see the graphic implementation and test the astronomy API endpoints you should go to the url `http://localhost:3000/api/v1/docs` or just get the endpoint `/docs`. You could use any client (postman, web-browser...) to consume the resources in JSON format.


