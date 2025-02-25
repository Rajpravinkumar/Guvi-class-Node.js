//import the app 
const app = require('./app')
// import mongoose 
const mongoose = require('mongoose');

const {MONGODB_URI , PORT}= require ('./utils/config')




// connect to the database 
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connecting to Database server running sucessfull...");

    // listen for end point and start the server
    app.listen(PORT, () => {
      console.log(`Server is running @ http://127.0.0.1:3000`);
    });
  })
  .catch((error) => {
    console.log("Error Connecting to the DataBase", error);
  });