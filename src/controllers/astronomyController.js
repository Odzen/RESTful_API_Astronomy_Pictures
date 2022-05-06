const getAllPictures = (req, res) => {
    res.send("Get all Pictures");
  };
  
  const getOnePicture = (req, res) => {
    res.send("Get an existing Picture");
  };
  
  const createNewPicture = (req, res) => {
    res.send("Create a new Picture");
  };
  
  const updateOnePicture = (req, res) => {
    res.send("Update an existing Picture");
  };
  
  const deleteOnePicture = (req, res) => {
    res.send("Delete an existing Picture");
  };
  
  module.exports = {
    getAllPictures,
    getOnePicture,
    createNewPicture,
    updateOnePicture,
    deleteOnePicture,
  };